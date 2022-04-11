import React from 'react'
import "../steyles/catalog.scss"
import catalogIcon from "../images/Group.png"
import catalogIcon2 from "../images/Group (1).png"
import catalogIcon3 from "../images/Group (2).png"
import catalogIcon4 from "../images/jewelry.png"

function CatalogTitle() {
  return (
    <section>
        <div className="container">
        <div className="catalog_title">
                <div className="catalog_lorem">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis vel adipisci quasi consectetur commodi, accusantium sunt eaque praesentium fuga. Reiciendis aspernatur labore natus, nam perferendis repellendus suscipit adipisci inventore, doloribus excepturi dolor fuga vitae hic nulla! Nesciunt ipsam minima iure non adipisci, corrupti porro magnam at pariatur quis quod veniam!</p>
                    <h2>читать полностью</h2>
                </div>
                <div className="catalog_icones">
                    <div className="catalog_icone">
                        <img src={catalogIcon} alt="" />
                        <h4>Бесплатная доставка</h4>
                    </div>

                    <div className="catalog_icone">
                        <img src={catalogIcon2} alt="" />
                        <h4>Индивидуальный дизайн</h4>
                    </div>
                    
                    <div className="catalog_icone">
                        <img src={catalogIcon3} alt="" />
                        <h4>Бесплатная примерка</h4>
                    </div>

                    <div className="catalog_icone">
                        <img src={catalogIcon4} alt="" />
                        <h4>Личный подход</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CatalogTitle