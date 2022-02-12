import React from 'react';
import {Link} from "react-router-dom";

export default function NavVertical() {
  return <div className='contenedor-nav-vertical'>

                <ul className='nav-vertical'>
                    <Link className='li-navertical' aria-current="page" to={"/"}> <i className="fas fa-clipboard"></i> &nbsp; Tareas   </Link>
                    
                    <Link className='li-navertical' aria-current="page" to={"/turns"}>  <i className="fas fa-stopwatch"></i> &nbsp; Turnos </Link>
                    
                    <Link className='li-navertical' aria-current="page" to={"/orders"}><i className="fas fa-shopping-cart"></i>&nbsp; Pedidos</Link>
                    <Link className='li-navertical' aria-current="page" to={"/providers"}> <i className="far fa-address-book"></i> &nbsp; Proveedores</Link>
                
                </ul>


  </div>;
}
