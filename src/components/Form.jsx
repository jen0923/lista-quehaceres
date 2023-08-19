import React, { useState } from "react";

const Form = (props) =>{
    //Desestructurar props
    const { list, setList}=props;
    // Propiedad de la tarea
    const [title, setTitle]= useState("");
    const [status, setStatus]= useState(false);
    // Metodo para anadir tarea
    const addTask = (e)=>{
        e.preventDefault();
        // Si la tarea viene vacia
        if (title.length ===0){
            return;
        }
        const newTask={
            title,status
        }
        setList([...list,newTask]);
    }

    return (
        <div className="cuerpo">
            <form className="cuerpo"  onSubmit={addTask}>
                <label >New Task</label>
                <input className="estilo1" type="text" onChange={(e)=>setTitle(e.target.value)}/>
                <input type="submit" value={"Add task"} />
            </form>

        </div>
    )
}
export default Form;