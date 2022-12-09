import { promisePool } from "../db.js";

/**
 * It queries the database for all orderItems and returns them as a JSON object
 * @param res - The response object.
 * @returns An array of orderItems.
 */
export const getOrderItems = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM OrderItems");
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It gets an orderItem from the database and returns it as JSON
 * @param req - The request object containing the orderItem id.
 * @param res - The response object that contains the orderItem as JSON.
 * @returns The orderItem with the id that is passed in the url.
 */
export const getOrderItem = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM OrderItems WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      return res.json(rows[0]);
    }
    return res.status(404).json({ message: "OrderItem not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It takes the request body, which is the orderItem data, and inserts it into the database
 * @param req - The request object containing the orderItem data.
 * @param res - The response object containing a message if the orderItem was created successfully.
 * @returns a JSON object with a message if the orderItem was created successfully.
 */
export const createOrderItem = async (req, res) => {
  try {
    req.body.created_at = new Date();
    req.body.updated_at = new Date();
    const [result] = await promisePool.query("INSERT INTO OrderItems SET ?", [
      req.body,
    ]);
    return res.json({ message: "OrderItem saved" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It updates the orderItem with the given id with the given data
 * @param req - The request object containing the orderItem id and the order data.
 * @param res - The response object containing a message if the orderItem was updated successfully.
 * @returns the result of the query with a message if the orderItem was updated successfully.
 */
export const updateOrderItem = async (req, res) => {
  try {
    req.body.updated_at = new Date();
    const [result] = await promisePool.query(
      "UPDATE OrderItems SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "OrderItem updated" });
    }
    res.status(404).json({ message: "OrderItem not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It deletes an orderItem from the database
 * @param req - The request object containing the orderItem id.
 * @param res - The response object containing a message if the orderItem was deleted successfully.
 * @returns  the result of the query with a message if the orderItem was deleted successfully.
 */
export const deleteOrderItem = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM OrderItems WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "OrderItem deleted" });
    }
    return res.status(404).json({ message: "OrderItem not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It returns all the orderItems that are associated with a specific orderItem summary
 * @param id - the id of the orderItem summary
 * @returns An array of orderItems.
 */
export const getOrderItemsByOrderId = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Dishes INNER JOIN OrderItems ON Dishes.id = OrderItems.dish_id WHERE OrderItems.order_id = ?",
      [req.params.id]
    );
    return rows;
    // return res.status(404).json({ message: "Order not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * This function returns the top N best selling dishes from the database.
 * @param req - the request object
 * @param res - the response object
 * @returns The top N dishes by quantity ordered.
 */
export const getOrderItemsTopBestN = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT Dishes.name, Dishes.value, SUM(OrderItems.quantity) AS quantity FROM Dishes INNER JOIN OrderItems ON Dishes.id = OrderItems.dish_id GROUP BY OrderItems.dish_id ORDER BY quantity DESC LIMIT ?",
      [parseInt(req.params.n)]
    );
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * This function returns the top n worst selling dishes in the database.
 * @param req - the request object
 * @param res - the response object
 * @returns The top N dishes with the least amount of orders.
 */
export const getOrderItemsTopWorstN = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT Dishes.name, Dishes.value, SUM(OrderItems.quantity) AS quantity FROM Dishes INNER JOIN OrderItems ON Dishes.id = OrderItems.dish_id GROUP BY OrderItems.dish_id ORDER BY quantity ASC LIMIT ?",
      [parseInt(req.params.n)]
    );
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It returns the top N best selling dishes by quantity, between a start and end date.
 * @param req - {
 * @param res - the response object
 * @returns An array of objects.
 */
export const getOrderItemsTopBestNByDate = async (req, res) => {
  try {
    req.params.start_date = new Date(parseInt(req.params.start_date));

    req.params.end_date = new Date(parseInt(req.params.end_date));

    const [rows] = await promisePool.query(
      "SELECT Dishes.name, Dishes.value, SUM(OrderItems.quantity) AS quantity FROM Dishes INNER JOIN OrderItems ON Dishes.id = OrderItems.dish_id WHERE OrderItems.created_at >= ? AND OrderItems.created_at <= ? GROUP BY OrderItems.dish_id ORDER BY quantity DESC LIMIT ?",
      [req.params.start_date, req.params.end_date, parseInt(req.params.n)]
    );
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * I'm trying to get the sum of the value of the dishes multiplied by the quantity of the order items,
 * but only for the dishes that were ordered today.
 * </code>
 * @param req - The request object.
 * @param res - the response object
 * @returns The sum of the value of the dishes multiplied by the quantity of the order items.
 */
export const getProfitToday = async (req, res) => {
  var hoy = new Date();
  var fix = hoy.getTime() - hoy.getTimezoneOffset() * 60000;
  hoy = new Date(fix);

  try {
    const [rows] = await promisePool.query(
      "SELECT SUM(Dishes.value * OrderItems.quantity) AS profit FROM Dishes INNER JOIN OrderItems ON Dishes.id = OrderItems.dish_id WHERE date(OrderItems.created_at) = date(?)",
      [hoy]
    );
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * I want to get the sum of the value of the dishes multiplied by the quantity of the order items,
 * where the date of the order items is greater than or equal to the first day of the month and less
 * than the first day of the next month.
 * </code>
 * @param req - request
 * @param res - the response object
 * @returns The sum of the value of the dishes multiplied by the quantity of the order items.
 */
export const getProfitEntireMonth = async (req, res) => {
  var hoy = new Date();
  var fix = hoy.getTime() - hoy.getTimezoneOffset() * 60000;
  hoy = new Date(fix);

  try {
    const [rows] = await promisePool.query(
      "SELECT SUM(Dishes.value * OrderItems.quantity) AS profit FROM Dishes INNER JOIN OrderItems ON Dishes.id = OrderItems.dish_id WHERE date(OrderItems.created_at) >= ? - interval (day(?)-1) day AND date(OrderItems.created_at)< ? + INTERVAL 1 DAY;",
      [hoy, hoy, hoy]
    );
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It gets the profit of a restaurant by a specific date.
 * @param req - the request object
 * @param res - {
 * @returns The sum of the value of the dishes multiplied by the quantity of the order items.
 */
export const getProfitByOneDate = async (req, res) => {

  //Format yyyy-mm-dd to query
  var aux = new Date(parseInt(req.params.date));
  req.params.date =
    aux.getFullYear() + "-" + (aux.getMonth() + 1) + "-" + aux.getDate();

  try {
    const [rows] = await promisePool.query(
      "SELECT SUM(Dishes.value * OrderItems.quantity) AS profit FROM Dishes INNER JOIN OrderItems ON Dishes.id = OrderItems.dish_id WHERE date(OrderItems.created_at) = ?",
      [req.params.date, req.params.date]
    );
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It returns the sum of the value of each dish multiplied by the quantity of each dish sold
 * @param req - {
 * @param res - {
 * @returns The sum of the value of each dish multiplied by the quantity of each dish.
 */
export const getProfitByDateRange = async (req, res) => {
  try {
    req.params.start_date = new Date(parseInt(req.params.start_date));
    req.params.end_date = new Date(parseInt(req.params.end_date));

    const [rows] = await promisePool.query(
      "SELECT SUM(Dishes.value * OrderItems.quantity) AS profit FROM Dishes INNER JOIN OrderItems ON Dishes.id = OrderItems.dish_id WHERE date(OrderItems.created_at) >= date(?) AND date(OrderItems.created_at) <= date(?)",
      [req.params.start_date, req.params.end_date]
    );

    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It returns the number of items sold by hour
 * @param req - The request object.
 * @param res - the response object
 * @returns An array of objects.
 */
export const getItemsSoldByHour = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT HOUR(OrderItems.created_at) AS hour, SUM(OrderItems.quantity) AS quantity FROM OrderItems GROUP BY hour ORDER BY hour ASC"
    );

    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getProfitByAllDates = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT DATE(Orders.created_at) as fecha, SUM(OrderItems.quantity*Dishes.value) as profit FROM OrderItems INNER JOIN Orders ON Orders.id = OrderItems.order_id INNER JOIN Dishes ON Dishes.id = OrderItems.dish_id GROUP BY DATE(Orders.created_at) ORDER BY DATE(Orders.created_at) ASC;"
    );

    //Extraer dia, mes y año de la fecha en campo aparte en json
    for (let i = 0; i < rows.length; i++) {
      rows[i].day = rows[i].fecha.getDate();
      rows[i].month = rows[i].fecha.getMonth() + 1;
      rows[i].year = rows[i].fecha.getFullYear();
    }

    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
