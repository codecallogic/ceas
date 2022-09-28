
const Footer = ({}) => {
  
  return (
    <div className="footer">
      <div className="footer-cover" style={{backgroundImage: `url('/media/home/footer.png')`}}></div>
      <div className="footer-contents wrapper">
        <div className="footer-title">Contact</div>
        <div className="footer-columns">
          <img src="/media/home/logo-ceas-v2.png" alt="Logo CEAS" className="footer-columns-logo"/>
          <div className="footer-columns-column">
            <strong>Location</strong>
            <span>E&T C253A</span>
            <span>California State University Los Angeles</span>
            <span>Los Angeles, CA 90032</span>
            <strong>Phone</strong>
            <span>(323) 343-5399</span>
            <strong>Email</strong>
            <span>ceas@calstatela.edu</span>
            <strong>Social</strong>
            <div className="footer-columns-column-icons">
              {/* <img src="/media/home/icon-twitter.png" alt="Twitter"/> */}
              <img src="/media/home/icon-facebook.png" alt="Facebook" onClick={ () => window.location = 'https://www.facebook.com/CSULACEAS'}/>
            </div>
          </div>
          <div className="footer-columns-column">
            <strong>Menu</strong>
            <a href="/" >Home</a>
            <a href="/research" >Research</a>
            <a href="/resources" >Resources</a>
            <a href="/about" >About</a>
            {/* <a href="/apply" >Apply</a> */}
            <a href="/news" >Annoucements</a>
          </div>
          <div className="footer-columns-column">
            <span>&#169; Copyright 2022. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
