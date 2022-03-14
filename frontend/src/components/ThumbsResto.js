import React, {Component} from 'react'
import  '../../src/thumbsResto.css'
import {Carousel} from 'react-bootstrap'


class ThumbsResto extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const restoCarousel = this.props.resto.map((resto, index) => {
            return (
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={resto.image}
      alt="Restaurant picture"
    />
    <Carousel.Caption>
      <h3>{resto.name}</h3>
      <p>{resto.type}</p>
      <p>{resto.address}</p>
      <p>Open From: {resto.openFrom}</p>
      <p>Til: {resto.openTo}</p>
    </Carousel.Caption>
  </Carousel.Item>
            );
        });
 
             
                

        return (<>
            <h2 className='RestoContainer'>
      Restaurant Choices
      </h2>
      <body>
      <Carousel>
      {restoCarousel}
      </Carousel>

    
          
      
      /</body> 
           </> 
        );
    }
     
        

        
    
}

export default ThumbsResto;
    




    


