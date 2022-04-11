import React from 'react'
import "../steyles/regstion.scss"
import { Link } from 'react-router-dom'
import NavCatalog from './NavCatalog'

function Registion() {
  return (
  <>
        
    <section className="registion">
      <NavCatalog />
        <div className="container">
            <div className="Registration_links">
                <Link to="/" className="registion_item">
                    <h3>Главная /</h3>
                </Link>

                <Link to="/Catlog" className="registion_item">
                    <h3>Каталог /</h3>
                </Link>

                <Link to="/Dolce" className="registion_item">
                    <h3>Категория /</h3>  
                </Link>

                <Link to="/Location" className="registion_item">
                    <h3>место нахождения /</h3>
                </Link>  

                <Link to="/Registion" className="registion_item">
                    <h3>регистрация /</h3>
                </Link> 
            </div>

            <div className="registion_box">
                <h1>Registration</h1>
                <input type="search" placeholder='Name'/>
                <input type="email"placeholder='Emaill'/>
                <input type="number" placeholder='number'/>
                <button className='registion_btn' type="submit">Submit</button>
            </div>
        </div>
    </section>
  </>
  )
}

export default Registion