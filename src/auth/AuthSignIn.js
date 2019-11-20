import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signin from './Signin';


const AuthSignIn = (props) => {
    return (
        <Container className='auth-container'>
            <Row>
                <Col md='6' className='login-col'>
                    <Signin updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default AuthSignIn;