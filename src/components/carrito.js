import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
const Carrito = () => {

    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        setProductos(JSON.parse(localStorage.getItem('carrito')));
    },[])

    return ( 
        <Container>
            <TableCart>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto=>(
                        <tr>
                            <td><img src={producto.imgUrl} alt="" /></td>
                            <td>{producto.nombre}</td>
                            <td>S/. {producto.precio}</td>
                            <td>1</td>
                        </tr>
                    ))}
                </tbody>

            </TableCart>

            <a href="#" className="btn-pagar">Pagar</a>

        </Container>
    );
}

export default Carrito;

const Container = styled.div`
    max-width:1100px;
    margin: 10px auto;
`

const TableCart = styled.table`
    width:100%;
    border:1px solid #7e7e7e;
    border-collapse:collapse;

    th{
        border:1px solid #7e7e7e;
    }
    td{
        border:1px solid #7d7d7d;
        padding: 10px;
        text-align:center;
    }
    img{
        max-width:180px;
        display:block;
        margin:0 auto;
    }
`