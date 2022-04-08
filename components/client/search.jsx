import { useState, useEffect } from 'react'
import SVG from '../../files/svg'

const Search = ({ setOpenSearch }) => {

  const [search, setSearch] = useState('')
  
  const searchGoogle = (e) => {
    window.open(`https://www.google.com/search?q=${search}&as_sitesearch=https://ceas.calstatela.edu/`, '_blank')
  }
  
  return (
    <div className="search">
      <div className="search-close" onClick={() => setOpenSearch(false)}>
        <SVG svg={'close'}></SVG>
      </div>
      <div className="search-bar">
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div 
          onClick={(e) => searchGoogle()}
          className="search-bar-svg">
          <SVG svg={'search'}></SVG>
        </div>
      </div>
    </div>
  )
}

export default Search
