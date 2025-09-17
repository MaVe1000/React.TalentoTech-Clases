//componente de la clase 4
import { useState } from "react";

export default function EjemploMouse() {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  return (
    <div
      onMouseOver={() => setMostrarDescripcion(true)}
      onMouseOut={() => setMostrarDescripcion(false)}
      style={{
        border: "1px solid black",
        width: "300px",
        textAlign: "center",
        fontSize: "2rem",
        margin: "10px auto",
        padding: "10px",
      }}
    >
      <p style={{ margin: "0" }}>
        🍕 Pizza. Pasa el mouse por aqui para ver la descripción
      </p>
      {mostrarDescripcion && (
        <p style={{ marginTop: "0.5rem", color: "gray", fontSize: "1rem" }}>
          Masa fina con salsa de tomate, mozzarella y albahaca fresca. Estoy
          usando el evento onMouseOver
        </p>
      )}
    </div>
  );
}
