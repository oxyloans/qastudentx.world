import React from 'react'
import  './slide.css'

export default function Slidebarcontent() {
  return (
    <div   className='mainboxxx'><div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to={0}
        className="active"
      />
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        {/* <img className="d-block w-100" src="..." alt="First slide" /> */}qwqerw
      </div>
      <div className="carousel-item">
         rrrrrrrrrrrrrrr
      </div>
      {/* <div className='carousel-item2'> */}
      <div className="carousel-item ">
        iiuiuiuiuiui
      {/* </div> */}
      </div>
    </div>

    
  </div>
  </div>
  )
}
