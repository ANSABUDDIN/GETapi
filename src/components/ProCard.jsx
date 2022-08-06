import React from 'react'

export const ProCard = (prop) => {
  return (
    <div className='text-center' >
      <div className="card " style={{ width: "18rem" }} >
        <img src={prop.src} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title"> {prop.cate}</h5>
          <h5 className="card-title"> {prop.title}</h5>
          <p className="card-text"> {prop.desc}</p>
          <p className="card-text">Product ID {prop.id}</p>
          <a href="#" className="btn btn-primary">ADD TO CART</a>
        </div>
      </div>
    </div>
  )
}
