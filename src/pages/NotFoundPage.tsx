import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="page page-detail">
      <section className="page-hero reveal">
        <p className="eyebrow">Missing page</p>
        <h1>This chapter of the family story has not been written yet.</h1>
        <p className="lead">
          The route exists outside the storybook map, so the best place to continue is
          back at the front door.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/">
            Return home
          </Link>
          <Link className="button button-secondary" to="/family">
            Open the family page
          </Link>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
