import React from 'react'
import { _urlProviders } from '../../configURL';
import { useState, useEffect } from 'react';


export default function ProveedorList() {

  const [proveedores, setProveedores] = useState({
    hayProveedores: true,
    data: []
  });


  const getProveedores = async() => {
    const respuesta = await fetch(_urlProviders);
    const proveedores = await respuesta.json();
    console.log(proveedores);

    if(proveedores.length === 0){
      setProveedores({
        hayProveedores: false,
        data : []
      });

    }
    else{
      setProveedores({
        data: proveedores,
        hayProveedores: true,
      });

    }

  }

  const handleDelete = async(id) => {
    const respuesta = await fetch(_urlProviders + "/delete/" + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    await respuesta.json();
    setProveedores(proveedores.data.filter(task => task.id !== id));
    getProveedores();

  }

  
    const paramsId = (id) => {
      window.location.href = "/providers/" + id;
    }
  






  useEffect(() => {
    getProveedores();
  }, [])

  return (
    <div>  
      <h1 className='titulo-lista-tareas'>Lista de Proveedores</h1>
{  
          
        proveedores.hayProveedores ?
          
        <div className="datatable-container">
          <table className="datatable">
            <thead>
              <tr>
                <th>Nº</th>
                <th>Producto</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
    
              <tbody>
                {
                  proveedores.data.map((proveedor, index) => ( 
                    
                    
                    <tr key={index}>
                      <td className='numeros'>{index + 1}</td>
                      <td>{proveedor.product}</td>
                      <td>{proveedor.name}</td>
                      <td>{proveedor.direction}</td>
                      <td>{proveedor.telefono}</td>
                      <td>{proveedor.email}</td>
                      <td>{proveedor.cantidadproduct} Unidades</td>
                      
                      <td><button onClick={()=>handleDelete(proveedor.id)} className='eliminar'>Eliminar</button> <button onClick={()=> paramsId(proveedor.id)} className='editar'>Editar</button></td>

                    </tr>
                  

                ))
                }
                </tbody>
              
        </table>
        </div> 
              :
              <div>
                <h1>No hay proveedores</h1>
              </div>
            
        
      }
      </div>  

  )
}
