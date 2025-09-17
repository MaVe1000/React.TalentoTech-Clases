import {useState} from "react";

const Form = () => {
    const [user, setUser] = useState({
        nombre: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        //Forma de actualizar el estado de forma directa
        setUser({
            ...user,
            [name]: value,
        }); // Computed property names de ES6 (para actualizar la propiedad dinámica)
      /*Forma de actualizar un estado con el valor "previo" a mi actualizacion: por convencion, se le llama "prev" o "prevEstado"
    Esta forma utiliza una funcion con un parametro que siempre traera el ultimo valor del estado
    antes de actualizar con lo nuevo*/

    //setUser((prev) => ({ ...prev, [name]: value }));
};
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${user.name} ingreso su correo y contraseña`);
        console.log(user);
        //Resetear el formulario
        setUser({
            nombre: "",
            email: "",
            password: "",
        });
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Ingresa tu Nombre"
                required
                value={user.nombre}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Ingresa tu Email"
                required
                value={user.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Ingresa la Contraseña"
                required
                value={user.password}
                onChange={handleChange}
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;

