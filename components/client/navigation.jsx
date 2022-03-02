import SVG from '../../files/svg'
import { DOMAIN } from '../../config'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Search from '../../components/client/search'

const Navigation = ({ 
    navMenus, 
    openSearch,
    setOpenSearch
}) => {
  
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState('')
  const [dropdown, setDropdown] = useState('')

  useEffect(() => {
    setCurrentPage(`${DOMAIN}${router.pathname}`)
  }, [])
  
  
  return (
    <>
    <div className="nav wrapper">
      <a href="/"><img className="nav-logo" src="./logo_nav.png" alt="ceas-logo" /></a>
      <div className="nav-menu">
        {navMenus && navMenus.length > 0 && navMenus.sort((a, b) => +a.order > +b.order ? 1 : -1).map((item, idx) => 
          <div 
            key={idx} 
            onClick={(e) => (window.location.href = `${DOMAIN}/${item.link.split("//")[1].split('/').slice(1).join('/')}`)} 
            className={`nav-menu-item ` + ( currentPage == `${DOMAIN}/${item.link.split("//")[1].split('/').slice(1).join('/')}` ? 'underline' : '')}
          >
            {item.name} 
            {item.items.length > 0 ? <SVG svg={'dropdown'}></SVG> : ''}
            <div 
              key={`${item.name}-${idx}`}  
              className="nav-menu-item-dropdown"
            >
              {item.items.length > 0 && item.items.map( (navItem, index) => 
                <div 
                  key={`${navItem.name}-${index}`}
                  onClick={(e) => (e.stopPropagation(), window.location.href = navItem.link)}
                  className="nav-menu-item-dropdown-item"
                  target="_blank"
                >
                    {navItem.name}
                </div>
              )}
            </div>
          </div>
        )}
        <img 
          onClick={() => setOpenSearch(true)}
          className="nav-menu-search" 
          src="/media/nav/magnifying-glass.png" 
          alt="search" 
        />
      </div>
    </div>
    <div className="nav-mobile wrapper">
      <a href="#">
        <img className="nav-mobile-logo" src="./logo_nav.png" alt="ceas-logo" />
      </a>
      <div className="nav-mobile-menu">
        <input 
          type="checkbox" 
          name="nav-toggle" 
          id="nav-toggle" 
          className="nav-mobile-menu-checkbox"
        />
        <label 
          htmlFor="nav-toggle" 
          className="nav-mobile-menu-burger"
          onClick={() => setDropdown('')}
        >
          <span className="nav-mobile-menu-icon"></span>
        </label>
        <div className="nav-mobile-menu-background"></div>
        <div className="nav-mobile-list">
          <ul className="nav-mobile-list-items">
            {navMenus && navMenus.length > 0 && navMenus.sort((a, b) => +a.order > +b.order ? 1 : -1).map((item, idx) => 
              <li 
                key={idx}
                className={`nav-mobile-list-items ` + ( currentPage == `${DOMAIN}/${item.link.split("//")[1].split('/').slice(1).join('/')}` ? 'underline-mobile' : '')}
              >
                <div className="nav-mobile-list-items-container">
                  <a 
                    href={`${DOMAIN}/${item.link.split("//")[1].split('/').slice(1).join('/')}`} 
                    className="nav-mobile-list-items-link"
                  >
                    {item.name}
                  </a>  
                  <span 
                    className="nav-mobile-list-items-svg"
                    onClick={() => dropdown == '' ? setDropdown(item.name) : setDropdown('')}
                  >
                      { item.items.length > 0 ? <SVG svg={'dropdown'}></SVG> : ''}
                    </span>
                </div>
                { dropdown == item.name && 
                  <div 
                    key={`${item.name}-${idx}`}  
                    className="nav-mobile-list-items-dropdown"
                  >
                    {item.items.length > 0 && item.items.map( (navItem, index) => 
                      <div 
                        key={`${navItem.name}-${index}`}
                        onClick={(e) => (e.stopPropagation(), window.location.href = navItem.link)}
                        className="nav-mobile-list-items-dropdown-item"
                        target="_blank"
                      >
                          {navItem.name}
                      </div>
                    )}
                  </div>
                }
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
    {openSearch && <Search setOpenSearch={setOpenSearch}></Search>}
    <img 
      src="/media/home/icon-arrow-top.png" alt="" className="home-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
    />
    </>
  )
}

export default Navigation
