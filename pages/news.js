import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import Toolbar from '../components/client/toolbar'

const News = ({
  navMenus,
  openSearch,

  //// METHODS
  setOpenSearch,

  //// DATA
  news,
  title
  
}) => {

  return (
    <>
      <Toolbar></Toolbar>
      <Navigation 
        navMenus={navMenus} 
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      ></Navigation>
      <div className="news">
        <div className="news-section-1 wrapper">
          {news.length > 0 && news.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1).map((item, idx) => 
            <div key={idx} className="news-section-1-announcement">
              <div className="news-section-1-announcement-title">{item.title} - {item.date}</div>
              <div className="news-section-1-announcement-content">
                <img 
                  src={`${PUBLIC_FILES}/news/${item.image}`} 
                  alt={item.title}
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
                <div dangerouslySetInnerHTML={{ __html: `${item.news.substring(0, 500)}...`}}></div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

News.getInitialProps = ({query}) => {
  
  let title = null

  if(query.title) title = query.title

  return {
    title: title ? title : null
  }
}

export default News
