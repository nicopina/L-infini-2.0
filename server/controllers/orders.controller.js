import { promisePool } from "../db.js";
import { getOrderItemsByOrderId } from "./orderItems.controller.js";

/**
 * It gets all the order from the database and returns them as a JSON object
 * @param res - the response object
 * @returns An array of order.
 */
export const getOrders = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Orders");
    // const orders = [];
    // for (const order of rows) {
    //   const orderList = await getOrderItemsByOrderId(order.id);
    //   orders.push({ ...order, orderList });
    // }
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It gets the order with the given id from the database and returns it as a JSON object
 * @param req - The request object containing the order id.
 * @param res - The response object containing the order as JSON.
 * @returns The order with the given id.
 */
export const getOrder = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Orders WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      const orderList = await getOrderItemsByOrderId(rows[0].id);
      rows[0].orderList = orderList;
      return res.json(rows[0]);
    }
    return res.status(404).json({ message: "Order not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It takes the request body, which is the order data, and inserts it into the database
 * @param req - The request object containing the order data.
 * @param res - The response object containing a message if the order was created successfully.
 * @returns a json object with a message if the order was created successfully.
 */
export const createOrder = async (req, res) => {
  try {
    req.body.created_at = new Date();
    req.body.updated_at = new Date();
    const [result] = await promisePool.query("INSERT INTO Orders SET ?", [
      req.body,
    ]);
    return res.json({ message: "Orders saved" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It updates the orders with the given id
 * @param req - The request object containing the orders id and the orders data.
 * @param res - The response object containing a message if the orders was updated successfully.
 * @returns a json object with a message if the orders was updated successfully.
 */
export const updateOrder = async (req, res) => {
  try {
    req.body.updated_at = new Date();
    const [result] = await promisePool.query(
      "UPDATE Orders SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Orders updated" });
    }
    return res.status(404).json({ message: "Orders not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It deletes an orders from the database
 * @param req - The request object containing the orders id.
 * @param res - The response object containing a message if the orders was deleted successfully.
 * @returns a json object with a message if the orders was deleted successfully.
 */
export const deleteOrder = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM Orders WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Orders deleted" });
    }
    return res.status(404).json({ message: "Orders not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It gets all the active orders from the database and returns them as a JSON object
 * @param res - The response object containing the active orders as JSON.
 * @returns An array of active orders.
 */
export const getActiveOrders = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Orders WHERE state = 0"
    );
    const activeOrders = [];
    for (const order of rows) {
      req.params.id = order.id;
      const orderList = await getOrderItemsByOrderId(req);
      activeOrders.push({ ...order, orderList });
    }
    return res.json(activeOrders);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It gets all the orders that are pending payment, and for each order it gets the order items and the
 * dishes that are in the order items.
 * @param req - {
 * @param res - {
 * @returns An array of objects.
 */
export const getOrdersPendingPayment = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT Orders.id as id, Orders.created_at as created_at, Orders.state as state, Orders.table_id as id_table, SUM(OrderItems.quantity * Dishes.value) as total FROM Orders INNER JOIN OrderItems ON Orders.id = OrderItems.order_id INNER JOIN Dishes ON OrderItems.dish_id = Dishes.id WHERE Orders.state = 1 GROUP BY Orders.id"
    );
    const ordersPendingPayment = [];
    for (const order of rows) {
      req.params.id = order.id;
      const orderList = await getOrderItemsByOrderId(req);
      ordersPendingPayment.push({ ...order, orderList });
    }
    return res.json(ordersPendingPayment);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It returns all the items from the OrderItems table that have a state of 2 and an order_id of the
 * order_id that was passed in the request.
 * @param req - the request object
 * @param res - the response object
 * @returns An array of objects.
 */
export const getIfAllItemsAreOk = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM OrderItems WHERE state = 2 AND order_id = ?",
      [req.params.id]
    );
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Get the last order id from the database and return it as a JSON object.
 * @param req - The request object.
 * @param res - the response object
 * @returns The last order id from the Orders table.
 */
export const getLastOrderId = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT id FROM Orders ORDER BY id DESC LIMIT 1"
    );
    return res.json(rows[0].id);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It gets the active orders by table id, and then for each order it gets the order items by order id.
 * @param req - {
 * @param res - {
 * @returns An array of objects.
 */
export const getActiveOrderByTableId = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * , CASE WHEN state = 0 THEN 'En preparaci??n' WHEN state = 1 THEN 'Listo' END AS state_name FROM Orders WHERE state = 0 AND table_id = ?",
      [req.params.id]
    );
    const activeOrders = [];
    for (const order of rows) {
      req.params.id = order.id;
      const orderList = await getOrderItemsByOrderId(req);
      activeOrders.push({ ...order, orderList });
    }
    return res.json(activeOrders);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It returns the number of orders that were created today.
 * </code>
 * @param req - The request object.
 * @param res - the response object
 * @returns The number of orders that have been created today.
 */
export const getCountOrdersToday = async (req, res) => {
  var hoy = new Date();
  var fix = hoy.getTime();
  hoy = new Date(fix);

  try {
    const [rows] = await promisePool.query(
      "SELECT COUNT(*) AS count FROM Orders WHERE date(created_at) = date(?)",
      [hoy]
    );
    return res.json(rows[0].count);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It returns the number of orders created in the last month.
 * @param req - The request object.
 * @param res - the response object
 * @returns The number of orders in the last month.
 */
export const getCountOrdersMonth = async (req, res) => {
  var hoy = new Date();
  var fix = hoy.getTime() - hoy.getTimezoneOffset() * 60000;
  hoy = new Date(fix);

  try {
    const [rows] = await promisePool.query(
      "SELECT COUNT(*) AS count FROM Orders WHERE date(created_at) >= DATE_SUB(?, INTERVAL 1 MONTH)",
      [hoy]
    );
    return res.json(rows[0].count);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * I'm trying to get the count of orders from a specific date.
 * </code>
 * @param req - {
 * @param res - {
 */
export const getCountOrdersOneFullDate = async (req, res) => {
  var aux = new Date(parseInt(req.params.date));
  req.params.date =
    aux.getFullYear() + "-" + (aux.getMonth() + 1) + "-" + aux.getDate();

  try {
    const [rows] = await promisePool.query(
      "SELECT COUNT(*) AS count FROM Orders WHERE DATE(created_at) = date(?)",
      [req.params.date]
    );
    return res.json(rows[0].count);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It returns the daily income of the current month.
 * </code>
 * @param req - The request object.
 * @param res - The response object.
 * @returns The query result.
 */
export const getDailyIncomeMonth = async (req, res) => {
  var hoy = new Date();
  var mes = hoy.getMonth() + 1;

  try {
    const [rows] = await promisePool.query(
      "SELECT DAY(Orders.created_at) as Dia, SUM(Dishes.value*OrderItems.quantity) as Ingreso FROM Orders INNER JOIN OrderItems ON Orders.id = OrderItems.order_id INNER JOIN Dishes ON Dishes.id = OrderItems.dish_id WHERE MONTH(Orders.created_at) = ? GROUP BY DAY(Orders.created_at) ORDER BY DAY(Orders.created_at) ASC",
      [mes]
    );
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * It gets all the orders from the database that were created on the date specified in the request
 * @param req - the request object
 * @param res - the response object
 * @returns An array of objects.
 */
export const getOrdersByDay = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Orders WHERE DATE(created_at) = date(?)"
      , [req.params.date]
    );
    if (rows.length > 0) {
      //save the orderitems of each order
      const orders = [];
      for (const order of rows) {
        req.params.id = order.id;
        const orderList = await getOrderItemsByOrderId(req);
        orders.push({ ...order, orderList });
      }
      return res.json(orders);
    } else {
      return res.status(404).json({ message: "No orders found" });
    }
          // return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
