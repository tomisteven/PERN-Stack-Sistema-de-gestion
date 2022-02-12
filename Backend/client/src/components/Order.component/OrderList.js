import React from 'react';
import { _urlOrders } from '../../configURL';
import { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import { Avatar} from '@mui/material';
import swal from 'sweetalert';

export default function OrderList() {

  //states
  const [orders, setOrders] = useState({
    hayOrders: true,
    data: []
  });
  
const getOrders = async () => {
  const respuesta = await fetch(_urlOrders);
  const orders = await respuesta.json();
  console.log(orders);

  
  if(orders.length === 0){
    setOrders({
      hayOrders: false,
      data : []
    });
  }else{
    setOrders({
      data: orders,
      hayOrders: true,
      
    });
    
  }
}

  const deleteOrder = async (id) => {
    swal({
      title: "Estas seguro de eliminar el pedido?",
      text: "se eliminara permanentemente",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Listo eliminado", {
          icon: "success",
        });
        fetch(_urlOrders + "/delete/" + id, {
          method: 'DELETE',
        });
        setOrders(orders.data.filter(order => order._id !== id));
        getOrders();
      } else {
        swal("Perfecto, no se borrara!");
      }
    });
    
  }
  const paramsId = (id) => {
    window.location.href = "/orders/" + id;
  }

     
  
  //cuando se cargue la pagina se ejecuta esta funcion
useEffect(() => {
  getOrders();
  
}, []);
   
  return (
     <div>
       <h1 className='titulo-lista-tareas'>Lista de Productos</h1>
       {
          orders.hayOrders ? 


          <div className="datatable-container">
          <table className="datatable">
            <thead>
              <tr>
                <th>Nº</th>
                <th>Producto</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
              <tbody>
                {
                  orders.data.map((order, index) => ( 
                    <tr key={index}>
                      <td className='numeros'>{index + 1}</td>
                      <td>{order.product}</td>
                      <td>{order.description}</td>
                      <td>{order.price}</td>
                      <td>{order.cantidad}</td>
                      <td><button onClick={()=>deleteOrder(order.id)} className='eliminar'>Eliminar</button> <button onClick={()=> paramsId(order.id)} className='editar'>Editar</button></td>
                    </tr>
                ))
                }
                </tbody>
              
        </table>
        </div>
            
          : 
          <div>
            <Typography variant="h3" sx={{marginTop:"25px", textAlign:"center"}} color={"white"}>
              No hay Pedidos
            </Typography>
            <Avatar sx={{marginTop:"25px", marginX:"auto" ,width:"150px", height:"150px", textAlign:"center"}} src="https://www.kingmaterialshandling.com/wp-content/uploads/2019/09/completed-icon-6.png" />
            

          </div>
     }
    </div> 
  )
}      


  
   

