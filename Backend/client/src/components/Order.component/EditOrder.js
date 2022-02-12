import React from 'react';
import { _urlOrders} from '../../configURL';
import { useState, useEffect } from 'react';





export default function EditOrder() {
    let location = window.location.href;
    let idOrder = location.split('/')[4];

    const [order, setOrder] = useState({
        _id: idOrder,
        product: '',
        description: '',
        price: '',
        cantidad: '',
        
    });

    const getOrder = async () => {
        
        const respuesta = await fetch(_urlOrders + "/" + idOrder);
        const Order = await respuesta.json();
        setOrder({
            _id: idOrder,
            product: Order.product,
            description: Order.description,
            price: Order.price,
            cantidad: Order.cantidad
        });
        console.log(Order);
    }

    const onChange = e => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        });

        console.log(order);
    }
    const editOrder = async (e) => {
        e.preventDefault();
        const respuesta = await fetch(_urlOrders + "/edit/" + idOrder, {
            method: 'PUT',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await respuesta.json();
        console.log(data);
        console.log("Editado");

        window.location.href = "/orders";
    }

    useEffect(() => {
        getOrder();
    }, []);



  return <div className='cont-edit'>
        <div className='cont-edit-titulo'>
            <h1>Editar Pedido</h1>
        </div>
            <form onSubmit={editOrder}>
                    <div className="formulario-orders"  >
                        <label className='label-producto'>Producto</label>
                        <input onChange={onChange} className='inputs' name='product' value={order.product} placeholder={order.product} type="text"/>
                        <label className='label-producto'>Descripcion</label>
                        <input onChange={onChange}  className='inputs'  name='description' value={order.description} type="text"/>
                        <label className='label-producto'>Precio</label>
                        <input onChange={onChange}  className='inputs'  name='price' value={order.price} type="text"/>
                        <label className='label-producto'>Cantidad</label>
                        <input onChange={onChange}  className='inputs'  name='cantidad' value={order.cantidad} type="text"/>
                        

                        <button type='submit'>Editar Tarea</button>
                    </div>
            </form>

        
  </div>;
}
