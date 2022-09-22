import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { CardHeader } from 'reactstrap';

function FooterStrap(props) {
    return (
        <Card className="text-center">
            <CardHeader>
            <small className="text-muted">
                &copy; {new Date().getFullYear()} All Rights Reserved. Designed &amp; developed by <a href="" target="blank">
                </a>, <a href="https://github.com/tmashoro" target="blank"> Terrence M</a>, <a href="https://github.com/JackAtkerson"
                target="blank">Jack</a>, 
            </small>
            </CardHeader>
        </Card>
      
    )
}

export default FooterStrap;