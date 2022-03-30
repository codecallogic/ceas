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
                  // src={`${PUBLIC_FILES}/news/${item.image}`} 
                  src='data:image/jpeg;base64,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'
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
