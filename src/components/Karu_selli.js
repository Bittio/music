import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
const Karu_selli = ({images}) =>{
    return (
    <Carousel>
        {images.map(item => 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item.url}
            alt={item.alt}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>)
        }
        
      </Carousel>
    )
}
export default Karu_selli;