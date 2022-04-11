import React from 'react'
import "../../steyles/catalogInputs.scss"

function CatalogInput() {
  return (
  <>
    <section className='catalog_inputs'>
        <div className="container">
            <div className="catalog_box">
                <h2>Полезные советы и персональный предложения</h2>
                <h1>Эксклюзивная рассылка</h1>
            </div>
            <div className="catalog_input_box">
                <div className="catalog_input_title">
                    <h1>
                    <i className="fa-brands fa-react"></i> Личный менеджер
                    </h1> 

                    <h1>
                    <i className="fa-brands fa-react"></i> Личный менеджер
                    </h1> 

                    <h1>
                    <i className="fa-brands fa-react"></i> Личный менеджер
                    </h1> 

                </div>
                <div className="catalog_input_border">
                    <div className="catalog_input">
                        <input type="search" placeholder='Ваш e-mail' />
                        <input className='submit' type="submit"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
  )
}

export default CatalogInput