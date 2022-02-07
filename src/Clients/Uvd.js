import React from "react"
import { Carousel, Container } from "react-bootstrap"

const Uvd=()=>{
    return(
      <>
      <Container className="container">
      <Carousel variant="dark">
  <Carousel.Item  style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/ulya_vadim_darik/uvd1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block  w-100 img"
      src="img/client/ulya_vadim_darik/uvd2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/ulya_vadim_darik/uvd3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/ulya_vadim_darik/uvd4.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/ulya_vadim_darik/uvd5.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/ulya_vadim_darik/uvd6.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/ulya_vadim_darik/uvd7.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/ulya_vadim_darik/uvd8.jpg"
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
export default Uvd