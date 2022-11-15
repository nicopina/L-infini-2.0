import { promisePool } from "../db.js";

/**
 * It queries the database for all orders and returns them as a JSON object
 * @param res - The response object.
 * @returns An array of orders.
 */
export const getOrders = async (res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Orders");
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It gets an order from the database and returns it as JSON
 * @param req - The request object containing the order id.
 * @param res - The response object that contains the order as JSON.
 * @returns The order with the id that is passed in the url.
 */
export const getOrder = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Orders WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      return res.json(rows[0]);
    }
    return res.status(404).json({ message: "Order not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It takes the request body, which is the order data, and inserts it into the database
 * @param req - The request object containing the order data.
 * @param res - The response object containing a message if the order was created successfully.
 * @returns a JSON object with a message if the order was created successfully.
 */
export const createOrder = async (req, res) => {
  try {
    const [result] = await promisePool.query("INSERT INTO Orders SET ?", [
      req.body,
    ]);
    return res.json({ message: "Order saved" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It updates the order with the given id with the given data
 * @param req - The request object containing the order id and the order data.
 * @param res - The response object containing a message if the order was updated successfully.
 * @returns the result of the query with a message if the order was updated successfully.
 */
export const updateOrder = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "UPDATE Orders SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Order updated" });
    }
    res.status(404).json({ message: "Order not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It deletes an order from the database
 * @param req - The request object containing the order id.
 * @param res - The response object containing a message if the order was deleted successfully.
 * @returns  the result of the query with a message if the order was deleted successfully.
 */
export const deleteOrder = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM Orders WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Order deleted" });
    }
    return res.status(404).json({ message: "Order not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It returns all the orders that are associated with a specific order summary
 * @param id - the id of the order summary
 * @returns An array of orders.
 */
export const getOrdersByOrderSummaryId = async (id) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Dishes INNER JOIN Orders ON Dishes.id = Orders.dish_id WHERE Orders.sumary_id = ?",
      [id]
    );
    return rows;
    // return res.status(404).json({ message: "Order not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It takes an order id as a parameter, and then updates the status of the order with that id
 * @param req - The request object containing the order id.
 * @param res - The response object containing a message if the order was updated successfully.
 * @returns the status of the order.
 */
export const okOrder = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "UPDATE Orders SET statuss = NOT statuss WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Order updated" });
    }
    res.status(404).json({ message: "Order not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}


