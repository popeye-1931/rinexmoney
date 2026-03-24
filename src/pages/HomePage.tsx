import { Link } from 'react-router-dom'
import {
  chapterCards,
  familyGroups,
  familyMembers,
  featuredReferences,
  householdFacts,
  siteMeta,
} from '../siteContent'

function HomePage() {
  const parents = familyMembers.filter(
    (member) => member.role === 'Father' || member.role === 'Mother',
  )

  return (
    <div className="page page-home">
      <section className="story-hero reveal">
        <div className="hero-copy">
          <p className="eyebrow">A storybook portrait of an Indian Muslim home</p>
          <h1>
            Inside the house of Salim and Julekha, love looks like tea on the table,
            prayer in the quiet, and everyone waiting for everyone else to come home.
          </h1>
          <p className="lead">{siteMeta.storyLead}</p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/family">
              Meet the family
            </Link>
            <Link className="button button-secondary" to="/daily-life">
              Follow a day
            </Link>
          </div>

          <div className="stat-band">
            {householdFacts.map((fact) => (
              <article className="stat-chip" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-collage">
          <article className="hero-image-card hero-image-card--main">
            <img
              src={featuredReferences.portrait.imageUrl}
              alt={featuredReferences.portrait.alt}
            />
            <div className="image-credit">
              <span>Family portrait reference</span>
              <a href={featuredReferences.portrait.href} target="_blank" rel="noreferrer">
                Photo by {featuredReferences.portrait.photographer}
              </a>
            </div>
          </article>

          <article className="mini-visual">
            <img src={featuredReferences.lane.imageUrl} alt={featuredReferences.lane.alt} />
            <div className="mini-visual__body">
              <strong>Neighborhood lanes</strong>
              <span>Warm walls, close doors, and footsteps everyone recognizes.</span>
            </div>
          </article>

          <article className="mini-visual">
            <img src={featuredReferences.tea.imageUrl} alt={featuredReferences.tea.alt} />
            <div className="mini-visual__body">
              <strong>Tea between conversations</strong>
              <span>Care in this house is usually served quietly and still warm.</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell reveal delay-1">
        <div className="section-heading">
          <p className="eyebrow">Who lives here</p>
          <h2>{siteMeta.householdLine}</h2>
        </div>

        <p className="family-line">
          This site imagines their home as affectionate, busy, respectful, and full of
          tiny routines that make nine people feel woven together rather than crowded
          together.
        </p>

        <div className="names-row">
          {familyMembers.map((member) => (
            <span className="name-pill" key={member.name}>
              {member.name} <small>({member.age})</small>
            </span>
          ))}
        </div>
      </section>

      <section className="section-shell reveal delay-2">
        <div className="section-heading">
          <p className="eyebrow">The first anchors</p>
          <h2>The home stands because two people keep it steady.</h2>
        </div>

        <div className="parent-grid">
          {parents.map((parent) => (
            <article className="anchor-card" key={parent.name}>
              <div className="member-card__top">
                <span className="role-tag">{parent.role}</span>
                <span className="age-tag">{parent.age}</span>
              </div>
              <h3>{parent.name}</h3>
              <p className="anchor-card__tagline">{parent.tagline}</p>
              <p>{parent.summary}</p>
              <small>{parent.chapter}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell reveal">
        <div className="section-heading">
          <p className="eyebrow">Read the story in chapters</p>
          <h2>Each page shows a different way family love becomes visible.</h2>
        </div>

        <div className="chapter-grid">
          {chapterCards.map((chapter) => (
            <article className="chapter-card" key={chapter.to}>
              <p className="eyebrow">{chapter.eyebrow}</p>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
              <Link className="text-link" to={chapter.to}>
                Open chapter
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-panel reveal delay-1">
        <p className="quote-panel__mark">Nine hearts, one roof.</p>
        <h2>
          The beauty of this family is not one grand event. It is the way ordinary days
          are carried together.
        </h2>

        <div className="family-group-grid">
          {familyGroups.map((group) => (
            <article className="family-group-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
              <div className="names-row">
                {group.names.map((name) => (
                  <span className="name-pill" key={name}>
                    {name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
