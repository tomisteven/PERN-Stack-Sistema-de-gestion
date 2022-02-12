import React from 'react';
import { _urlTasks} from '../../configURL';
import { useState, useEffect } from 'react';





export default function EditTask() {
    let location = window.location.href;
    let idTask = location.split('/')[4];

    const [task, setTask] = useState({
        _id: idTask,
        title: '',
        description: ''
        
    });

    const getTask = async () => {
        
        const respuesta = await fetch(_urlTasks + "/" + idTask);
        const Task = await respuesta.json();
        setTask({
            _id: idTask,
            title: Task.title,
            description: Task.description
        });
        console.log(Task);
    }

    const onChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });

        console.log(task);
    }
    const editTask = async (e) => {
        e.preventDefault();
        const respuesta = await fetch(_urlTasks + "/edit/" + idTask, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await respuesta.json();
        console.log(data);
        console.log("Editado");

        window.location.href = "/";
    }

    useEffect(() => {
        getTask();
    }, []);



  return <div className='cont-edit'>
        <div className='cont-edit-titulo'>
            <h1>Editar Tarea</h1>
        </div>
            <form onSubmit={editTask}>
                    <div className="formulario"  >
                        <input onChange={onChange} className='inputs' name='title' value={task.title} placeholder={task.title} type="text"/>
                        <input onChange={onChange}  className='inputs'  name='description' value={task.description} type="text"/>
                        

                        <button type='submit'>Editar Tarea</button>
                    </div>
            </form>

        
  </div>;
}
