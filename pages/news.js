import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import Toolbar from '../components/client/toolbar'
import SVG from '../files/svg'

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
      {/* <Toolbar></Toolbar> */}
      <Navigation 
        navMenus={navMenus} 
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      ></Navigation>
      <div className="news">
        <div className="news-section-1 wrapper">
          {title ? 
            <div 
              className="news-section-1-breadcrumb"
              onClick={() => window.location.href = '/news'}
            >
              <SVG svg={'arrow-left'}></SVG>
              <span>Back to all</span>
            </div>
            :
            null
          }
          {!title && news.length > 0 && news.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1).slice(0, 5).map((item, idx) => 
            <div 
              key={idx} 
              className="news-section-1-announcement"
              onClick={() => window.location = `/news?title=${item.title}`}
            >
              <div className="news-section-1-announcement-title">{item.title} - <span>{item.date}</span></div>
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
              <div className="news-section-2-announcement-title">{item.title} - <span>{item.date}</span></div>
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

        <div className="news-section-3 wrapper">
          <div className="news-section-3-title">All News</div>
          { news.length > 0 && news.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1).slice(0, 50).map((item, idx) => 
            <div 
              onClick={() => window.location = `/news?title=${item.title}`}
              className="news-section-3-index"
            >
              {item.title} - <span>{item.date}</span>
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
