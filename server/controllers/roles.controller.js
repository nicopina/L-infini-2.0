import { promisePool } from "../db.js";

//a json with roles, any role with a rut, a name, a lastname, a password and a role

// const Roles = [
//     {
//         id: 1,
//         name: "admin",
//     },
//     {
//         id: 2,
//         name: "chef",
//     },
//     {
//         id: 3,
//         name: "waiter",
//     },
// ]

export const getRoles = async (req,res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Roles");
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
    // return res.json(Roles);
};

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
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createRole = async (req, res) => {
  try {
    req.body.created_at = new Date();
    req.body.updated_at = new Date();
    const [result] = await promisePool.query("INSERT INTO Roles SET ?", [
      req.body,
    ]);
    return res.json({ message: "Role saved" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }

};

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
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
    // const role = Roles.find(role => role.id === req.params.id);
    // if (role) {
    //     role.name = req.body.name;
    // }
    // return res.json({ message: "Role updated" });
};

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
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
    // const role = Roles.find(role => role.id === req.params.id);
    // if (role) {
    //     Roles.splice(Roles.indexOf(role), 1);
    //     return res.json({ message: "Role deleted" });
    // }
    // return res.status(404).json({ message: "Role not found" });
};

export const roleExists = async (req, res) => {
    try {
        const [rows] = await promisePool.query(
        "SELECT * FROM Roles WHERE id = ?",
        [req.params.role]
        );
        if (rows.length > 0) {
        return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const countRoles = async () => {
    try {
        const [rows] = await promisePool.query("SELECT COUNT(*) AS count FROM Roles");
        return rows[0].count;
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
    
