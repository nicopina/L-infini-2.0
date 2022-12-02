import { promisePool } from "../db.js";

/**
 * It queries the database for all orderItems and returns them as a JSON object
 * @param res - The response object.
 * @returns An array of orderItems.
 */
export const getOrderItems = async (req,res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM OrderItems");
    return res.json(rows);
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It returns all the orderItems that are associated with a specific orderItem summary
 * @param id - the id of the orderItem summary
 * @returns An array of orderItems.
 */
export const getOrderItemsByOrderId = async (req,res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Dishes INNER JOIN OrderItems ON Dishes.id = OrderItems.dish_id WHERE OrderItems.order_id = ?",
      [req.params.id]
    );
    return rows;
    // return res.status(404).json({ message: "Order not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


