import "./Reload.css";

function Reload() {
  return (
    <>
      <button className="button" onClick={() => window.location.reload()}>
        Recargar Pagina
      </button>
    </>
  );
}

export default Reload;
