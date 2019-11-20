import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import MainTable from './MainTable';
import APIURL from './helpers/environment';


function MainPage (props) {
    const [services, setServices] = useState([])

    const fetchServices = () => {
        fetch(`${APIURL}/service/all`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            setServices(logData);
            console.log(logData)
        })        
    }

    useEffect(() => {
        fetchServices();
    }, [])

    return (
        <Container>
            MainPage
            <Row>
                <Col md='9'>
                    <MainTable services={services} fetchServices={fetchServices} token={props.token} />
                </Col>
            </Row>
        </Container>
    )
}

export default MainPage;
