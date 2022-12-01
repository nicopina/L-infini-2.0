import { userExists } from "./users.controller.js";
import { roleExists } from "./roles.controller.js";
import { promisePool } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as config from "../config.js";

export const signUp = async (req, res) => {
  try {
    const { rut, password, name, lastname, is_active, role } = req.body;

    const userExist = await userExists(rut);
    if (!userExist) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = {
        rut,
        password: hashedPassword,
        name,
        lastname,
        is_active,
        role,
      };
      req.params.role = role;
      const roleExist = await roleExists(req);
      if (roleExist) {
        const [rows] = await promisePool.query("INSERT INTO Users SET ?", newUser);
        const token = jwt.sign({ id: newUser.rut }, config.SECRET, {
          expiresIn: 86400, //24 hours
        });
        return res.json(token);
      }
      return res.status(404).json({ message: "Role not found" });
    }
    return res.status(400).json({ message: "User already exists" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const signIn = async (req, res) => {
    // console.log(req.body);
    const response = await promisePool.query("SELECT * FROM Users WHERE rut = ?", [req.body.rut]);
    if (response[0].length > 0) {
        const user = response[0][0];
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (validPassword) {
            const token = jwt.sign({ id: user.rut, role: user.role }, config.SECRET, {
                expiresIn: 86400, //24 hours
            });
            console.log(jwt.verify(token, config.SECRET));
            return res.json(token);
        }
        return res.status(400).json({ message: "Incorrect data" });
    }
    console.log('here');
    return res.status(400).json({ message: "Incorrect data" });
};

export const getUserByToken = async (req, res) => {
    try {
        const user = jwt.verify(req.params.token, config.SECRET);
        const response = await promisePool.query("SELECT * FROM Users WHERE rut = ?", [user.id]);
        if (response[0].length > 0) {
            const user = response[0][0];
            return res.json(user);
        }
        return res.status(404).json({ message: "User not found" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}