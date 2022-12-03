import React from 'react'
import "./Reload.css";
function Reload() {
  return (
    <button class="button" onClick={() => window.location.reload()}>Recargar Pagina</button>
  )
}

export default Reload