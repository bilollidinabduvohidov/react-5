import React from 'react'
import "../steyles/catalog.scss"
import { Link } from 'react-router-dom'
import navFoto from '../images/logo.png'



function NavCatalog() {
  return (
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
                    <i className="fa-solid fa-magnifying-glass"></i> Поиск
                </a>
            </li>

            <li className="nav_item">
                <a href="#" className="nav_catalog_link">Вход/Регистрация</a>
            </li>

            <li className="nav_item">
                <a href="#" className="nav_catalog_link">
                    <i className="fa-solid fa-user"></i>
                </a>

                <a href="#" className="nav_catalog_link">
                    <i className="fa-solid fa-heart"></i>
                </a>
            </li>

        </ul>
    </div>
</nav>
  )
}

export default NavCatalog