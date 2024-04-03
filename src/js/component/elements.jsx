import React, {useState} from "react";



//create your first component
const Elementos = () => {
    const [texto, setTexto] = useState("");
    const [tareas, setTareas] = useState([]);
    //mi segunda prueba
    const agregarTarea = (e) => {
        if (e.key === 'Enter' && texto !== '') {
            setTareas([...tareas, texto]);
            setTexto('');
        }
    };
    const eliminarTarea = (indice) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(indice, 1);
        setTareas(nuevasTareas);
    }
    
    const handleChange = (e) => {
        setTexto(e.target.value);
    };
	return (
        <>
            <div>
                <h1>TAREAS</h1>
                <input type="text" value={texto} onChange={handleChange} onKeyDown={agregarTarea} />
                
                <ul>{tareas.map((item, index) => (
                        <p key={index}>{item}
                        <button onClick={() => eliminarTarea(index)}>X</button></p>
                    ))}
                </ul>

            </div>
        
        </>
	);
};

export default Elementos;
//crear un h1 con todos
//crear un input de texto y hacer que se actualice usando el e.target.value
//hacer una array y una función que convierta cada elemento de ese array en item de una lista
//hacer botón para eliminar item de esa lista
//dar formato a las listas y a la pagina
//
//
//
//