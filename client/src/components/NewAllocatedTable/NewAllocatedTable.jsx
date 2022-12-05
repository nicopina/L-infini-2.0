import { useParams } from "react-router-dom";
import { useContext, useEffect , useState} from "react";
import { UserContext } from "../../Context/UserContext";
import {getTableRequest} from "../../api/tables.api";
import NoTablePage from "../../pages/NoTablePage";
import './NewAllocatedTable.css';
import {Card,CardBody} from 'reactstrap';
import swal from 'sweetalert';

  

function NewAllocatedTable() {
  const { id } = useParams();
  const [user, setUser, table, setTable] = useContext(UserContext);
  const [exist, setExist] = useState(false);

 //funcion notificacion swal
  function notificacion(){
    swal({
      title: "Su mesa se asignó con exito",
      text: "Será redirigido al menú en breve",
      icon: "info",
      button: false,
    });
  }
 

  useEffect(() => {
    if (id !== undefined) {
      getTableRequest(id).then((res) => {
        if (res.data) {
          setTable(id);
        }
      });
    }
  }, [id]);

  if (table === undefined) {
    return <NoTablePage />;
  }  
  setTimeout( function() { window.location.href = "/menu"; }, 3000  )
  return (

  <Card className="Card">
    <img src="https://cdn.discordapp.com/attachments/966850902319321183/1048086293642481746/Screenshot_2022-12-02_at_00.53.30-PhotoRoom-2.png" />
    <CardBody>
      {notificacion()}
    </CardBody>

  </Card>
  )
}

export default NewAllocatedTable;
