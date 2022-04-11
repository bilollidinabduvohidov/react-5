import React from 'react'
import location1 from "../images/location1.png"
import { Link } from 'react-router-dom'
import "../steyles/locatioin.scss"
import NavCatalog from './NavCatalog'
function Location() {
  return (
  <>
  <NavCatalog />
    <section className='location'>
    <div className='container'>
        <div className="map_2">
            <div className="map2_box">
               <Link className="map2_text map2_" to="/">
                  <h3>/ Главная</h3>  
               </Link>

               <Link className="map2_text" to="/Registion">
                  <h3>/ Контакты</h3>      
               </Link>
            </div>    
            
            <h1 className="map2_text1">Контакты</h1>

            <ul className="map_ul">
                <li className="map_li">
                    <h3 className="map2_li_text">Главный офис</h3>    
                    <p className="map_li_text1"> 
                    <i className="fa-solid fa-location-dot photo_map"></i> 
                    Невский 140, офис 1-5</p>
                    <p className="map_li_text11">Невский 140, офис 1-5</p>
                </li>    

                <li className="map_li">
                    <h3 className="map2_li_text">Телефоны</h3>    
                    <p className="map_li_text1"> 
                    <i className="fa-solid fa-phone photo_map"></i> 8 (812) 458-56-45</p>
                    <p className="map_li_text11">8-911-878-00-00</p>
                </li>  

                <li className="map_li">
                    <h3 className="map2_li_text">E-mail</h3>    
                    <p className="map_li_text1"> 
                    <i className="fa-solid fa-message photo_map"></i> office@ojjo.com</p>
                    <p className="map_li_text11">sales@ojjo.com</p>
                </li>  

                <li className="map_li">
                    <h3 className="map2_li_text">Доп. адреса</h3>    
                    <p className="map_li_text1"> 
                    <i className="fa-solid fa-location-dot photo_map"></i> Невский 142, офис 1-5</p>
                    <p className="map_li_text11">Загородный 145, офис 11-15</p>
                </li>  
            </ul>
        </div>    

        <div className="photo_map__">
            <img src={location1} />  
        </div>
    </div>
    </section>
  </>
  )
}

export default Location