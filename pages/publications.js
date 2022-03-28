import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import Toolbar from '../components/client/toolbar'

const Publications = ({
  navMenus,
  openSearch,
  publications,

  //// METHODS
  setOpenSearch
}) => {
  console.log(publications)
  return (
   <>
   <Toolbar></Toolbar>
   <Navigation 
      navMenus={navMenus} 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
    ></Navigation>
    <div className="publication">
      <div className="publication-section-1 wrapper">
        <div className="publication-section-1-title">Publications</div>
        <p className="publication-section-1-description">
          The Center for Energy and Sustainability is committed to dissiminating its findings with the scientific community, adademia, students and federal, state and local agencies, through various venues, including peer-reviewed journal publications, conference papers and presentations, books and technical reports. A comprehensive list of publications authored and co-authored by CEaS faculty and students presenting results and findings of research developed at CEaS are presented available in this page.
        </p>
      </div>
      <div className="publication-section-2 wrapper">
        <div className="publication-section-2-title">Journal or Juried Conference Papers</div>
        <div className="publication-section-2-publications">
          { publications.length > 0 && publications.map((item, idx) => 
          <div 
            className="publication-section-2-publications-item"
            onClick={(e) => window.open(`${PUBLIC_FILES}/publication/${item.file}`, '_blank')}
          >
            {item.authors.length > 0 && item.authors.map( (i) => 
            <span>{i ? `${i},` : ''} </span>
            )}

            <span>{item.date ? `(${item.date.split('/')[2]}).` : ''} </span>
            <span>{item.title ? `"${item.title}"` : ''} </span>
            <span>{item.type ? `${item.type}` : ''} </span>
            
          </div>
          )}
        </div>
      </div>
    </div>
    <Footer></Footer>
   </>
  )
}

export default Publications
