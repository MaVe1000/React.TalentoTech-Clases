export const Item = ({ nombre, precio, descripcion, children }) => {
  //recordamos que no es obligatorio usar children
  return (
    <article>
      <h2>{nombre}</h2>
      <p>Precio: {precio}</p>
      <p>Descripción: {descripcion}</p>
      {children}
    </article>
  );
};
