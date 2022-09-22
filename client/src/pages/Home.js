import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';
//import Videot from  "../"


function HomeStrap(props) {

    return (
        <Jumbotron style={{backgroundColor:'transparent'}} fluid>
            <Container>

            <video autoplay muted loop>  
              <source src= 'Videot' type="video/mp4"/>
            </video>

                <Row>
                    <Col className='text-center'>
                        <Image src="./images/umbro2.jpg" alt="shirt" fluid />
                        <h1 className='mt-4'>Shirts?</h1>
                        <h2> Order from our clothes Store</h2>
                        <Button className='mt-4' variant='secondary' href='/menu' size='lg'>
                            Order Now
                        </Button>
                    </Col>
                </Row>

            </Container>
        </Jumbotron>

    )
}

export default HomeStrap;