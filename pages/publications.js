import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import Toolbar from '../components/client/toolbar'
import { validatePublicationTypes } from '../helpers/validations'

const Publications = ({
  navMenus,
  openSearch,
  publications,

  //// METHODS
  setOpenSearch
}) => {
  // console.log(publications)
  return (
   <>
   {/* <Toolbar></Toolbar> */}
   <Navigation 
      navMenus={navMenus} 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
    ></Navigation>
    <div className="publication">
      <div className="publication-section-1 wrapper">
        <div className="publication-section-1-title">Publications</div>
        <p className="publication-section-1-description">
          The Center for Advancement toward Sustainable Urban Systems (CATSUS) is committed to disseminating its findings with the scientific community, academia, students and federal, state and local agencies, through various venues, including peer-reviewed journal publications, conference papers and presentations, books and technical reports. A comprehensive list of publications authored and co-authored by CATSUS faculty and students presenting results and findings of research developed at CATSUS are presented available in this page
        </p>
      </div>
      <div className="publication-section-2 wrapper">
        {validatePublicationTypes(publications, 'book') ? <div className="publication-section-2-title">Books</div> : '' }
        <div className="publication-section-2-publications">
          { publications.length > 0 && publications.map((item, idx) => 
            item.type.toLowerCase() == 'book' ?
            <div
              key={idx} 
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
            : 
            null
          )}
        </div>

        {validatePublicationTypes(publications, 'book chapter') ? <div className="publication-section-2-title">Book Chapters</div> : '' }
        <div className="publication-section-2-publications">
          { publications.length > 0 && publications.map((item, idx) => 
            item.type.toLowerCase() == 'book chapter' ?
            <div
              key={idx} 
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
            : 
            null
          )}
        </div>

        {validatePublicationTypes(publications, 'conference paper and presentation') ? <div className="publication-section-2-title">Conference Papers and Presentations</div> : '' }
        <div className="publication-section-2-publications">
          { publications.length > 0 && publications.map((item, idx) => 
            item.type.toLowerCase() == 'conference paper and presentation' ?
            <div
              key={idx} 
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
            : 
            null
          )}
        </div>

        {validatePublicationTypes(publications, 'journal and juried conference paper') ? <div className="publication-section-2-title">Journal and Juried Conference Paper</div> : '' }
        <div className="publication-section-2-publications">
          { publications.length > 0 && publications.map((item, idx) => 
            item.type.toLowerCase() == 'journal and juried conference paper' ?
            <div
              key={idx} 
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
            : 
            null
          )}
        </div>

        {validatePublicationTypes(publications, 'theses and dissertations') ? <div className="publication-section-2-title">Theses and Dissertations</div> : '' }
        <div className="publication-section-2-publications">
          { publications.length > 0 && publications.map((item, idx) => 
            item.type.toLowerCase() == 'theses and dissertations' ?
            <div
              key={idx} 
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
            : 
            null
          )}
        </div>

        {validatePublicationTypes(publications, 'other publications') ? <div className="publication-section-2-title">Other Publications</div> : '' }
        <div className="publication-section-2-publications">
          { publications.length > 0 && publications.map((item, idx) => 
            item.type.toLowerCase() == 'other publications' ?
            <div
              key={idx} 
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
            : 
            null
          )}
        </div>
        
      </div>
    </div>
    <Footer></Footer>
   </>
  )
}

export default Publications
