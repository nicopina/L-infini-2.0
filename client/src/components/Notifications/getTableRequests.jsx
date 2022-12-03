import { getRequest } from "../../api/requests.api";

var funcion = async function getTablesRequests() {
  const response = await getRequests();
  return response.data;
};

function TablesRequestsList() {
  const [requests, setRequests] = React.useState([]);

  useEffect(() => {
    funcion().then((response) => {
      setRequests(response);
    });
  }, []);
}

export default Notifications;
