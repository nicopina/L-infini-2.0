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
