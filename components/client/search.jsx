import SVG from '../../files/svg'

const Search = ({ setOpenSearch }) => {
  
  return (
    <div className="search">
      <div className="search-close" onClick={() => setOpenSearch(false)}>
        <SVG svg={'close'}></SVG>
      </div>
      <div className="search-bar">
        <input type="text" />
        <div className="search-bar-svg"><SVG svg={'search'}></SVG></div>
      </div>
    </div>
  )
}

export default Search
