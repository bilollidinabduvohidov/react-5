import React from 'react'
import '../steyles/navbar.scss'
import navFoto from '../images/logo.png'
import navfoto from '../images/loge2.png'

function Navbar() {
  return (
  <header>

    <nav className='navbar'>
        <div className="container">
            <ul className="nav_list">
                <li className="nav_item">
                    <a href="#" className="nav_link">Контрагентам</a>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_link">Дизайнерам</a>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_link">Вакансии</a>
                </li>

                <li className="nav_item">
                    <img src={navFoto} alt="foto" className="nav_img" />
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_link">
                        <i class="fa-solid fa-magnifying-glass"></i> Поиск
                    </a>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_link">Вход/Регистрация</a>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_link">
                        <i class="fa-solid fa-user"></i>
                    </a>

                    <a href="#" className="nav_link">
                        <i class="fa-solid fa-heart"></i>
                    </a>
                </li>

            </ul>
        </div>
    </nav>
  </header>
  )
}

export default Navbar