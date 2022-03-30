import React from 'react'
import "../../steyles/footer.scss"
import FoterPhoto from "../../images/visa.png"
import FoterPhoto2 from "../../images/masterCard.png"


function CatalogFoter() {
  return (
    <>
     <footer className="catalog_footer">
        <div className="container">
          <div className="catalog_footer_box">
            <div className="catalog_foter_title">
              <h1>Полезные ссылки</h1>
              <h3>Доставка</h3>
              <h3>Оплата </h3>
              <h3>Акции</h3>
              <h3>Политика конфиденциальности</h3>
            </div>

            <div className="catalog_foter_title">
              <h1>оплата</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing  culpa non dolore vero saepe ipsum</p>
              <br />
              <span className='footer_box_span'>
                  <img className='foter_photo' src={FoterPhoto} alt="" />
                  <img className='foter_photo' src={FoterPhoto2} alt="" />
              </span>
            </div>


            <div className="catalog_foter_title">
              <h1>контакты</h1>
              <h3> <i class="fa-solid fa-phone"></i> 8 (812) 234-56-55</h3>
              <h3><i class="fa-solid fa-phone"></i> 8 (812) 234-56-55</h3>
              <h3><i class="fa-solid fa-phone"></i> ojjo@ojjo.ru</h3>
            </div>

            <div className="catalog_foter_title">
              <h1>социальные сети</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper</p>
              <br />
              <span className="footer_icones">
               <i class="fa-brands fa-youtube"></i>
               <i class="fa-brands fa-whatsapp-square"></i>
               <i class="fa-brands fa-facebook-f"></i>
               <i class="fa-brands fa-telegram"></i>
               <i class="fa-thin fa-e"></i>
              </span>
            </div>

          </div>  
          <div className="footer">
            <ul className="foter_list">
              <li className="footer_item">
                <p>(c) 2020 OJJO jewelry</p>
              </li>

              <li className="footer_item">
                <p>Договор публичной офферты</p>
              </li>

              <li className="footer_item">
                <p>Контрагентам</p>
              </li>

              <li className="footer_item">
                <p>Сделано Figma.info</p>
              </li>
            </ul>
          </div>
        </div>  
     </footer>   
    </>
  )
}

export default CatalogFoter