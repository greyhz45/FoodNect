import React, { Component } from 'react';
import {Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

import styles from './SendLinkComponent.css';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const GuestLinks = (props) => {

    function handleSubmit(value) {
        console.log('Current State is: ' + JSON.stringify(value));
        alert('Current State is: ' + JSON.stringify(value));
        //event.preventDefault();

    }

    return(
        <>
            <LocalForm onSubmit={(values) => handleSubmit(values)} className='container m-2'>
                <Row className="form-group row">
                    <Label htmlFor="name" md={2}>Guest #{props.guests}</Label>
                    <Col md={2}>
                        <Control.text model=".name" id="name" name="name"
                            placeholder="Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                                />
                        <Errors
                            className="text-danger"
                            model=".name"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                            />
                    </Col>

                    <Col md={3}>
                        <Control.text model=".username" id="username" name="username"
                            placeholder="Username"
                            className="form-control"
                            />
                    </Col>

                    <Col md={3}>
                        <Control.text model=".email" id="email" name="email"
                            placeholder="Email"
                            className="form-control"
                            />
                    </Col>

                    <Col md={2}>
                        <Button type="submit" color="primary">
                            Create Link
                        </Button>
                    </Col>
                </Row>
            </LocalForm>        
        </>
    )
}

export default class SendLink extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfGuests: 2
        };
    }

    render() {
        // console.log("commentDialog props:")
        // console.log(this.props);
        return (this.props.trigger) ? (
            <div className="popup">
                <div className="popup-inner container">
                    <div>
                        <Button className='close-btn' onClick={() => this.props.setTrigger(false)}>close</Button>
                    </div>
                    <div className='row'>
                        <h3 className='col-8 offset-4'>
                            Decide by: {this.props.decideBy}
                        </h3>
                        <GuestLinks className='col-12' guests={this.state.numberOfGuests}/>
                        <p className='col-12 col-md-6'>
                            Nulla libero, habitant nisl nisi. Tortor neque mattis mollis! Nam fringilla viverra sociis nec. Erat laoreet mauris gravida diam molestie justo dictum porta. Consequat orci dis dui. Rhoncus porttitor consequat consectetur dolor dapibus sodales nascetur auctor aenean ridiculus integer. Porttitor ultricies morbi neque dolor a dignissim libero fames maecenas, proin vel. Commodo rhoncus nam potenti himenaeos congue arcu risus nisl nec convallis ut posuere. Arcu magna.
                        </p>
                        <p className='col-12 col-md-6'>
                            Etiam turpis ultrices rutrum libero curae; natoque, sed malesuada accumsan mollis. Quis per in duis integer sem massa justo commodo. Porttitor potenti leo, venenatis pharetra consectetur natoque consectetur bibendum convallis in rutrum. Nulla integer tempus rhoncus sodales maecenas eros aliquam laoreet venenatis bibendum libero hac! Rhoncus duis purus nunc quisque laoreet condimentum metus accumsan pellentesque cum. Tortor pharetra egestas donec eu.
                        </p>
                    </div>
                    
                </div>
            </div>
            
        ) : "";
    }
}