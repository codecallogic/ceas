import SVG from '../../files/svg'
import { DOMAIN } from '../../config'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Navigation = ({ navMenus }) => {
  
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    setCurrentPage(`${DOMAIN}${router.pathname}`)
  }, [])
  
  
  return (
    <>
    <div className="nav wrapper">
      <a href="#"><img className="nav-logo" src="./logo_nav.png" alt="ceas-logo" /></a>
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
        <img className="nav-menu-search" src="/media/nav/magnifying-glass.png" alt="search" />
      </div>
    </div>
    <div className="nav-mobile wrapper">
      <a href="#"><img className="nav-mobile-logo" src="./logo_nav.png" alt="ceas-logo" /></a>
      <div className="nav-mobile-menu">
        <input type="checkbox" name="nav-toggle" id="nav-toggle" className="nav-mobile-menu-checkbox"/>
        <label htmlFor="nav-toggle" className="nav-mobile-menu-burger"><span className="nav-mobile-menu-icon"></span></label>
        <div className="nav-mobile-menu-background"></div>
        <div className="nav-mobile-list">
          <ul className="nav-mobile-list-items">
            {navMenus && navMenus.length > 0 && navMenus.sort((a, b) => +a.order > +b.order ? 1 : -1).map((item, idx) => 
              <li 
                key={idx}
                onClick={(e) => (window.location.href = `${DOMAIN}/${item.link.split("//")[1].split('/').slice(1).join('/')}`)}
                className={`nav-mobile-list-items ` + ( currentPage == `${DOMAIN}/${item.link.split("//")[1].split('/').slice(1).join('/')}` ? 'underline-mobile' : '')}
              >
                <a href="#" className="nav-mobile-list-items-link">{item.name}</a>  
                {/* {item.items.length > 0 ? <SVG svg={'dropdown'}></SVG> : ''} */}
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
              </li>
            )}
            {/* <li className="nav-mobile-list-items-item"><a className="nav-mobile-list-items-link" href="/">Home</a></li>
            <li className="nav-mobile-list-items-item"><a className="nav-mobile-list-items-link" href="/pricing">Pricing</a></li>
            <li className="nav-mobile-list-items-item"><a className="nav-mobile-list-items-link" href="/about-us">About</a></li>
            <li className="nav-mobile-list-items-item"><a className="nav-mobile-list-items-link" href="/faq">FAQ</a></li>
            <li className="nav-mobile-list-items-item"><a  className="nav-mobile-list-items-link" href="#" onClick={() => null}>Account</a></li> */}
            {/* {loggedIn && loggedIn.username && <li className="nav-mobile-list-items-item"><a  className="nav-mobile-list-items-link" href="#" onClick={() => signOut()}>Logout</a></li>} */}
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navigation
