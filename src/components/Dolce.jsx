import React from 'react'
import { Link } from 'react-router-dom'
import NavCatalog from './NavCatalog'
import main4_img from "../images/main_img.png"
import "../steyles/Dolce.scss"
import CatalogTitle from './CatalogTitle'

function Dolce() {
  return (
  <>
    <NavCatalog />
    <div className='container'>
      <ul className="main4_ul">

          <Link to="/" className="main4_li">
            <h3 className="main4_text">Главная /</h3>
          </Link>

          <Link to="/Catlog" className="main4_li">
            <h3 className="main4_text">Каталог /</h3>
          </Link>
 

          <Link to="/Dolce" className="main4_li">
            <h3 className="main4_text">Категория /</h3>  
          </Link>

          <Link to="/Location" className="main4_li">
            <h3 className="main4_text li">место нахождения</h3>
          </Link>  
      </ul>

      <main className='main_4'>
          <img className='main4_img' src={main4_img} />  
          <div className="main4_box_">
              <h1 className='main4_textt'>Подвеска Dolce & Gabbara</h1>
              <p className='main4_text_litle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa.Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus.  Et nulla sit convallis orci est, fames sit luctus lacus. </p>
              <h3 className='main4_text__'>200 000 ₽ </h3>

              <div className="box_main4">
                  <a href="#" className="main4_link">купить</a>  
                  <a href="#" className="main4_link_">добавить в корзину</a>  
              </div>
          </div>
      </main>

     
    </div>
    <CatalogTitle />
  </>
  )
}

export default Dolce