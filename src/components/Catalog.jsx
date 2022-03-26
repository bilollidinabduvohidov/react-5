import React from 'react'
import { Link } from 'react-router-dom'
import "../steyles/catalog.scss"
import navFoto from '../images/logo.png'
import catologFoto from "../images/uzuk.png"
import catalogIcon from "../images/Group.png"
import catalogIcon2 from "../images/Group (1).png"
import catalogIcon3 from "../images/Group (2).png"
import catalogIcon4 from "../images/jewelry.png"
import CatalogInput from './catalogs/CatalogInput.jsx'


function Catalog() {
  return (
    <>  
      <nav className='navbar_catalog'>
        <div className="container">
            <ul className="nav_catalog_list">
                <li className="nav_item">
                    <a href="#" className="nav_catalog_link">Контрагентам</a>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_catalog_link">Дизайнерам</a>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_catalog_link">Вакансии</a>
                </li>

                <li className="nav_item">
                    <Link to="/">
                    <img src={navFoto} alt="foto" className="nav_catalog_img" />
                    </Link>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_catalog_link">
                        <i class="fa-solid fa-magnifying-glass"></i> Поиск
                    </a>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_catalog_link">Вход/Регистрация</a>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_catalog_link">
                        <i class="fa-solid fa-user"></i>
                    </a>

                    <a href="#" className="nav_catalog_link">
                        <i class="fa-solid fa-heart"></i>
                    </a>
                </li>

            </ul>
        </div>
    </nav>

    <section className='cotolog_section'> 
        <div className="container">
            <ul className="cotolog_data_list">
                <li className="cotolog_data_item">
                    <h3>Бренд</h3>
                    <i class="fa-solid fa-caret-down"></i>
                </li>

                <li className="cotolog_data_item">
                    <h3>Цена</h3>
                    <i class="fa-solid fa-caret-down"></i>
                </li>

                <li className="cotolog_data_item">
                    <h3>Для кого</h3>
                    <i class="fa-solid fa-caret-down"></i>
                </li>

                <li className="cotolog_data_item">
                    <h3>Коллекция </h3>
                    <i class="fa-solid fa-caret-down"></i>
                </li>

                <li className="cotolog_data_item">
                    <h3>Сезон</h3>
                    <i class="fa-solid fa-caret-down"></i>
                </li>

                <li className="cotolog_data_item">
                    <h3>Событие </h3>
                    <i class="fa-solid fa-caret-down"></i>
                </li>

            </ul>
            <div className="cotolog_box">
                <div className="cotolg_boxs">
                    <img src={catologFoto} alt="foto" />
                    <h2>Подвеска</h2>
                    <h1>Dolce & Gabanna</h1>
                    <button>175 000 ₽</button>
                </div>

                <div className="cotolg_boxs">
                    <img src={catologFoto} alt="foto" />
                    <h2>Подвеска</h2>
                    <h1>Dolce & Gabanna</h1>
                    <button>175 000 ₽</button>
                </div>

                <div className="cotolg_boxs">
                    <img src={catologFoto} alt="foto" />
                    <h2>Подвеска</h2>
                    <h1>Dolce & Gabanna</h1>
                    <button>175 000 ₽</button>
                </div>
                <span className='catalog_border'></span>
                <div className="cotolg_boxs">
                    <img src={catologFoto} alt="foto" />
                    <h2>Подвеска</h2>
                    <h1>Dolce & Gabanna</h1>
                    <button>175 000 ₽</button>
                </div>

                <div className="cotolg_boxs">
                    <img src={catologFoto} alt="foto" />
                    <h2>Подвеска</h2>
                    <h1>Dolce & Gabanna</h1>
                    <button>175 000 ₽</button>
                </div>

                <div className="cotolg_boxs">
                    <img src={catologFoto} alt="foto" />
                    <h2>Подвеска</h2>
                    <h1>Dolce & Gabanna</h1>
                    <button>175 000 ₽</button>
                </div>
            </div>
            
            <div className="cotalog_links">
                <a className='catalog_link' href="#">покажите еще</a>
            </div>

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
  </>
  )
}

export default Catalog