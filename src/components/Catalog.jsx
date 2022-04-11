import React from 'react'
import { Link } from 'react-router-dom'
import "../steyles/catalog.scss"
import catologFoto from "../images/uzuk.png"
import NavCatalog from './NavCatalog'
import CatalogTitle from './CatalogTitle'
// import CatalogInput from './catalogs/CatalogInput.jsx'


function Catalog() {
  return (
    <>  
    <NavCatalog />
    <section className='cotolog_section'> 
        <div className="container">
            <ul className="cotolog_data_list">
                <li className="cotolog_data_item">
                    <h3>Бренд</h3>
                    <i className="fa-solid fa-caret-down"></i>
                </li>

                <li className="cotolog_data_item">
                    <h3>Цена</h3>
                    <i className="fa-solid fa-caret-down"></i>
                </li>

                <li className="cotolog_data_item">
                    <h3>Для кого</h3>
                    <i className="fa-solid fa-caret-down"></i>
                </li>

                <li className="cotolog_data_item">
                    <h3>Коллекция </h3>
                    <i className="fa-solid fa-caret-down"></i>
                </li>

                <li className="cotolog_data_item">
                    <h3>Сезон</h3>
                    <i className="fa-solid fa-caret-down"></i>
                </li>

                <li className="cotolog_data_item">
                    <h3>Событие </h3>
                    <i className="fa-solid fa-caret-down"></i>
                </li>

            </ul>
            <div className="cotolog_box">
                <div className="cotolg_boxs">
                    <img src={catologFoto} alt="foto" />
                    <h2>Подвеска</h2>
                    <h1>Dolce & Gabanna</h1>
                    <Link className='button' to="/Dolce">175 000 ₽</Link>
                </div>

                <div className="cotolg_boxs">
                    <img src={catologFoto} alt="foto" />
                    <h2>Подвеска</h2>
                    <h1>Dolce & Gabanna</h1>
                    <Link className='button' to="/Dolce">175 000 ₽</Link>
                </div>

                <div className="cotolg_boxs">
                    <img src={catologFoto} alt="foto" />
                    <h2>Подвеска</h2>
                    <h1>Dolce & Gabanna</h1>
                    <Link className='button' to="/Dolce">175 000 ₽</Link>
                </div>
                <span className='catalog_border'></span>
                <div className="cotolg_boxs">
                    <img src={catologFoto} alt="foto" />
                    <h2>Подвеска</h2>
                    <h1>Dolce & Gabanna</h1>
                    <Link className='button' to="/Dolce">175 000 ₽</Link>
                </div>

                <div className="cotolg_boxs">
                    <img src={catologFoto} alt="foto" />
                    <h2>Подвеска</h2>
                    <h1>Dolce & Gabanna</h1>
                    <Link className='button' to="/Dolce">175 000 ₽</Link>
                </div>

                <div className="cotolg_boxs">
                    <img src={catologFoto} alt="foto" />
                    <h2>Подвеска</h2>
                    <h1>Dolce & Gabanna</h1>
                    <Link className='button' to="/Dolce">175 000 ₽</Link>
                </div>
            </div>
            
            <div className="cotalog_links">
                <a className='catalog_link' href="#">покажите еще</a>
            </div>

            <CatalogTitle />
        </div>
    </section>
  </>
  )
}

export default Catalog