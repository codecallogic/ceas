
const Footer = ({}) => {
  
  return (
    <div className="footer">
      <div className="footer-cover" style={{backgroundImage: `url('/media/home/footer.png')`}}></div>
      <div className="footer-contents wrapper">
        <div className="footer-title">Contact</div>
        <div className="footer-columns">
          <img src="/media/home/logo-footer.png" className="footer-columns-logo"/>
          <div className="footer-columns-column">
            <strong>Location</strong>
            <span>TET C253</span>
            <span>California State University Los Angeles</span>
            <span>Los Angeles, CA 90032</span>
            <strong>Phone</strong>
            <span>(323) 343-5399</span>
            <strong>Email</strong>
            <span>ceas@calstatela.edu</span>
            <strong>Social</strong>
            <div className="footer-columns-column-icons">
              <img src="/media/home/icon-twitter.png" alt="Twitter"/>
              <img src="/media/home/icon-facebook.png" alt="Facebook" />
            </div>
          </div>
          <div className="footer-columns-column">
            <strong>Menu</strong>
            <a href="/" >Home</a>
            <a href="/research" >Research</a>
            <a href="/resources" >Resources</a>
            <a href="/about" >About</a>
            <a href="/apply" >Apply</a>
            <a href="/announcements" >Annoucements</a>
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