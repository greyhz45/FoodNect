import React, { useRef, useContext } from "react";
import AuthContext from '../context/AuthContext'
import { Container, Button, Label, Col, Row } from 'reactstrap';
import { LocalForm } from 'react-redux-form';
import Service from "../api/Services";


//const validSearchString = (val) => /^[A-Z0-9]/i.test(val);

function SearchResto() {
    const { restoList, setRestoList } = useContext(AuthContext);

    const inputRef = useRef();

    //call api
    const handleSubmit = async () => {
        const inputValue = inputRef.current.value;
        try{
            const result = Service.loadAllRestaurant(inputValue)
            const response = await result.then(res=>res.data[0])
            console.log(response);
        }catch(e){
            console.log(e)
        }
    }
    // console.log(restoList);


    return (
        <Container>

           <LocalForm onSubmit={handleSubmit}>
               <Row>
                    <Col>
                        <Label>Search by zip code or city:</Label>
                    </Col>
                    <Col>
                        <input type="text"  ref = {inputRef}/>
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