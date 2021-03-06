import React, {useState} from 'react'
import '../steyles/navbar.scss'
import navFoto from '../images/logo.png'
import navfoto from '../images/loge2.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isMobil, setIsMobil] = useState(false)
  return (
  <header>

    <nav className='navbar'>
        <div className="container">
            <img className='nav-block' src={navFoto} alt="" />
            <ul className={isMobil ? "nav-list-mobile" : "nav_list"}
            onClick={() => setIsMobil(false)}
            >
                <li className="nav_item">
                    <a href="#" className="nav_link">Контрагентам</a>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_link">Дизайнерам</a>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_link">Вакансии</a>
                </li>

                <li className="nav_item liNone">
                    <Link to="/">
                       <img src={navFoto} alt="foto" className="nav_img" />
                    </Link>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_link">
                        <i className="fa-solid fa-magnifying-glass"></i> Поиск
                    </a>
                </li>

                <li className="nav_item">
                    <Link to="/Registion" className="nav_link">
                        Вход/Регистрация
                    </Link>
                </li>

                <li className="nav_item">
                    <a href="#" className="nav_link">
                        <i className="fa-solid fa-user"></i>
                    </a>

                    <a href="#" className="nav_link">
                        <i className="fa-solid fa-heart"></i>
                    </a>
                </li>

            </ul>

            <button className='mobile-menu-icon'
            onClick={() => setIsMobil(!isMobil)}
            >
            {isMobil ?<i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            
            </button>

        </div>
        
    </nav>
    <main className='header_main'>
        <div className="container">
             <div className="main_box">
                 <h1>Долго, дорого, богато!</h1>
                 <Link to="/Catlog">
                   <button>каталог изделий </button>
                 </Link>
             </div>
        </div>
    </main>
    <nav className="nav_images">
      <div className="container">
        <ul className="nav_images_list">
            <li className="nav_images_item foto2">
                <img src={navfoto} alt="" className="nav_images_photo" />
            </li>

            <li className="nav_images_item">
                <img src={navfoto} alt="" className="nav_images_photo" />
            </li>

            <li className="nav_images_item">
                <img src={navfoto} alt="" className="nav_images_photo" />
            </li>

            <li className="nav_images_item">
                <img src={navfoto} alt="" className="nav_images_photo" />
            </li>

            <li className="nav_images_item">
                <img src={navfoto} alt="" className="nav_images_photo" />
            </li>

            <li className="nav_images_item">
                <img src={navfoto} alt="" className="nav_images_photo" />
            </li>
        </ul>
      </div>
    </nav>
    {/* <section></section> */}
  </header>
  )
}

export default Navbar