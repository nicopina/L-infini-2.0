import React from 'react'

function Reload() {
  return (
    <button onClick={() => window.location.reload()}>Reload</button>
  )
}

export default Reload