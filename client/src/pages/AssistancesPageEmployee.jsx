import TablesRequestsList from "../components/NewTableRequest/TablesRequestsList";

function AssistancesPageEmployee() {
  return (
    <div
      style={{
        marginTop:"100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{color:'black',textAlign:'center',alignItems:'center', margin:'50px 0'}}>Asistencias</h1>
      <div>
        <TablesRequestsList />
      </div>
    </div>
  );
}

export default AssistancesPageEmployee;
