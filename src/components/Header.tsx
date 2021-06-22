import { useState } from "react"
import { CSSTransition } from "react-transition-group"

import Logo from "./Logo"
import { headerLinks } from "../data.json"

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <Logo fill="#2D314D" />
        <CSSTransition
          in={showMobileMenu}
          classNames="header__bg"
          addEndListener={(node: HTMLElement, done: () => void) => {
            node.addEventListener("transitionend", done, false)
          }}
          unmountOnExit
        >
          <div className="header__bg"></div>
          {/* <div className={`${showMobileMenu ? "header__bg" : ""}`}></div> */}
        </CSSTransition>

        <CSSTransition
          in={showMobileMenu}
          classNames="header__navbar"
          addEndListener={(node: HTMLElement, done: () => void) => {
            node.addEventListener("transitionend", done, false)
          }}
        >
          <div className={`header__navbar`}>
            {headerLinks.map((link, index) => (
              <div key={index} className={`header__navbar--item`}>
                {link}
              </div>
            ))}
          </div>
        </CSSTransition>
        <button className="request-invite">Request Invite</button>
        <div
          className={`header__${showMobileMenu ? "close" : "hamburger"}`}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        ></div>
      </div>
    </header>
  )
}

export default Header
