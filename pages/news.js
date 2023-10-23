import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import Toolbar from '../components/client/toolbar'
import SVG from '../files/svg'
import { useRouter } from 'next/router'

const News = ({
  navMenus,
  openSearch,

  //// METHODS
  setOpenSearch,

  //// DATA
  news
  
}) => {

  const [title, setTitle] = useState('')
  const router = useRouter();

  useEffect(() => {
    console.log(news)
    if(router.query){
      console.log(router.query.title)
      if(router.query.title) setTitle(router.query.title.trim())
    }
  }, [])
  
  return (
    <>
      {/* <Toolbar></Toolbar> */}
      <Navigation 
        navMenus={navMenus} 
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      ></Navigation>
      <div className="news wrapper">
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
              <h1 className="news-section-1-announcement-title">{item.title} - <span>{item.date}</span></h1>
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
            item.title.trim() == title 
            ?
            <div 
              key={idx} 
              className="news-section-2-announcement"
            >
              <h1 className="news-section-2-announcement-title">{item.title} - <span>{item.date}</span></h1>
              <div className="news-section-2-announcement-image">              
                <img 
                  src={`${PUBLIC_FILES}/news/${item.image}`} 
                  alt={item.title}
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
              </div>
              <div className="news-section-2-announcement-paragraph" dangerouslySetInnerHTML={{ __html: `${item.news}`}}></div>
            </div>
            :
            null
          )}
        </div>

        <div className="news-section-3 wrapper">
          <h1 className="news-section-3-title">All News</h1>
          { news.length > 0 && news.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1).slice(0, 50).map((item, idx) => 
            <div 
              key={idx}
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

export default News
