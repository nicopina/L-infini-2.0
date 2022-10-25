import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";

function ActiveOrdersPage() {
  //   const { activeOrders } = useOrders();
  const activeOrders = [
    {
      id: 1,
      table: 1,
      status: "pending",
      created_at: "2021-10-01T22:00:00.000Z",
      orderList: [
        {
          id: 1,
          name: "Hamburguesa",
          price: 1000,
          quantity: 1,
          photo:
            "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
        },
        {
          id: 2,
          name: "Papas fritas",
          price: 500,
          quantity: 5,
          photo:
            "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
        },
        {
          id: 3,
          name: "Coca cola",
          price: 500,
          quantity: 3,
          photo:
            "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
        },
      ],
    },
    {
      id: 2,
      table: 2,
      status: "pending",
      created_at: "2021-10-01T23:00:00.000Z",
      orderList: [
        {
          id: 1,
          name: "Pizza",
          price: 4900,
          quantity: 1,
          photo:
            "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
        },
        {
          id: 2,
          name: "Nuggets",
          price: 1500,
          quantity: 6,
          photo:
            "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
        },
        {
          id: 3,
          name: "Fanta",
          price: 1000,
          quantity: 2,
          photo:
            "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
        },
      ],
    },
  ];

    activeOrders.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
    });

  return (
    <TableContainer component={Paper}>
      {activeOrders.map((order, index) => (
        <Card
          key={index}
          style={{ backgroundColor: "#606060", margin: "10px" }}
        >
          <CardContent>
            <Table
              sx={{ minWidth: 700 }}
              aria-label="spanning table"
              key={index}
            >
              <TableBody>
                <TableRow>
                  <TableCell
                    align="center"
                    colSpan={0}
                    style={{ backgroundColor: "#A0A0A0" }}
                  >
                    <p>ID</p>
                    <p>{order.id}</p>
                  </TableCell>
                  <TableCell
                    align="center"
                    colSpan={1}
                    style={{ backgroundColor: "#808080" }}
                  >
                    <p>Mesa</p>
                    <p>{order.table}</p>
                  </TableCell>
                  <TableCell
                    align="center"
                    colSpan={2}
                    style={{ backgroundColor: "#A0A0A0" }}
                  >
                    <p>Hora Pedido</p>
                    <p>{order.created_at}</p>
                  </TableCell>
                </TableRow>
                {order.orderList.map((item) => (
                  <TableRow
                    key={item.id}
                    style={{ backgroundColor: "#C0C0C0" }}
                  >
                    <TableCell align="center" colSpan={0}>
                      <p>{item.name}</p>
                    </TableCell>
                    <TableCell align="center" colSpan={1}>
                      <p>{item.quantity}</p>
                    </TableCell>
                    <TableCell align="center" colSpan={0}>
                      <input type="checkbox" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="contained" style={{ backgroundColor: "green" }}>Pedido Listo</Button>
          </CardContent>
        </Card>
      ))}
    </TableContainer>
  );
}

export default ActiveOrdersPage;
