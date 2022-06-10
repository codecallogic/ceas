import { useState, useEffect } from 'react'
import { PUBLIC_FILES } from '../../../config'

const Header = ({ slides, }) => {

  const [slide, setSlide] = useState('')
  const [title, setTitle] = useState('')
  const [caption, setCaption] = useState('')
  const [counter, setCounter] = useState(0)
  const [slideDirection, setSlideDirection] = useState('right')

  useEffect(() => {
    if(slides.length > 0){
      if(slides[0].component[0].name.toLowerCase() == 'homepage header carousel'){
        setSlide(slides[counter].image)
        setTitle(slides[counter].title)
        setCaption(slides[counter].caption)
      }
    }    

    let delay = 5000
    let timer = setInterval(() => {
      
      if(slideDirection == 'right'){
        // console.log(counter + 1)
        setCounter(counter + 1)
        setSlide(slides[counter + 1].image)
        setTitle(slides[counter + 1].title)
        setCaption(slides[counter + 1].caption)
        counter + 1 == slides.length - 1 ? setSlideDirection('left') : null
      }

      if(slideDirection == 'left'){
        // console.log(counter - 1)
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
    <div className="header" style={{backgroundImage: `url('${PUBLIC_FILES}/slides/${slide}'), url('https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png')`}}>
      <div className="header-cover" style={{backgroundImage: `url('./media/home/header/home-header.png')`}}></div>

      <did className="header-title">{title ? title : 'No title'}</did>
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
