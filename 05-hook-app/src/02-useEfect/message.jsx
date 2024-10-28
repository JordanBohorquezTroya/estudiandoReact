import { useState, useEffect } from "react";

export const Message = () => {

  const [coord, setcoord] = useState({x : 0, y: 0})
  
  useEffect(() => {
    const MovimientoMouse = ({x, y}) => {
      setcoord({x, y})
    }
    window.addEventListener('mousemove', MovimientoMouse)
  
    return () => {
      window.removeEventListener('mousemove', MovimientoMouse)
    }
  }, [coord])
  
  
  return (

    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coord)}
    </>
  );
};
