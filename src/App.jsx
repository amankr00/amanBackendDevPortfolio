import './App.css'
import portfolio from './data/portfolio.js'

export default function App() {
  const year = new Date().getFullYear()
  return (
    <div className="page">
      <a className="skipLink" href="#content">
        Skip to content
      </a>

      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="#content" aria-label="Back to top">
            <span className="brandDot" aria-hidden="true" />
            <span className="brandText">{portfolio.name}</span>
          </a>

          <nav className="nav" aria-label="Primary navigation">
            <a className="navLink" href="#projects">
              Projects
            </a>
            <a className="navLink" href="#ideas">
              Ideas
            </a>
            <a className="navLink navCta" href={`mailto:${portfolio.email}`}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="content" className="main">
        <section className="hero" aria-label="Hero">
          <div className="container heroInner">
            <div className="heroCopy">
              <p className="kicker">{portfolio.role}</p>
              <h1 className="heroTitle">{portfolio.headline}</h1>
              <p className="heroSummary">{portfolio.summary}</p>

              <div className="ctaRow">
                <a className="button primary" href="#projects">
                  View Projects
                </a>
                <a className="button ghost" href={`mailto:${portfolio.email}`}>
                  Email Me
                </a>
              </div>

              <div className="metaGrid" aria-label="Contact details">
                <div className="metaCard">
                  <div className="metaLabel">Email</div>
                  <a className="metaValue" href={`mailto:${portfolio.email}`}>
                    {portfolio.email}
                  </a>
                </div>

                <div className="metaCard">
                  <div className="metaLabel">LinkedIn</div>
                  <a
                    className="metaValue"
                    href={portfolio.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {portfolio.linkedinLabel}
                  </a>
                </div>
              </div>
            </div>

            <div className="heroVisual" aria-label="Profile photo">
              <div className="photoFrame">
                <img
                  className="photo"
                  src={portfolio.profilePhotoUrl}
                  alt={`${portfolio.name} profile`}
                  loading="eager"
                />
              </div>
              <div className="heroBadge" aria-label="Status">
                <div className="heroBadgeTitle">Backend Focus</div>
                <div className="heroBadgeBody">
                  APIs · Databases · Queues · Observability
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section" aria-label="Projects">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle">Projects</h2>
              <p className="sectionLead">
                Three recent builds — architecture-first, production-minded, and
                shipped with clean DX.
              </p>
            </div>

            <div className="grid">
              {portfolio.projects.map((project) => (
                <article key={project.name} className="card projectCard">
                  <div className="projectTop">
                    <h3 className="projectTitle">{project.name}</h3>
                    <div className="projectLinks">
                      <a
                        className="linkButton"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                      <a
                        className="linkButton"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live
                      </a>
                    </div>
                  </div>

                  <p className="projectDesc">{project.description}</p>

                  <ul className="tags" aria-label="Tech used">
                    {project.tech.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="ideas" className="footer" aria-label="Footer">
        <div className="container footerInner">
          <div className="footerLeft">
            <div className="footerTitle">Upcoming Ideas</div>
            <ul className="ideas" aria-label="Upcoming ideas list">
              {portfolio.upcomingIdeas.map((idea) => (
                <li key={idea.title} className="idea">
                  <div className="ideaTitle">{idea.title}</div>
                  <div className="ideaDetail">{idea.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="footerRight">
            <div className="footerMeta">
              © {year} {portfolio.name}. Built with Vite + React.
            </div>
            <div className="footerLinks">
              <a
                className="navLink"
                href={portfolio.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="navLink" href={`mailto:${portfolio.email}`}>
                Email
              </a>
              <a className="navLink" href="#content">
                Back to top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
