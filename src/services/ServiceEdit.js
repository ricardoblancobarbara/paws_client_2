import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../helpers/environment';


const ServiceEdit = (props) => {
    const [editService, setEditService] = useState(props.serviceToUpdate.service);
    const [editPrice, setEditPrice] = useState(props.serviceToUpdate.price);
    const [editAvailability, setEditAvailability] = useState(props.serviceToUpdate.availability);

    const serviceUpdate = (event, service) => {
        event.preventDefault();
        fetch(`${APIURL}/service/update/${props.serviceToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                service: {
                    service: editService,
                    price: editPrice,
                    availability: editAvailability
                }
            }),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.fetchServices();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Update a Service</ModalHeader>
            <ModalBody>
                <Form onSubmit={serviceUpdate}>
                    <FormGroup>
                        <Label htmlFor='service'>Edit Service: </Label>
                        <Input type='select' name='service' value={editService} onChange={(e) => setEditService(e.target.value)}>
                            <option value='Dog Boarding'>Dog Boarding</option>
                            <option value='House Sitting'>House Sitting</option>
                            <option value='Drop-In-Visits'>Drop-In-Visits</option>
                            <option value='Doggy Day Care'>Doggy Day Care</option>
                            <option value='Dog Walking'>Dog Walking</option>                            
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='price'>Edit Price: </Label>
                        <Input name='price' value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='availability'>Edit Availability: </Label>
                        <Input name='availability' value={editAvailability} onChange={(e) => setEditAvailability(e.target.value)} />
                    </FormGroup>
                    <Button type='submit'>Update your service!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ServiceEdit;
