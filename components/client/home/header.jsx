import { useState, useEffect } from 'react'
import { PUBLIC_FILES } from '../../../config'

const Header = ({ slides, }) => {

  const [slide, setSlide] = useState('')
  const [title, setTitle] = useState('')
  const [caption, setCaption] = useState('')

  useEffect(() => {
    if(slides.length > 0){
      if(slides[0].component[0].name.toLowerCase() == 'homepage header carousel'){
        setSlide(slides[0].image)
        setTitle(slides[0].title)
        setCaption(slides[0].caption)
      }
    }    
  }, [slides])
  
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
