import { dayMoments, featuredReferences, householdValues } from '../siteContent'

function DailyLifePage() {
  return (
    <div className="page page-daily-life">
      <section className="page-hero reveal">
        <p className="eyebrow">From Fajr to nightfall</p>
        <h1>
          A day in this home is made of prayer, work, school, tea, errands, and the
          quiet relief of everyone returning.
        </h1>
        <p className="lead">
          The family story becomes most beautiful in ordinary time. This chapter follows
          the feeling of one full day, showing how faith, routine, and affection shape
          the house hour by hour.
        </p>
      </section>

      <section className="section-shell reveal delay-1">
        <div className="section-heading">
          <p className="eyebrow">The household rhythm</p>
          <h2>Every part of the day asks for a different kind of care.</h2>
        </div>

        <div className="timeline-grid">
          {dayMoments.map((moment) => (
            <article className="day-card" key={moment.time}>
              <span className="time-tag">{moment.time}</span>
              <h3>{moment.title}</h3>
              <p>{moment.description}</p>
              <ul className="detail-list">
                {moment.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell reveal">
        <div className="split-visual">
          <article className="split-visual__image">
            <img src={featuredReferences.lesson.imageUrl} alt={featuredReferences.lesson.alt} />
            <div className="image-credit">
              <span>Faith and guidance reference</span>
              <a href={featuredReferences.lesson.href} target="_blank" rel="noreferrer">
                Photo by {featuredReferences.lesson.photographer}
              </a>
            </div>
          </article>

          <article className="split-visual__copy">
            <p className="eyebrow">Quiet lessons</p>
            <h2>Some of the strongest parts of the home happen in low voices.</h2>
            <p className="muted">
              The family is imagined as deeply rooted in faith, but not in a showy way.
              Reflection, recitation, and gentle teaching live inside the day like a
              background current.
            </p>
            <p className="muted">
              That is what makes the house feel balanced: devotion is not separate from
              love or routine. It is part of how both are practiced.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell reveal delay-2">
        <div className="split-visual split-visual--reverse">
          <article className="split-visual__copy">
            <p className="eyebrow">The youngest chapter</p>
            <h2>Rida keeps the house connected to wonder.</h2>
            <p className="muted">
              In a large family, the youngest person often becomes a shared tenderness.
              Schoolbooks, questions, little celebrations, and quiet study all remind the
              household to stay soft.
            </p>
            <p className="muted">
              The older ones may be busy, but they keep orbiting back toward that light.
              It is one of the invisible ways the family stays close.
            </p>
          </article>

          <article className="split-visual__image">
            <img
              src={featuredReferences.reflection.imageUrl}
              alt={featuredReferences.reflection.alt}
            />
            <div className="image-credit">
              <span>Reflection reference</span>
              <a href={featuredReferences.reflection.href} target="_blank" rel="noreferrer">
                Photo by {featuredReferences.reflection.photographer}
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell reveal">
        <div className="section-heading">
          <p className="eyebrow">What daily life teaches</p>
          <h2>These are the values quietly repeated by the house every day.</h2>
        </div>

        <div className="value-grid">
          {householdValues.map((value) => (
            <article className="value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DailyLifePage
