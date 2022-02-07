import React from "react"
import { Carousel, Container } from "react-bootstrap"

const Krm=()=>{
    return(
      <>
      <Container className="container">
      <Carousel variant="dark">
  <Carousel.Item  style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/kr_m/krm1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block  w-100 img"
      src="img/client/kr_m/krm2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/kr_m/krm3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/kr_m/krm4.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/kr_m/krm5.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/kr_m/krm6.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/kr_m/krm7.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/kr_m/krm8.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/kr_m/krm9.jpg"
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
export default Krm