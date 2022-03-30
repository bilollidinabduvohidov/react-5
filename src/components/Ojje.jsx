import React from 'react'
import "../steyles/ojje.scss"
import ojje1 from "../images/qzzi_qoli.png"
import ojje2 from "../images/kitoblar.png"
import ojje3 from "../images/bowdi-taqmco.png"

function Ojje() {
  return (
  <>
    <section className="ojje">
        <div className="container">
            <div className="ojje_box">
                <h2>Полезные статьи</h2>
                <h1>Лучшие советы по подбору дорогих подарков</h1>
                <div className="ojje_slider">
                    <div className="arm">
                        <img src={ojje1} alt="" />
                        <h1>Как выбрать часы для своей будущей жены</h1>
                    </div>

                    <div className="arm">
                        <img src={ojje3} alt="" />
                        <h1>Запонки для мужа: 7 ключевых правил покупки аксессуара</h1>
                    </div>

                    <div className="arm">
                        <img src={ojje2} alt="" />
                        <h1>Как выбрать обручальные кольца молодоженам</h1>
                    </div>
                </div>
                <button>читать наш блог</button>
            </div>
        </div>
    </section>    
  </>
  )
}

export default Ojje