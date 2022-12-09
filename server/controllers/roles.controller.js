import { promisePool } from "../db.js";

/**
 * This function gets all the roles from the database and returns them as a JSON object.
 * @param req - The request object.
 * @param res - The response object.
 * @returns An array of objects.
 */
export const getRoles = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Roles");
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It takes the id of a role from the URL, and returns the role with that id.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The role with the id that was passed in the request.
 */
export const getRole = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Roles WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length > 0) {
      return res.json(rows[0]);
    }
    return res.status(404).json({ message: "Role not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It takes a request and a response, and then it tries to insert a new role into the database.
 *
 * If it succeeds, it returns a JSON object with a message.
 *
 * If it fails, it returns a 500 error.
 * @param req - The request object.
 * @param res - the response object
 * @returns The result of the query.
 */
export const createRole = async (req, res) => {
  try {
    req.body.created_at = new Date();
    req.body.updated_at = new Date();
    const [result] = await promisePool.query("INSERT INTO Roles SET ?", [
      req.body,
    ]);
    return res.json({ message: "Role saved" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It updates a role in the database.
 * @param req - The request object.
 * @param res - the response object
 * @returns The result of the query.
 */
export const updateRole = async (req, res) => {
  try {
    req.body.updated_at = new Date();
    const [result] = await promisePool.query(
      "UPDATE Roles SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Role updated" });
    }
    res.status(404).json({ message: "Role not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It deletes a role from the database.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The result of the query.
 */
export const deleteRole = async (req, res) => {
  try {
    const [result] = await promisePool.query("DELETE FROM Roles WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Role deleted" });
    }
    res.status(404).json({ message: "Role not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * This function checks if a role exists in the database and returns true if it does and false if it
 * doesn't.
 * @param req - the request object
 * @param res - the response object
 * @returns A boolean value.
 */
export const roleExists = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Roles WHERE id = ?", [
      req.params.role,
    ]);
    if (rows.length > 0) {
      return true;
    }
    return false;
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * This function returns the number of rows in the Roles table.
 * @returns The number of rows in the Roles table.
 */
export const countRoles = async () => {
  try {
    const [rows] = await promisePool.query(
      "SELECT COUNT(*) AS count FROM Roles"
    );
    return rows[0].count;
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
