import React from 'react'
import "../steyles/collectionOne.scss"
import CollectionPhoto from "../images/collection.png"
import CollectionPhoto1 from "../images/collection1.png"
import CollectionPhoto2 from "../images/collection2.png"
import CollectionPhoto3 from "../images/collection3.png"
import CollectionPhoto4 from "../images/collection4.png"
import CollectionPhoto5 from "../images/collection5.png"
import Black from './Black'
import Ojje from './Ojje'
import Jewerly from './Jewerly'


function CollectionOne() {
  return (
  <>
    <section className='collection_galereya'>
      <div className="container">
        <div className="collection_galerey">
          <div className="collection_photos">
            <img src={CollectionPhoto} alt="" />
            <h1>Кольца</h1>
          </div>

          <div className="collection_photos">
            <img src={CollectionPhoto1} alt="" />
            <h1>серьги</h1>
          </div>

          <div className="collection_photos">
            <img src={CollectionPhoto2} alt="" />
            <h1>подвески</h1>
          </div>

          <div className="collection_photos">
            <img src={CollectionPhoto3} alt="" />
            <h1>запонки</h1>
          </div>

          <div className="collection_photos">
            <img src={CollectionPhoto4} alt="" />
            <h1>браслеты</h1>
          </div>

          <div className="collection_photos">
            <img src={CollectionPhoto5} alt="" />
            <h1>часы</h1>
          </div>
        </div>
      </div>
    </section>
    <Black />
    <Ojje />
    <Jewerly />
  </>
  )
}

export default CollectionOne