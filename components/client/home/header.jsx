import { useState, useEffect } from 'react'
import { PUBLIC_FILES } from '../../../config'

const Header = ({ slides }) => {

  const [slide, setSlide] = useState('')
  const [title, setTitle] = useState('')
  const [caption, setCaption] = useState('')
  const [counter, setCounter] = useState(0)
  const [slideDirection, setSlideDirection] = useState('right')

  function preloadImages(images) {
    return new Promise((resolve, reject) => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = `${PUBLIC_FILES}/slides/${src}`;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
  
      Promise.all(promises)
        .then(() => resolve())
        .catch((error) => reject(error));
    });
  }
  
  useEffect(() => {

    // Call this function before setting your slide images
    preloadImages(slides.map((slide) => slide.image))
    .then(() => {
      // Set the initial state and start the timer here
    })
    .catch((error) => {
      console.error('Image preload error:', error);
    });
    

    if(slides.length > 0){
      setSlide(slides[counter].image)
      setTitle(slides[counter].title)
      setCaption(slides[counter].caption)
      // if(slides[0].component[0].name.toLowerCase() == 'homepage header carousel'){
      //   setSlide(slides[counter].image)
      //   setTitle(slides[counter].title)
      //   setCaption(slides[counter].caption)
      // }
    }    

    let delay = 5000
    let timer = setInterval(() => {
      
      if(slides.length > 0 && slideDirection == 'right'){

        if(slides[counter + 1]){
          setCounter(counter + 1)
          setSlide(slides[counter + 1].image)
          setTitle(slides[counter + 1].title)
          setCaption(slides[counter + 1].caption)
          counter + 1 == slides.length - 1 ? setSlideDirection('left') : null

        }
      }

      if(slides.length > 0 && slideDirection == 'left'){
        setCounter(counter - 1)
        setSlide(slides[counter - 1].image)
        setTitle(slides[counter - 1].title)
        setCaption(slides[counter - 1].caption)
        counter - 1 == 0 ? setSlideDirection('right') : null
      }
      
    }, delay)

    return () => {
      clearInterval(timer)
    }
    
  }, [slides, counter, slideDirection])
  
  return (
    <div loading="lazy" className="header" style={{ backgroundImage: `url('${PUBLIC_FILES}/slides/${slide}')`}}>
      <div className="header-cover" style={{backgroundImage: `url('./media/home/header/home-header.png')`}}></div>
      <h1 className="header-title">{title ? title : 'No title'}</h1>
      <div className="header-subtitle">{caption ? caption : 'No caption'}</div>
      
      <div className="header-dots">
        {slides.length > 0 && slides.slice(0, 5).map((item, idx) => 
          item.component[0] && item.component[0].name == 'homepage header carousel' && 
          <div 
            key={idx} 
            className={`header-dots-button ` + (slide == item.image ? 'header-dots-button-selected' : '')} 
            onClick={(e) => (setSlide(item.image), setTitle(item.title), setCaption(item.caption))}>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Header