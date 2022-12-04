import { useParams } from "react-router-dom";
import { useContext, useEffect , useState} from "react";
import { UserContext } from "../../Context/UserContext";
import {getTableRequest} from "../../api/tables.api";
import NoTablePage from "../../pages/NoTablePage";
import './NewAllocatedTable.css';
  

function NewAllocatedTable() {
  const { id } = useParams();
  const [user, setUser, table, setTable] = useContext(UserContext);
  const [exist, setExist] = useState(false);

 

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
  
  return <div className="Message">
      NewAllocatedTable
    </div>;
}

export default NewAllocatedTable;
