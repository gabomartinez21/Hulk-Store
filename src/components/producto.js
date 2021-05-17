import React from 'react';
import styled from 'styled-components';
const Producto = ({datos}) => {

    const agregarCarrito = (e)=>{
        e.preventDefault();
        let carrito = [];
        if(localStorage.getItem('carrito')){
            carrito = JSON.parse(localStorage.getItem('carrito'));
        }
        carrito.push(datos);
        localStorage.setItem('carrito',JSON.stringify(carrito))
    }

    const noAgregar = (e)=>{
        e.preventDefault();
        alert('Este producto no esta disponible ya que no contamos con stock.')
    }

    return ( 
        <Card>
            <img src={datos.imgUrl} alt="" />
            <div className="contenido">
                <h3>{datos.nombre}</h3>
                <p>S/. {datos.precio}</p>
                <p class={datos.stock > 0 ? 'stock' : 'no-stock'}>{datos.stock > 0 ? 'Disponible' : 'No disponible'} </p>
                {datos.stock > 0 ? (
                    <a href="#" className="btn" onClick={agregarCarrito}>Agregar al carrito</a>

                ):(
                    <a href="#" className="btn noProduct" onClick={noAgregar}>Agregar al carrito</a>

                )}
            </div>
        </Card>
    );
}

export default Producto;


const Card = styled.div`
    border:1px solid #e3e3e3;
    border-radius:10px;
    padding:5px 8px;
    text-align:center;

    > img{
        width:100%;
    }
    
    > .contenido h3{
        font-size:28px;
        margin:15px auto;
        color:#3e3e3e;
        max-height:250px;
    }
    > .contenido p{
        font-size:24px;
        color:#9437f2;
        font-weight:bold;
        margin:0;
    }
    > .contenido p.stock{
        font-size:16px;
        font-weight:400;
        color:green;
    }
    > .contenido p.no-stock{
        font-size:16px;
        font-weight:400;
        color:red;
    }
    .btn{
        color:#fff;
        background-color:#27a6e5;
        border-radius:5px;
        text-decoration:none;
        padding:8px 15px;
        display:block;
        margin:10px auto;
        width:fit-content;
    }
    .btn.noProduct{
        background-color:#a3c7d8;
    }
`