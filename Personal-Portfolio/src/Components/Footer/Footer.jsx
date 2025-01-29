import React from 'react'
import Logo from "../../img/logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"><img src={Logo} alt="" className="footer__logo" /></h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">Testimonials</a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="" className="footer__social-link footer__facebook" target="_blank">
            <i class="bx bxl-facebook"></i>
        </a>

        <a href="" className="footer__social-link footer__instagram" target="_blank">
            <i class="bx bxl-instagram "></i>
        </a>

        <a href="" className="footer__social-link footer__twitter" target="_blank">
            <i class="bx bxl-twitter"></i>
        </a>
        </div>

        <span className="footer__copy">&#169; BrahmaCods. All rigths reserved</span>
      </div>
    </footer>
  )
}

export default Footer