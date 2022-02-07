import React from "react"
import { Carousel, Container } from "react-bootstrap"

const Pregnancy=()=>{
    return(
      <>
      <Container className="container">
      <Carousel variant="dark">
  <Carousel.Item  style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/pregnancy/pregnancy1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block  w-100 img"
      src="img/client/pregnancy/pregnancy2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/pregnancy/pregnancy3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/pregnancy/pregnancy4.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/pregnancy/pregnancy5.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/pregnancy/pregnancy6.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/pregnancy/pregnancy7.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/pregnancy/pregnancy8.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/pregnancy/pregnancy9.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/pregnancy/pregnancy10.jpg"
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
export default Pregnancy