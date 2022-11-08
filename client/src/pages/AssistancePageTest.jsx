import TablesRequestsList from '../components/NewTableRequest/TablesRequestsList';

import NewTableRequest from '../components/NewTableRequest/NewTableRequest';
import BillAssistanceButton from '../components/NewTableRequest/BillAssistanceButton';

function AssistancePageTest () {


    return (
        <div>
        <h1>Asistencia</h1>
        <h4>Se supone que esta vista es de los meseros</h4>
        <NewTableRequest/>
        <BillAssistanceButton/>
        <TablesRequestsList/>
    
        </div>
    );
}

export default AssistancePageTest;