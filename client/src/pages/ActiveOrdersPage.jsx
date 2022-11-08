import { Card, CardContent, Grid } from "@mui/material";
import { Button } from "@mui/material";
import OrderActiveOrders from "../components/ActiveOrders/OrderActiveOrders";
import { getActiveOrders } from "../api/orders.api"

function ActiveOrdersPage() {
  //   const { activeOrders } = useOrders();
  async function showActiveOrders () {
    getActiveOrders().then((response) => {
      console.log(response)
    })
  }
  showActiveOrders();
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
          status: false,
          photo:
            "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
        },
        {
          id: 2,
          name: "Papas fritas",
          price: 500,
          quantity: 5,
          status: false,
          photo:
            "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
        },
        {
          id: 3,
          name: "Coca cola",
          price: 500,
          quantity: 3,
          status: false,
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
          status: false,
          photo:
            "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
        },
        {
          id: 2,
          name: "Nuggets",
          price: 1500,
          quantity: 6,
          status: false,
          photo:
            "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
        },
        {
          id: 3,
          name: "Fanta",
          price: 1000,
          quantity: 2,
          status: false,
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
    <Grid
      container
      columns={12}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Grid item xs={12} sm={12} lg={12}>
        <h1>Pedidos activos</h1>
      </Grid>
      {activeOrders.map((order, index) => (
        <OrderActiveOrders order={order} key={index} />
      ))}
    </Grid>
  );
}

export default ActiveOrdersPage;
