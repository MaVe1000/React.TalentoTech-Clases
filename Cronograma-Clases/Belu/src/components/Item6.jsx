export const Item6 = (props) => {
  //Se recibe el objeto porps completo, sin desestructurar
  //Desestructuramos luego, dentro del componente
  const { nombre, precio } = props;

  return (
    <article>
      <p>Item 6</p>
      <p>{nombre}</p>
      <p>{precio}</p>
    </article>
  );
};

//Montaje: pasamos las props independientes que se guardan en el objeto "props" de react
//<Item6 nombre={"Remera"} precio={5000}/>
