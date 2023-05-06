import React from "react"
import { featured } from "../Data"

const FeaturedCard = () => {
  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div className="container">
        <div className='content grid5 mtop'>
          {featured.map((items, index) => (
            <div className='box' key={index} onClick={() => handleClick(items.url)}>
              <img src={items.cover} alt='' />
              <h4>{items.name}</h4>
              <label>{items.total}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FeaturedCard
