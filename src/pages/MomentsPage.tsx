import { Link } from 'react-router-dom'
import { bondMoments, imageReferences } from '../siteContent'

function MomentsPage() {
  return (
    <div className="page page-moments">
      <section className="page-hero reveal">
        <p className="eyebrow">Little moments, long memories</p>
        <h1>
          Some families are remembered by milestones. This one is remembered by the small
          tenderness hidden inside ordinary things.
        </h1>
        <p className="lead">
          This chapter looks at the love between the members of the household and ends
          with a visual moodboard that inspired the pages across the site.
        </p>
      </section>

      <section className="section-shell reveal delay-1">
        <div className="section-heading">
          <p className="eyebrow">Inside the bonds</p>
          <h2>The family becomes visible in the way its members lean toward one another.</h2>
        </div>

        <div className="bond-grid">
          {bondMoments.map((moment) => (
            <article className="bond-card" key={moment.title}>
              <h3>{moment.title}</h3>
              <p>{moment.description}</p>
              <small>{moment.note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell reveal" id="references">
        <div className="section-heading">
          <p className="eyebrow">Reference images</p>
          <h2>A moodboard for the story</h2>
          <p className="lead">
            These photographs are visual references used to shape the feeling of the
            website. They are not personal family photos.
          </p>
        </div>

        <div className="mood-grid">
          {imageReferences.map((reference) => (
            <article className="mood-card" key={reference.href}>
              <img src={reference.imageUrl} alt={reference.alt} />
              <div className="mood-card__body">
                <h3>{reference.title}</h3>
                <p>{reference.note}</p>
                <a href={reference.href} target="_blank" rel="noreferrer">
                  View source by {reference.photographer}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell cta-panel reveal delay-2">
        <div>
          <p className="eyebrow">Back through the story</p>
          <h2>The heart of the site is simple: home is built again every day.</h2>
          <p className="muted">
            If you want to retell the family from the beginning, step back into the front
            page or move through the family chapter again.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="button button-primary" to="/">
            Return home
          </Link>
          <Link className="button button-secondary" to="/family">
            Meet everyone again
          </Link>
        </div>
      </section>
    </div>
  )
}

export default MomentsPage
