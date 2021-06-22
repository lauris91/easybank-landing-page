import Logo from "./Logo"
import { socialNetworks, footerLinks } from "../data.json"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer--section">
          <Logo fill="#fff" />
          <div className="footer--section__social">
            {socialNetworks.map((sn, index) => (
              <div
                className={`footer--section__social--${sn}`}
                key={index}
              ></div>
            ))}
          </div>
        </div>

        <div className="footer--section">
          <div className="footer--section__navbar">
            {footerLinks.map((item, index) => (
              <div className="footer--section__navbar--item" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="footer--section">
          <button className="request-invite">Request Invite</button>
          <div className="footer--section__info">
            @Easybank. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
