import React, {useState, useEffect, Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../helpers/environment';
{/*import Calendar from 'react-calendar';*/}

const ServiceCreate = (props) => {
    const [service, setService] = useState('');
    const [price, setPrice] = useState('');
    const [availability, setAvailability] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/service/create`, {
            method: 'POST',
            body: JSON.stringify({
                service: {
                    service: service,
                    price: price,
                    availability: availability
                }                
            }),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }) 
        })
        .then((res) => res.json())
        .then(console.log('hit point'))
        .then((logData) => {
            console.log(logData);
            setService('');
            setPrice('');
            setAvailability('');
            props.fetchServices();
        })
    }
/*
    class Myapp extends Component {
        state = {
            date: new Date(),
          }   
    }

    const onChange = date => this.setState({ date })
*/

    return (
        <div>
            <h3>Service to offer</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='service'>Service</Label>
                    <Input onChange={(e) => setService(e.target.value)} type='select' name='service' value={service}>
                        <option value='Dog Boarding'>Dog Boarding</option>
                        <option value='House Sitting'>House Sitting</option>
                        <option value='Drop-In-Visits'>Drop-In-Visits</option>
                        <option value='Doggy Day Care'>Doggy Day Care</option>
                        <option value='Dog Walking'>Dog Walking</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='price'>Price</Label>
                    <Input onChange={(e) => setPrice(e.target.value)} name='price' value={price} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='availability'>Availability</Label>
                    <Input onChange={(e) => setAvailability(e.target.value)} name='availability' value={availability} />
                    {/*<Calendar onChange={(date) => this.setAvailability({ date })} value={availability} />*/}
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default ServiceCreate;