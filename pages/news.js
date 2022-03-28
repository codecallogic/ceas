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

  useEffect(() => {
    console.log(title)
  }, [title])

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
          {!title && news.length > 0 && news.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1).map((item, idx) => 
            <div 
              key={idx} 
              className="news-section-1-announcement"
              onClick={() => window.location = `/news?title=${item.title}`}
            >
              <div className="news-section-1-announcement-title">{item.title} - {item.date}</div>
              <div className="news-section-1-announcement-content">
                <img 
                  src={`${PUBLIC_FILES}/news/${item.image}`} 
                  alt={item.title}
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
                <div dangerouslySetInnerHTML={{ __html: `${item.news.substring(0, 500)}...`}}>
                </div>
              </div>
            </div>
          )}

          {title && news.length > 0 && news.map((item, idx) => 
            item.title == title 
            ?
            <div 
              key={idx} 
              className="news-section-2-announcement"
            >
              <div className="news-section-2-announcement-title">{item.title} - {item.date}</div>
              <div className="news-section-2-announcement-image">              
                <img 
                  src={`${PUBLIC_FILES}/news/${item.image}`} 
                  alt={item.title}
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
              </div>
              <div className="news-section-2-announcement-paragraph" dangerouslySetInnerHTML={{ __html: `${item.news.substring(0, 500)}...`}}></div>
            </div>
            :
            null
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
