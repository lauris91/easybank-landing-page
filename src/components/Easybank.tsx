import { features } from "../data.json"

const Easybank = () => {
  return (
    <section className="easybank">
      <div className="container">
        <h2 className="easybank__headline">Why choose Easybank?</h2>
        <p className="easybank__paragraph medium">
          We leverage Open Banking to turn your bank account into your financial
          hub. <br /> Control you finances like never before.
        </p>

        <div className="easybank__features">
          {features.map(({ name, content }, index) => (
            <div className="feature-box" key={index}>
              <div
                className={`feature-box--icon feature-box--icon-${index}`}
              ></div>
              <h4 className="feature-box--name">{name}</h4>
              <p className="feature-box--content medium">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Easybank
