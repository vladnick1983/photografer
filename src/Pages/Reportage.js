import React from "react";

const Reportage = () => {
  return (
    <div className="container">
      <div className="border"></div>
      <div className="cintainer">
        <div className="row">
        <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/party2vv" className="text-decoration-none text-reset"><img src="img/party/vv/vv.jpg" alt="Foto"  className="noCopy d-block w-100 "/> 
            <p className="App text">PART II : второй день свадьбы Вовы и Вики</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/bparty" className="text-decoration-none text-reset"><img src="img/party/bparty/bparty.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">BACHELORETTE PARTY</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/code" className="text-decoration-none text-reset"><img src="img/party/code/code.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">К О Д</p></a>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5">
          <a href="/girl" className="text-decoration-none text-reset"><img src="img/party/girl/girl.jpg" alt="Foto"  className="noCopy d-block w-100"/> 
            <p className="App text">GIRLS PARTY</p></a>
          </div>      
        </div>
      </div>
    </div>
  );
};
export default Reportage;
