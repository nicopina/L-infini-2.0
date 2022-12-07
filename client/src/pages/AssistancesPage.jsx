import TablesRequestsList from "../components/NewTableRequest/TablesRequestsList";

function AssistancesPage() {
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
      <h1 style={{color:'black'}}>Asistencias</h1>
      <div>
        <TablesRequestsList />
      </div>
    </div>
  );
}

export default AssistancesPage;
