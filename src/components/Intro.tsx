const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__content">
          <h1 className="intro__content--headline">
            Next generation digital banking
          </h1>

          <p className="intro__content--paragraph large">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more
          </p>

          {/* <div className="intro__button"> */}
          <button className="request-invite">Request Invite</button>
          {/* </div> */}
        </div>
        <div className="intro__bg-image"></div>
        <img
          className="intro__image"
          src="./images/image-mockups.png"
          alt="mockups"
        />
      </div>
    </section>
  )
}

export default Intro
