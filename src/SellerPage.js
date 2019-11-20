import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ServiceCreate from './services/ServiceCreate';
import ServiceTable from './services/ServiceTable';
import ServiceEdit from './services/ServiceEdit';
import APIURL from './helpers/environment';


const SellerPage = (props) => {
    const [services, setServices] = useState([])
    const [updateActive, setUpdateActive] = useState(false);
    const [serviceToUpdate, setServiceToUpdate] = useState({});

    const fetchServices = () => {
        fetch(`${APIURL}/service/getall`, {
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

    const editUpdateService = (service) => {
        setServiceToUpdate(service);
        console.log(service);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false)
    }

    useEffect(() => {
        fetchServices();
    }, [])

    return (
        <Container>
            Seller Page
            <Row>
                <Col md='3'>
                    <ServiceCreate fetchServices={fetchServices} token={props.token} />
                </Col>
                <Col md='9'>
                    <ServiceTable fetchServices={fetchServices} services={services} editUpdateService={editUpdateService}
                    updateOn={updateOn} token={props.token} />
                </Col>
                {updateActive ? <ServiceEdit serviceToUpdate={serviceToUpdate}
                updateOff={updateOff} token={props.token} fetchServices={fetchServices} /> : <></>}
            </Row>
        </Container>
    )
}

export default SellerPage;

















/*
import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ServiceCreate from './services/ServiceCreate';
import ServiceTable from './services/ServiceTable';
import ServiceEdit from './services/ServiceEdit';
import APIURL from './helpers/environment';


const SellerPage = (props) => {
    const [services, setServices] = useState([])
    const [updateActive, setUpdateActive] = useState(false);
    const [serviceToUpdate, setServiceToUpdate] = useState({});

    const fetchServices = () => {
        fetch(`${APIURL}/service/getall`, {
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

    const editUpdateService = (service) => {
        setServiceToUpdate(service);
        console.log(service);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false)
    }

    useEffect(() => {
        fetchServices();
    }, [])

    return (
        <Container>
            <Row>
                <Col md='3'>
                    <ServiceCreate fetchServices={fetchServices} token={props.token} />
                </Col>
                <Col md='9'>
                    <ServiceTable services={services} editUpdateService={editUpdateService}
                    updateOn={updateOn} fetchServices={fetchServices} token={props.token} />
                </Col>
                {updateActive ? <ServiceEdit serviceToUpdate={serviceToUpdate}
                updateOff={updateOff} token={props.token} fetchServices={fetchServices} /> : <></>}
            </Row>
        </Container>
    )
}

export default SellerPage;
*/