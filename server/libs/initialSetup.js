import { countRoles, createRole } from "../controllers/roles.controller.js";

export const createRoles = async () => {
  try {
    const count = await countRoles();
    if (count == 0) {
      await Promise.all([
        createRole({ name: "admin" }),
        createRole({ name: "chef" }),
        createRole({ name: "mesera/o" }),
      ]);
    }
  } catch (error) {
    console.log(error);
  }
};
