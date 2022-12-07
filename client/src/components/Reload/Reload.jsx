import "./Reload.css";

function Reload() {
  return (
    <>
      <button className="buttonf" onClick={() => window.location.reload()}>
        Recargar Pagina
      </button>
    </>
  );
}

export default Reload;
