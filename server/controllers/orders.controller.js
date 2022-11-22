import { promisePool } from "../db.js";
import { getOrderItemsByOrderId } from "./orderItems.controller.js";

/**
 * It gets all the order from the database and returns them as a JSON object
 * @param res - the response object
 * @returns An array of order.
 */
export const getOrders = async (req,res) => {
  try {
    console.log('here');
    const [rows] = await promisePool.query("SELECT * FROM Orders");
    const orders = [];
    for (const order of rows) {
      const orderList = await getOrderItemsByOrderId(order.id);
      orders.push({ ...order, orderList });
    }
    return res.json(orders);
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
    const [result] = await promisePool.query(
      "INSERT INTO Orders SET ?",
      [req.body]
    );
    return res.json({ message: "Orders saved" });
  } catch (error) {
    console.log(error);
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
    const [result] = await promisePool.query(
      "UPDATE Orders SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Orders updated" });
    }
    return res.status(404).json({ message: "Orders not found" });
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getIfAllItemsAreOk = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM OrderItems WHERE state = 2 AND order_id = ?",
      [req.params.id]
      );
      return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}




