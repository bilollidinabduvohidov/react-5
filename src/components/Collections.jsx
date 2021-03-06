import React from 'react'
import "../steyles/collections.scss"
import { Link } from 'react-router-dom'

function Collections() {
    
  return (
  <>
    <section className="collection">
        <div className="container">
            <div className="box_border">
                <h3>К мероприятиям</h3>
                <h1>Настоящая красота здесь!</h1>
            </div>

                <ul className="collection_list">
                    <li className="collection_item svadba">
                        <Link to="/">
                            <p className='svadbaa'>Свадьба</p>
                        </Link>
                    </li>

                    <li className="collection_item">
                        <Link to="/mujskoy">
                            <p>МУЖУ</p>
                        </Link>
                        
                    </li>

                    <li className="collection_item">
                        <a href="#">жене</a>
                    </li>

                    <li className="collection_item">
                        <a href="#">партнеру</a>
                    </li>

                    <li className="collection_item">
                        <a href="#">коллекции</a>
                    </li>
                    
                    <li className="collection_item">
                        <Link to="/">
                            <a>редкость</a>
                        </Link>
                    </li>
                </ul>
        </div>
    </section>
  </>
  )
}

export default Collections