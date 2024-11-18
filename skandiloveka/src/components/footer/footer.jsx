import * as React from "react"
import "./footer.scss"
import { FaVk, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col col-md-3">
              <div className="footer__copyright">© 2024</div>
            </div>
            <div className="col col-md-4 offset-md-5">
              <div className="footer__socials">
                <a
                  className="nav-link fw-bold text-nowrap"
                  href="tel:+79050255407"
                >
                  +7 (905) 025 54 07
                </a>
                <a
                  href="https://vk.com/skandiloveka"
                  className="footer__social d-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaVk />
                </a>{" "}
                <a
                  href="https://www.instagram.com/skandiloveka/"
                  className="footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaInstagram />
                </a>
                <a
                  href="t.me/SkandiLove"
                  className="footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTelegram />
                </a>
                <a
                  href="wa.me/message/4RO6FX2ILJT5P1"
                  className="footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
