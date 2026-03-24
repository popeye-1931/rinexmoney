import { Link } from 'react-router-dom'
import { familyGroups, familyMembers } from '../siteContent'

function FamilyPage() {
  const parents = familyMembers.filter(
    (member) => member.role === 'Father' || member.role === 'Mother',
  )
  const children = familyMembers.filter(
    (member) => member.role !== 'Father' && member.role !== 'Mother',
  )

  return (
    <div className="page page-family">
      <section className="page-hero reveal">
        <p className="eyebrow">Meet the household</p>
        <h1>Nine people, each carrying a different kind of light into the same home.</h1>
        <p className="lead">
          This chapter introduces the family not as a list of names, but as a living
          rhythm of personalities: stable parents, responsible elders, lively brothers,
          caring sisters, and one youngest voice keeping the whole place bright.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/daily-life">
            See their daily rhythm
          </Link>
          <Link className="button button-secondary" to="/moments">
            Explore small moments
          </Link>
        </div>
      </section>

      <section className="section-shell reveal delay-1">
        <div className="section-heading">
          <p className="eyebrow">The foundation</p>
          <h2>Every large family needs two people who make home feel reliable.</h2>
        </div>

        <div className="parent-grid">
          {parents.map((member) => (
            <article className="anchor-card" key={member.name}>
              <div className="member-card__top">
                <span className="role-tag">{member.role}</span>
                <span className="age-tag">{member.age}</span>
              </div>
              <h3>{member.name}</h3>
              <p className="anchor-card__tagline">{member.tagline}</p>
              <p>{member.summary}</p>
              <small>{member.chapter}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell reveal">
        <div className="section-heading">
          <p className="eyebrow">The children</p>
          <h2>Seven different ages, seven different temperaments, one shared belonging.</h2>
        </div>

        <div className="member-grid">
          {children.map((member) => (
            <article className="member-card" key={member.name}>
              <div className="member-card__top">
                <span className="role-tag">{member.role}</span>
                <span className="age-tag">{member.age}</span>
              </div>
              <h3>{member.name}</h3>
              <p className="anchor-card__tagline">{member.tagline}</p>
              <p>{member.summary}</p>
              <small>{member.chapter}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell reveal delay-2">
        <div className="section-heading">
          <p className="eyebrow">How the house arranges itself</p>
          <h2>Family structure here feels less like hierarchy and more like balance.</h2>
        </div>

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

export default FamilyPage
