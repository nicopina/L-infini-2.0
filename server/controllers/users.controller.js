import { promisePool } from "../db.js";
import * as authController from "../controllers/auth.controller.js";

//create a function that verifies a rut

const verifyRut = (rut) => {
    let rutAux = rut.replace(/\./g, "");
    rutAux = rutAux.replace(/\-/g, "");
    let rutAux2 = rutAux.substring(0, rutAux.length - 1);
    let dv = rutAux.substring(rutAux.length - 1, rutAux.length);
    let sum = 0;
    let i = 0;
    let j = 2;
    for (i = rutAux2.length - 1; i >= 0; i--) {
        sum = sum + rutAux2.charAt(i) * j;
        j++;
        if (j == 8) {
            j = 2;
        }
    }
    let dvCalc = 11 - (sum % 11);
    if (dvCalc == 11) {
        dvCalc = 0;
    }
    if (dvCalc == 10) {
        dvCalc = "K";
    }
    if (dvCalc == dv) {
        return true;
    } else {
        return false;
    }
}


export const getUsers = async (req,res) => {
  try {
    const [rows] = await promisePool.query("SELECT rut,name,lastname,is_active,role FROM Users");
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
    // return res.json(Users);
};

export const getUser = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Users WHERE rut = ?", [
      req.params.rut,
    ]);
    if (rows.length > 0) {
      return res.json(rows[0]);
    }
    return res.status(404).json({ message: "User not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  try {
    verifyRut(req.body.rut);

    if (verifyRut(req.body.rut) === true) {
        return await authController.signUp(req, res);
    }
    return res.status(400).json({ message: "Rut is not valid" });
   
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    if(req.body.password){
      req.body.password = await authController.encryptPassword(req.body.password);
    }
    req.body.updated_at = new Date();
    const [result] = await promisePool.query(
      "UPDATE Users SET ? WHERE rut = ?",
      [req.body, req.params.rut]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "User updated" });
    }
    res.status(404).json({ message: "User not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const [result] = await promisePool.query("DELETE FROM Users WHERE rut = ?", [
      req.params.rut,
    ]);
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "User deleted" });
    }
    res.status(404).json({ message: "User not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const userExists = async (rut) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Users WHERE rut = ?", [
      rut,
    ]);
    if (rows.length > 0) {
      return true;
    }
    return false;
  } catch (error) {
  }
}

export const getRole = async (req , res) => {
  try {
    const [rows] = await promisePool.query("SELECT role FROM Users WHERE rut = ?", [
      req.params.rut,
    ]);
    if (rows.length > 0) {
      return res.json(rows[0]);
    }
    return res.status(404).json({ message: "User not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
