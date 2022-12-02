import jwt from "jsonwebtoken";
import * as config from "../config.js";
import * as userController from "../controllers/users.controller.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, config.SECRET);
    const userExists = await userController.userExists(decoded.id);

    if (userExists) {
      next();
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    //isAdmin
    const token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, config.SECRET);
    if (decoded.role === 1) {
      next();
    } else {
      return res.status(403).json({ message: "Require Admin Role" });
    }
  } catch (error) {
    return res.status(401).json({ message: "te" });
  }
};

export const isChef = async (req, res, next) => {
    try {
        //isChef
        const token = req.headers["x-access-token"];
        const decoded = jwt.verify(token, config.SECRET);
        if (decoded.role === 2) {
            next();
        } else {
            return res.status(403).json({ message: "Require Chef Role" });
        }
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export const isWaiter = async (req, res, next) => {
    try {
        //isWaiter
        const token = req.headers["x-access-token"];
        const decoded = jwt.verify(token, config.SECRET);
        if (decoded.role === 3) {
            next();
        } else {
            return res.status(403).json({ message: "Require Waiter Role" });
        }
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
