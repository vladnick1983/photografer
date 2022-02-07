import React from "react";

const Stories = () => {
  return (
    <div className="container">
      <h1 className="mb-5 selection App mt-5">Семейные и лав стори</h1>
      
      <p className="App">
        Так же вы можете просмотреть наши работы свадебных съемок и репортажа на
        специальных вкладках меню сайта.
      </p>
      <div className="border"></div>
      <div className="cintainer">
        <div className="row">

          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/house" className="text-decoration-none text-reset"><img src="img/stories/house/house.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">Дом милый дом</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/newyear" className="text-decoration-none text-reset"><img src="img/stories/newyear/newyear.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">Новый год дома с маленькой Сашулей</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/present" className="text-decoration-none text-reset"><img src="img/stories/present/present.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">Наш лучший подарочек это — ты</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/soul" className="text-decoration-none text-reset"><img src="img/stories/soul/soul.jpg" alt="Foto"  className="noCopy d-block w-100 "/> 
            <p className="App text">Наша душа, наше маленькое счастье...</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/carpathians" className="text-decoration-none text-reset"><img src="img/stories/carpathians/carpathians.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">Рассвет в карпатах</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/carpathian" className="text-decoration-none text-reset"><img src="img/stories/carpathian/carpathian.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">Карпаты на троих...</p></a>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Stories;
