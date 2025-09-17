/*import "./App.css";
import { Boton } from "./components/Boton";
import { Item1 } from "./components/Item1";
import { Item2 } from "./components/Item2";
import { Item3 } from "./components/Item3";
import { Item4 } from "./components/Item4";
import { Item5 } from "./components/Item5";
import { Item6 } from "./components/Item6";

function App() {
  const prod = { nombre: "Remera", precio: 10000, descripcion: "LALALA" };
  return (
    <>
      <div>
        <Boton texto={"Enviar"} color={"green"} />
        <Boton texto={"Cancelar"} color={"red"} />
        <Item1
          nombre={prod.nombre}
          precio={prod.precio}
          descripcion={prod.descripcion}
        >
          <button>un boton</button>
        </Item1>
        <Item2 item={prod} />
        <Item3 {...prod} />
        <Item4 {...prod} destacado={false} />
        <Item6 nombre="Remera" precio={5000} />
        <Item5>
          <h1>Este tiene children</h1>
          <p>{prod.nombre}</p>
          <p>{prod.precio}</p>
        </Item5>
      </div>
    </>
  );
}

export default App;*/

import "./App.css";
import { Boton } from "./components/Boton";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";

function App() {
  //const prod = { nombre: "Remera", precio: 10000, descripcion: "LALALA" };
  return (
    <>
      <div>
        <Header />
        <Boton color={"green"} texto={"Saludar"} />
        <Form />
        <Footer />
      </div>
    </>
  );
}
export default App;
