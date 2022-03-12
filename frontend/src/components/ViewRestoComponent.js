import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay,
    CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem, Input, Badge } from 'reactstrap';
import { Container, Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import '../css/ViewResto.css'

function RenderResto({resto, index}) {
   
    if (resto !== null) {
        return (
            <div className="wrapper" >

                <Card className="card" key={index} onClick={() => this.props.onClick(resto)}>
                    <CardBody className="cardBody">
                    <CardImg className="cardImg" src={resto.image} alt={resto.name} />
                    <hr />

                        <CardTitle className="cardTitle" tag="h5">{resto.name}</CardTitle>

                        {resto.hrsoperation !== "" ?
                            <Badge variant="success" pill>Open Now</Badge>
                        :   <Badge variant="danger" pill>Closed</Badge>}

                        <CardText className="cardText"><span>Restaurant Type: </span> {resto.type}</CardText>
                        <CardText className="cardText"><span>Complete Address: </span> {resto.address}</CardText>
                        <CardText className="cardText"><span>Hours of Operation: </span> {resto.hrsoperation}</CardText>
                
                        {resto.telnum !== "" ? 
                            <>
                                <CardText className="cardText">Contact #: {resto.telnum}</CardText>
                                <a role="button" className="cardButton btn btn-primary" href={`tel:${resto.telnum}`}><i className="fa fa-phone"></i> Call</a>
                            </>
                        : ""}
                    </CardBody>
                </Card>

            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

export default class ViewResto extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resto: this.props.restaurants,
            disabled: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        const filteredResto = this.props.restaurants.filter(resto => {return resto.type === values.restoType} )
        this.setState({resto: filteredResto});
        console.log("this.state.resto.length: " + this.state.resto.length)
        console.log("this.state.filteredresto.length: " + filteredResto.length)
        filteredResto.length === 0 ? this.setState({disabled: true}) : this.setState({disabled: false});
        console.log("disabled: " + this.state.disabled)
    }

    render() {
        console.log("**enter render")
        console.log("this.state.disabled: " + this.state.disabled)
        const restaurant = this.state.resto.map((resto, index) => {
            return (
                <RenderResto resto={resto} index={index}/>
            );
        });

        return(
            <Container className="container">

                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row>
                            <Col>
                                <Label for="restoType">Filter by Restaurant Type:</Label>
                            </Col>
                            <Col>
                                <Control.select model='.restoType' name='restoType'
                                            className='form-control'>
                                    <option>Select Restaurant Type</option>
                                    <option>Carinderia</option>
                                    <option>Fine Dining</option>
                                    <option>Fast Food</option>

                                </Control.select>
                            </Col>
                            <Col>
                                <Button className="mr-2" type="submit" color="primary">Filter</Button>

                                <Link to="/test"> <Button color="primary" disabled={this.state.disabled}>Send Link</Button> </Link>
                            </Col>
                        </Row>
                    </LocalForm>

                {restaurant}
        </Container>
        );
    }
}