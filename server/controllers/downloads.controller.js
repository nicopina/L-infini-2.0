import { promisePool } from "../db.js";



export const getOrdersProfit = async (req, res) => {

    const headers = {
        ID: "ID",
        fecha: "fecha",
        id_table: "id_table",
        profit: "profit",
    };

    try {
        var query = "SELECT Orders.id as ID, Orders.created_at as fecha, Orders.table_id as id_table, SUM(OrderItems.quantity * Dishes.value) as profit FROM Orders INNER JOIN OrderItems ON Orders.id = OrderItems.order_id INNER JOIN Dishes ON OrderItems.dish_id = Dishes.id GROUP BY Orders.id";
        const [rows] = await promisePool.query (query);

        //Res = rows, headers
        return res.json({ rows, headers });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getOrderItems = async (req, res) => {
    const headers = {
        ID_Orden: "ID_Orden",
        ID_Plato: "ID_Plato",
        Nombre_Plato: "Nombre_Plato",
        Cantidad: "Cantidad",
        Precio_Unitario: "Precio_Unitario",
        Fecha_hora: "Fecha_hora",
    };
    try{
        var query = "SELECT Orders.id as ID_Orden, OrderItems.id as ID_Plato, Dishes.name as Nombre_Plato, DishCategories.name as Categoria, OrderItems.quantity as Cantidad, Dishes.value as Precio_Unitario, Orders.created_at as Fecha_hora FROM OrderItems INNER JOIN Orders ON OrderItems.order_id = Orders.id INNER JOIN Dishes ON Dishes.id = OrderItems.dish_id INNER JOIN DishCategories ON DishCategories.id = Dishes.category ORDER BY OrderItems.created_at DESC";
        const [rows] = await promisePool.query (query);
        return res.json({ rows, headers });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

    
