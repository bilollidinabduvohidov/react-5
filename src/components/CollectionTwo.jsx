import React from 'react'
import "../steyles/collectionTwo.scss"
import MurskoyFoto from "../images/download.jpeg"
import MurskoyFot2 from "../images/muruskoy2.jpg"
import MurskoyFot3 from "../images/muruskoy3.jpeg"
import MurskoyFot4 from "../images/muruskoy4.jpeg"
import MurskoyFot5 from "../images/muruskoy5.jpeg"
import MurskoyFot6 from "../images/muruskoy6.jpg"
import Navbar from './Navbar'
import Collections from './Collections'



function CollectionTwo() {
  return (
  <>
  <Navbar />
  <Collections />
     <section className='collection_galereya'>
      <div className="container">
        <div className="collection_muruskoy">
          <div className="collection_muruskoy">
            <img src={MurskoyFoto} alt="" />
            <h1>Кольца</h1>
          </div>

          <div className="collection_muruskoy">
            <img src={MurskoyFot2} alt="" />
            <h1>серьги</h1>
          </div>

          <div className="collection_muruskoy">
            <img src={MurskoyFot3} alt="" />
            <h1>подвески</h1>
          </div>

          <div className="collection_muruskoy">
            <img src={MurskoyFot4} alt="" />
            <h1>запонки</h1>
          </div>

          <div className="collection_muruskoy">
            <img src={MurskoyFot5} alt="" />
            <h1>браслеты</h1>
          </div>

          <div className="collection_muruskoy">
            <img src={MurskoyFot6} alt="" />
            <h1>часы</h1>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default CollectionTwo