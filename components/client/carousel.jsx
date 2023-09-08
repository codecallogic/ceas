import { useState, useEffect } from 'react'
import { PUBLIC_FILES } from "../../config"

const Carousel = ({ news, setNews }) => {

  
  const rotate = (type) => {
    let array = [...news]
    let firstItem = array[0]
    let lastItem = array[array.length - 1]

    if(type == 'right'){
      for(let i = 0; i < array.length; i++){
        array[i] = array[i + 1]
  
        //// REVERSE ORDER
        // for(let j = 0; j < array.length - i - 1 ; j++){
          // const rightHand = array[(array.length - 1) - j]
          // array[(array.length - 1) - j] = array[(array.length - 1) - j - 1]
          // array[(array.length - 1) - j - 1] = rightHand
        // }
      }
  
      array[array.length - 1] = firstItem
    }
    

    if(type == 'left'){
      for(let i = array.length - 1; i >= 0; i--){

        if(!array[i - 1]){
          array[i] = lastItem
        }else{
          array[i] = array[i - 1]
        }

      }
    }
    
    setNews([...array])
  }
  
  return (
    <div className="carousel">
      <img 
        alt="carousel move left"
        src="/media/home/carousel/icon-left-arrow.png" 
        className="carousel-arrow-left"
        onClick={() => rotate('left')}
      />
      <img 
        alt="carousel move right"
        src="/media/home/carousel/icon-right-arrow.png" 
        className="carousel-arrow-right"
        onClick={() => rotate('right')}
      />
      <div className="carousel-items carousel-desktop">
        {news.length > 0 && news.slice(0, 4).map((item, idx) => 
          <div 
            key={idx} 
            className="carousel-items-item"
            onClick={() => window.location.href = `/news?title=${item.title}`}
          >
            <div className="carousel-items-item-image">
              <img 
                src={`${PUBLIC_FILES}/news/${item.image}`}
                alt={item.title}
                onError={(e) => e.target.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'}
              />
            </div>
            <h1 className="carousel-items-item-title">{item.title.substring(0, 50)}</h1>
          </div>
        )}
      </div>
      <div className="carousel-items carousel-mobile">
        {news.length > 0 && news.slice(0, 2).map((item, idx) => 
          <div key={idx} className="carousel-items-item">
            <div className="carousel-items-item-image">
              <img 
                src={`${PUBLIC_FILES}/news/${item.image}`}
                alt={item.title}
                onClick={() => window.location.href = `/news?title=${item.title}`}
                onError={(e) => e.target.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'}
              />
            </div>
            <div className="carousel-items-item-title">{item.title.substring(0, 50)}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Carousel
