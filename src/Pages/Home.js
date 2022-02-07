import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1 className="mb-5 selection App mt-5">Добро пожаловать на наш сайт!</h1>
      <h5 className="App">Здесь размещено наше свадебное портфолио.</h5>
      <p className="App">
        Так же вы можете просмотреть наши работы семейных съемок и репортажа на
        специальных вкладках меню сайта.
      </p>
      <div className="border"></div>
      <div className="cintainer">
        <div className="row">

          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/di" className="text-decoration-none text-reset"><img src="img/home/dima_ira/di.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">ДИМА + ИРА</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/zhi" className="text-decoration-none text-reset"><img src="img/home/zhenya_ira/zhi.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">ЖЕНЯ + ИРА</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/ta" className="text-decoration-none text-reset"><img src="img/home/timofey_aleksandra/ta.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">ТИМОФЕЙ + АЛЕКСАНДРА</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/ok" className="text-decoration-none text-reset"><img src="img/home/ostr_kozyrek/ok.jpg" alt="Foto"  className="noCopy d-block w-100 "/> 
            <p className="App text">ОСТРЫЕ КОЗЫРЬКИ</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/ru" className="text-decoration-none text-reset"><img src="img/home/roma_ulya/ru.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">РОМА + ЮЛЯ</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/ss" className="text-decoration-none text-reset"><img src="img/home/serg_sonya/ss.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">СЕРЕЖА + СОНЯ</p></a>
          </div>
          

        </div>
      </div>
    </div>
  );
};
export default Home;
