import React from "react"
import { Carousel, Container } from "react-bootstrap"

const Top=()=>{
    return(
      <>
      <Container className="container">
      <Carousel variant="dark">
  <Carousel.Item  style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/top/top9.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block  w-100 img"
      src="img/client/top/top8.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/top/top3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/top/top4.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/top/top5.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/top/top6.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/top/top7.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/top/top2.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{"height":"750px"}}>
    <img
      className="d-block w-100 img"
      src="img/client/top/top1.jpg"
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
export default Top