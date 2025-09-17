import { useState } from "react";

export const Form2 = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Funciona!! Estado: ${nombre}, ${email}`);
    setNombre("");
    setEmail("");
    setPassw("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Ingresa tu Nombre..."
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Ingresa tu Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Ingresa la Contraseña:..."
        value={passw}
        onChange={(e) => setPassw(e.target.value)}
      />
      <input type="submit" value={"Enviar"} />
    </form>
  );
};

//Forma controlada: cada input tiene su propio estado y su propio manejador de evento onChange
//Forma no controlada: se maneja el estado del formulario en el evento onSubmit, y se accede a los valores de los inputs a traves de "e.target.nombreDelInput.value"
