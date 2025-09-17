//componente de la clase 4
export const Boton = ({ texto, color }) => {
  const estilos = {
    backgroundColor: color,
    color: "white",
  };

  const saludar = () => {
    alert("Botón clikeado. Hola");
  };

  return (
    <button style={estilos} onClick={saludar}>
      {texto}
    </button>
  );
};
