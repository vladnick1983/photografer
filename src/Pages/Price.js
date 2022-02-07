import React from "react"
import AdditionalServices from "../Components/AdditionalServices"
import Questions from "../Components/Questions"
const Price=()=>{
    return(
        <div className="container positions">
       <h1 className="mb-5 selection App mt-5">Пакеты услуг</h1>
       <div className="containet">
           <div className="row">
<div className="col-lg-3 col-sm-6">
<div><img src="img/price/pic1.jpg" alt="Foto" width="100%" className="noCopy"></img></div>
    <div className="text-center mt-3 selection  p-2">
    <h6>МИНИМАЛ</h6>
    <p><b>4 часа</b></p>
    <ul>
        <li> Работа 2-х фотографов;</li>
        <li>Авторская обработка всех фото (300 шт.);</li>
        <li>Планирование и консультация;</li>
        <li>Готовые фото будут в течении 1-ого месяца;</li>
        <li>Выдача фото на flash накопителе, брэндовая упаковка.</li>
    </ul>
    <p><b>400$</b></p>
    </div>
</div>
<div className="col-lg-3 col-sm-6">
<div><img src="img/price/pic2.jpg" alt="Foto" width="100%" className="noCopy"></img></div>
<div className="text-center mt-3 selection  p-2">
    <h6>СТАНДАРТ</h6>
    <p><b>8 часа</b></p>
    <ul>
        <li> Работа 2-х фотографов;</li>
        <li>Авторская обработка всех фото (400 шт.);</li>
        <li>Предварительная встреча, консультация, помощь в выборе локаций, заключение договора;</li>
        <li>Готовые фото будут в течении 2-х месяцев;</li>
        <li>20 лучших распечатанных фото;</li>
        <li>Выдача фото на flash накопителе, брэндовая упаковка.</li>
    </ul>
    <p><b>600$</b></p>
    </div>
</div>
<div className="col-lg-3 col-sm-6"> 
<div><img src="img/price/pic4.jpg" alt="Foto" width="100%" className="noCopy"></img></div>
<div className="text-center mt-3 selection  p-2">
    <h6>МАКСИМУМ</h6>
    <p><b>12 часа</b></p>
    <ul>
        <li> Работа 2-х фотографов;</li>
        <li>Авторская обработка всех фото (600 шт.);</li>
        <li>Предварительная встреча, консультация, помощь в выборе локаций, заключение договора;</li>
        <li>Готовые фото будут в течении 2-х месяцев;</li>
        <li>Отдаём первые 30 снимков в день свадьбы;</li>
        <li>30 лучших распечатанных фото;</li>
        <li>Выдача фото на flash накопителе, брэндовая упаковка.</li>
    </ul>
    <p><b>800$</b></p>
    </div>
</div>
<div className="col-lg-3 col-sm-6">
<div><img src="img/price/pic3.jpg" alt="Foto" width="100%" className="noCopy"></img></div>
<div className="text-center mt-3 selection  p-2">
    <h6>ПРЕМИУМ</h6>
    <p><b>12-14 часа</b></p>
    <ul>
        <li> Работа 2-х фотографов;</li>
        <li>Авторская обработка всех фото (800 шт.);</li>
        <li>Предварительная встреча, консультация, помощь в выборе локаций, заключение договора;</li>
        <li>Готовые фото будут в течении 2-х месяцев;</li>
        <li>Отдаём первые 50 снимков в день свадьбы;</li>
        <li>50 лучших распечатанных фото;</li>
        <li>Фотокнига (30х30, 20 разворотов);</li>
        <li>Выдача фото на flash накопителе, брэндовая упаковка.</li>
    </ul>
    <p><b>1100$</b></p>
    </div>
</div>
<div className="border-top  mt-3"></div>
<div className="col-lg-3 col-sm-6 mt-5">
<div><img src="img/price/pic7.jpg" alt="Foto" width="100%" className="noCopy"></img></div>
</div>
<div className="col-lg-3 col-sm-6 mt-5">
<div><img src="img/price/pic8.jpg" alt="Foto" width="100%" className="noCopy"></img></div>
</div>
<div className="col-lg-3 col-sm-6 mt-5">
<div><img src="img/price/pic5.jpg" alt="Foto" width="100%" className="noCopy"></img></div>
</div>
<div className="col-lg-3 col-sm-6 mt-5">
<div><img src="img/price/pic6.jpg" alt="Foto" width="100%" className="noCopy"></img></div>
</div>

           </div>
           <div className="border-top  mt-5"></div>
       </div>
       <Questions/>
<AdditionalServices/>
        </div>
    )
}
export default Price