import React, {useState} from 'react';
import styled from 'styled-components';
import Producto from './producto';

const Store = () => {

    const [productos, setProductos] = useState([
        {
            id:1,
            nombre:"Camisa Marvel",
            precio:89,
            stock:20,
            imgUrl: process.env.PUBLIC_URL + 'img/camisa1.jpg'
        },
        {
            id:2,
            nombre:"Camisa Marvel",
            precio:89,
            stock:20,
            imgUrl: process.env.PUBLIC_URL + 'img/camisa2.jpg'
        },
        {
            id:3,
            nombre:"Camisa 80 años",
            precio:89,
            stock:20,
            imgUrl: process.env.PUBLIC_URL + 'img/camisa3.jpg'
        },
        {
            id:4,
            nombre:"Camisa Marvel Avengers",
            precio:89,
            stock:0,
            imgUrl: process.env.PUBLIC_URL + 'img/camisa4.jpg'
        },
        {
            id:6,
            nombre:"Camisa Avengers",
            precio:89,
            stock:20,
            imgUrl: process.env.PUBLIC_URL + 'img/camisa6.jpg'
        },
        {
            id:7,
            nombre:"Capitan America",
            precio:89,
            stock:0,
            imgUrl: process.env.PUBLIC_URL + 'img/captain-america.jpg'
        },
        {
            id:8,
            nombre:"Funko Wandavision",
            precio:89,
            stock:20,
            imgUrl: process.env.PUBLIC_URL + 'img/wanda.jpg'
        },
        {
            id:9,
            nombre:"Funko Winter Soldier",
            precio:89,
            stock:20,
            imgUrl: process.env.PUBLIC_URL + 'img/winter-soldier.jpg'
        },
    ])

    return ( 
        <Container>
            <Row>
                {productos.map(producto => (
                    <div className="col-4" key={producto.id}>
                        <Producto datos={producto}/>

                    </div>

                ))}

            </Row>

        </Container>
     );
}
 
export default Store;

const Container = styled.div`
    max-width:1100px;
    margin: 10px auto;
`

const Row = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:25px auto;

    > .col-4{
        width:31%;
        margin:5px 0;
        padding:0 10px;
    }
`;