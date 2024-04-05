import React, {useState} from "react";



//create your first component
const Elementos = () => {
    const [texto, setTexto] = useState("");
    const [tareas, setTareas] = useState([]);
    const [counter, setCounter] = useState(0);
    //mi segunda prueba
    const agregarTarea = (e) => {
        if (e.key === 'Enter' && texto !== '') {
            setTareas([...tareas, texto]);
            setTexto('');
            setCounter(counter + 1);
        }
    };
    const eliminarTarea = (indice) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(indice, 1);
        setTareas(nuevasTareas);
        setCounter(counter -1);
    }
    
    const handleChange = (e) => {
        setTexto(e.target.value);
    };
	return (
        <div className="caja container d-flex flex-column justify-content-center text-center">
            <h1>TAREAS</h1>
            <div className="carta card">
                <input className="entrada text-start ps-5" type="text" value={texto} onChange={handleChange} onKeyDown={agregarTarea} />
                
                <ul className="m-0 p-0" >{tareas.map((item, index) => (
                    <div className="cajita d-flex">
                        <p className="ps-5" key={index}>{item}
                        </p>
                        <button className="x btn-sm  rounded-pill ms-auto text-end" onClick={() => eliminarTarea(index)}>X</button>
                    </div>
                        
                    ))}
                </ul>
                <p className="pie text-start m-2">{counter} items left</p>
            </div>
        
        </div>
	);
};

export default Elementos;
//crear un h1 con todos
//crear un input de texto y hacer que se actualice usando el e.target.value
//hacer una array y una función que convierta cada elemento de ese array en item de una lista
//hacer botón para eliminar item de esa lista
//dar formato a las listas y a la pagina