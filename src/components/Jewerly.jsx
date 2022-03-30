import React from 'react'
import "../steyles/jewrly.scss"
import JewerlyFoto1 from "../images/play.png"
import JewerlyFoto2 from "../images/play1.png"
import JewerlyFoto3 from "../images/play2.png"
import JewerlyFoto4 from "../images/play3.png"
import JewerlyFoto5 from "../images/play4.png"
import JewerlyFoto6 from "../images/play5.png"
import JewerlyFoto7 from "../images/play-icon.png"

function Jewerly() {
  return (
  <>
    <section className="jewerly">
      <div className="container">
        <div className="jewerly_smile_box">
          <h2>#ojjo_jewerly</h2>
          <h1>Мы в социальных сетях</h1>
        </div>
        
        <div className="jewerly_box">
            <img className='width' src={JewerlyFoto1} alt="" />
            <img className='jewerly_foto' src={JewerlyFoto2} alt="" />
            <img src={JewerlyFoto3} alt="" />
            <img src={JewerlyFoto4} alt="" />
            <img src={JewerlyFoto5} alt="" />
            <img className='hight' src={JewerlyFoto6} alt="" />
            <img src={JewerlyFoto7} alt="" className="left" />
            <img src={JewerlyFoto7} alt="" className="right" />
        </div>
      </div>
    </section>
  </>
  )
}

export default Jewerly