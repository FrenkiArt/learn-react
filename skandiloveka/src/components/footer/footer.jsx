import * as React from "react"
import "./footer.scss"
import { FaVk, FaInstagram } from "react-icons/fa"

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
                  className="footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaVk />
                </a>
                <a
                  href="https://www.instagram.com/skandiloveka/"
                  className="footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaInstagram />
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
