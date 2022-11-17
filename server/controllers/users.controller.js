import { promisePool } from "../db.js";

//a json with users, any user with a rut, a name, a lastname, a password and a role

const Users = [
    {
        rut: "12345678-9",
        name: "Juan",
        lastname: "Perez",
        password: "1234",
        role: 1,
        is_active: true,
    },
    {
        rut: "99999999-9",
        name: "Pedro",
        lastname: "Gonzalez",
        password: "1234",
        role: 2,
        is_active: true,
    },
    {
        rut: "11111111-1",
        name: "Maria",
        lastname: "Gonzalez",
        password: "1234",
        role: 3,
        is_active: true,
    },
]

export const getUsers = async (req,res) => {
//   try {
//     const [rows] = await promisePool.query("SELECT * FROM Users");
//     return res.json(rows);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
    return res.json(Users);
};

export const getUser = async (req, res) => {
//   try {
//     const [rows] = await promisePool.query("SELECT * FROM Users WHERE id = ?", [
//       req.params.id,
//     ]);
//     if (rows.length > 0) {
//       return res.json(rows[0]);
//     }
//     return res.status(404).json({ message: "User not found" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
    const user = Users.find(user => user.rut === req.params.rut);
    if (user) {
        return res.json(user);
    }
    return res.status(404).json({ message: "User not found" });
};

export const createUser = async (req, res) => {
//   try {
//     const [result] = await promisePool.query("INSERT INTO Users SET ?", [
//       req.body,
//     ]);
//     return res.json({ message: "User saved" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
    const user = Users.find(user => user.rut === req.body.rut);
    if (user) {
        return res.status(400).json({ message: "User already registered" });
    }
    Users.push(req.body);
    return res.json({ message: "User saved" });
};

export const updateUser = async (req, res) => {
//   try {
//     const [result] = await promisePool.query(
//       "UPDATE Users SET ? WHERE id = ?",
//       [req.body, req.params.id]
//     );
//     if (result.affectedRows > 0) {
//       return res.status(200).json({ message: "User updated" });
//     }
//     res.status(404).json({ message: "User not found" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
    console.log(req.body);
    const user = Users.find(user => user.rut == req.params.rut);
    if (user) {
        user.name = req.body.name;
        user.lastname = req.body.lastname;
        user.password = req.body.password;
        user.role = req.body.role;
        user.is_active = req.body.is_active;
        // console.log(user);
        return res.json({ message: "User updated" });
    }
    return res.status(404).json({ message: "User not found" });

};

export const deleteUser = async (req, res) => {
//   try {
//     const [result] = await promisePool.query("DELETE FROM Users WHERE id = ?", [
//       req.params.id,
//     ]);
//     if (result.affectedRows > 0) {
//       return res.status(200).json({ message: "User deleted" });
//     }
//     res.status(404).json({ message: "User not found" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
    console.log(req.params.rut);
    const user = Users.find(user => user.rut == req.params.rut);
    if (user) {
        Users.splice(Users.indexOf(user), 1);
        return res.json({ message: "User deleted" });
    }
    return res.status(404).json({ message: "User not found" });
};
