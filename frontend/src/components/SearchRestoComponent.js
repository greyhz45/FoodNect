import React, { useState, useContext } from "react";
import { SearchContext } from '../context/SearchContext'
import { Card, CardImg, CardImgOverlay,
    CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem, Input, Badge } from 'reactstrap';
import { Container, Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import axios from "axios";

import Service from "../api/Services";

const validSearchString = (val) => /^[A-Z0-9]/i.test(val);

function SearchResto() {
//    const { setResto } = useContext(SearchContext);


const handleSubmit = (values) => {

    {console.log("before fetch api")}

    if(validSearchString(values.searchField)) {

        fetch(`http://localhost:8080/api/restaurants/search?completeAddress=${values.searchField}`,
                      {mode: 'no-cors', headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJncmFjZSIsImV4cCI6MTY0NzMwNTM2OCwiaWF0IjoxNjQ3MzA0NDY4fQ.6xU57h_S3eUYPcY4uNLmxfAePnB09pqZobCp58-s7go'}})
                    .then((res) => res.json())
                    .then((json) => {

                        console.log("json: " + json);
                    })
    } else {
        alert("Invalid search string entered!");
    }
}

    return (
        <Container>

           <LocalForm onSubmit={(values) => handleSubmit(values)}>
               <Row>
                    <Col>
                        <Label>Search by zip code or city:</Label>
                    </Col>
                    <Col>
                        <Control.text model='.searchField' name='searchField'
                            className='form-control'>
                        </Control.text>
                    </Col>
                    <Col>

                       <Button className="mr-2" type="submit" color="primary">Search</Button>

                    </Col>
               </Row>
           </LocalForm>


        </Container>
    );

}

export default SearchResto;