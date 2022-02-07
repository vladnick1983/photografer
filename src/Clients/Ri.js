import React from "react"
import { Carousel, Container } from "react-bootstrap"

const Ri=()=>{
    return(
      <>
      <Container className="container">
      <Carousel variant="dark">
  <Carousel.Item  style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/renat_irina/ri1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block  w-100 img"
      src="img/client/renat_irina/ri2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/renat_irina/ri3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/renat_irina/ri4.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/renat_irina/ri5.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/renat_irina/ri6.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/renat_irina/ri7.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/renat_irina/ri8.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/renat_irina/ri9.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</Container>
<div className="text-center">
<button type="button"  className="btn selection border mt-3 "><a href="clients" className="text-decoration-none text-reset">НАЗАД К СЕРИЯМ</a></button>
</div>
</>
    )
}
export default Ri