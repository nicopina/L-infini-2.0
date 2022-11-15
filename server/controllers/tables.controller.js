import { promisePool } from "../db.js";


/**
 * It's a function that takes in a request and a response, and then it tries to get the rows from the
 * database, and then it sends the rows back to the client.
 * @param res - The response object that contains the tables.
 */
export const getTables = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Tables");
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

/**
 * It's a function that takes in a request and a response, and then it tries to get a table from the
 * database, and if it finds one, it sends it back to the client, and if it doesn't, it sends a 404
 * error message.
 * @param req - The request object that contains the table id.
 * @param res - the response object that contains JSON with the table.
 */
export const getTable = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Tables WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      res.json(rows[0]);
    }
    res.status(404).json({ message: "Table not found" });
  } catch (error) {
    console.log(error);
  }
};

/**
 * It takes the request body and inserts it into the database.
 * @param req - The request object that contains the table.
 * @param res - the response object that contains a JSON with a message.
 */
export const createTable = async (req, res) => {
  try {
    const [result] = await promisePool.query("INSERT INTO Tables SET ?", [
      req.body,
    ]);
    res.json({ message: "Table saved" });
  } catch (error) {
    console.log(error);
  }
};

/**
 * It updates the table with the id that is passed in the url.
 * @param req - the request object that contains the table id and the json with the new table.
 * @param res - the response object that contains a JSON with a message.
 */
export const updateTable = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "UPDATE Tables SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      res.json({ message: "Table updated" });
    }
    res.status(404).json({ message: "Table not found" });
  } catch (error) {
    console.log(error);
  }
};

/**
 * It deletes a table from the database.
 * @param req - request object that contains the table id.
 * @param res - the response object that contains a JSON with a message.
 */
export const deleteTable = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM Tables WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      res.json({ message: "Table deleted" });
    }
    res.status(404).json({ message: "Table not found" });
  } catch (error) {
    console.log(error);
  }
};
