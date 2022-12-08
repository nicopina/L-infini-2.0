import { promisePool } from "../db.js";

/**
 * It's a function that gets all the requests from the database and sends them to the client.
 * @param res - the response object that contains the requests.
 */
export const getRequests = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Tables_Requests ORDER BY state ASC, id ASC"
    );
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It's a function that takes in a request and a response, and then it tries to get a request from the
 * database, and if it finds one, it sends it back to the user, and if it doesn't, it sends back a 404
 * error.
 * @param req - The request object that contains the request id.
 * @param res - the response object that contains JSON with the request.
 */
export const getRequest = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Tables_Requests WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      res.json(rows[0]);
    }
    res.status(404).json({ message: "Request not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It takes a request and a response, and then it tries to insert the request body into the database.
 * If it succeeds, it returns a message saying "Request saved". If it fails, it returns a message
 * saying "Internal server error".
 * @param req - the request object that contains the request.
 * @param res - the response object that contains a JSON with a message.
 */
export const createRequest = async (req, res) => {
  try {
    req.body.created_at = new Date();
    req.body.updated_at = new Date();
    const [result] = await promisePool.query(
      "INSERT INTO Tables_Requests SET ?",
      [req.body]
    );
    res.json({ message: "Request saved" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It updates a request in the database.
 * @param req - request object that contains the request id and the json with the new request.
 * @param res - the response object that contains a JSON with a message.
 */
export const updateRequest = async (req, res) => {
  try {
    req.body.updated_at = new Date();
    const [result] = await promisePool.query(
      "UPDATE Tables_Requests SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Request updated" });
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It deletes a request from the database based on the id of the request.
 * @param req - request object that contains the request id.
 * @param res - the response object that contains a JSON with a message.
 */
export const deleteRequest = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM Tables_Requests WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Request deleted" });
    }
    res.status(404).json({ message: "Request not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPendingRequests = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Tables_Requests WHERE state <> '2' ORDER BY updated_at ASC"
    );
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
