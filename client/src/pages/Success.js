import React, { useEffect } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

function Success() {
    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
            const cart = await idbPromise('cart', 'get');
            const clothes = cart.map(item => item._id);

            if (clothes.length) {
                const { data } = await addOrder({ variables: { clothes } });
                const clotheData = data.addOrder.clothes;

                clotheData.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }

            setTimeout(() => {
                window.location.assign('/');
            }, 3000);
        }

        saveOrder();
    }, [addOrder]);
    return (

        <Container fluid>
            <Row>
                <Col className='text-center'>
                    <h1 className="mt-4">Your order has been submitted!</h1>
                    <h2 className="mt-4">Thank you</h2>
                </Col>
            </Row>
        </Container>

    );
};

export default Success;