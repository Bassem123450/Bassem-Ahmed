import bassemImage from '../assets/Bassem.png';
import bloodImage from '../assets/Blood (2).png';
import dashboardImage from '../assets/Grothgrid.png';
import planImage from '../assets/plan.png';
import startupImage from '../assets/Startup.png';
import './GitHubPortfolioSection.css';

const projectCards = [
  {
    id: 'startup',
    title: 'Ecommerce React App',
    fileLabel: 'ecommerce-react.live',
    tag: 'ECOMMERCE',
    image: startupImage,
    href: 'https://ecommerce-react-app34.netlify.app/',
    alt: 'Startup e-commerce project preview',
    slot: 'center'
  },
  {
    id: 'blood',
    title: 'Blood Donation',
    fileLabel: 'blood-donation.live',
    tag: 'BLOOD',
    image: bloodImage,
    href: 'https://blood-donation-d97751.netlify.app/home#',
    alt: 'Blood donation project preview',
    slot: 'left-top'
  },
  {
    id: 'bassem',
    title: 'Full CRUD Operation',
    fileLabel: 'full-crud-operation.live',
    tag: 'CRUD',
    image: bassemImage,
    href: 'https://crud-system-pure-js.netlify.app/',
    alt: 'Bassem CRUD system project preview',
    slot: 'left-bottom'
  },
  {
    id: 'plan',
    title: 'Travel Agency',
    fileLabel: 'travel-agency.live',
    tag: 'PLAN',
    image: planImage,
    href: 'https://travel-agency-2859fc.netlify.app/',
    alt: 'Travel plan agency project preview',
    slot: 'right-top'
  },
  {
    id: 'dashboard',
    title: 'Projects Dashboard',
    fileLabel: 'project-dashboard.live',
    tag: 'DASHBOARD',
    image: dashboardImage,
    href: 'https://bassem123450.github.io/my-personal-web/',
    alt: 'Projects dashboard preview',
    slot: 'right-bottom'
  }
];

const floatingPills = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'VITE'];

export default function GitHubPortfolioSection() {
  return (
    <section id="github-portfolio" className="github-portfolio-section" aria-labelledby="github-portfolio-title">
      <div className="github-portfolio-shell">
        <header className="github-portfolio-header">
          <p className="github-portfolio-kicker">GitHub Work</p>
          <h2 id="github-portfolio-title">Git Hub Portfolio</h2>
          <p className="github-portfolio-subtitle">
            A file-style showcase that groups my live projects with direct links.
          </p>
        </header>

        <div className="github-portfolio-scene">
          <div className="github-portfolio-pills" aria-hidden="true">
            {floatingPills.map((pill, index) => (
              <span key={pill} className={`github-portfolio-pill github-portfolio-pill--${index + 1}`}>
                {pill}
              </span>
            ))}
          </div>

          <div className="github-portfolio-stack">
            {projectCards.map((card, index) => (
              <a
                key={card.id}
                className={`github-portfolio-card github-portfolio-card--${card.slot}`}
                style={{ '--card-order': index }}
                href={card.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${card.title} - Open live project`}
              >
                <span className="github-portfolio-card__tag">{card.tag}</span>
                <div className="github-portfolio-card__media">
                  <img src={card.image} alt={card.alt} loading={index < 2 ? 'eager' : 'lazy'} />
                </div>
                <span className="github-portfolio-card__title">{card.title}</span>
              </a>
            ))}
          </div>

          <div className="github-portfolio-folder">
            <span className="github-portfolio-folder__back github-portfolio-folder__back--rear" aria-hidden="true" />
            <span className="github-portfolio-folder__back github-portfolio-folder__back--mid" aria-hidden="true" />
            <span className="github-portfolio-folder__tab" />
            <div className="github-portfolio-folder__body">
              <p className="github-portfolio-folder__name">Bassem / Project Files</p>
              <div className="github-portfolio-folder__meta">
                <span>5 projects</span>
                <span>live links</span>
                <span>mobile ready</span>
              </div>
              <ul className="github-portfolio-folder__files" aria-label="Projects inside this file">
                {projectCards.map((project) => (
                  <li key={project.id}>
                    <a href={project.href} target="_blank" rel="noreferrer noopener">
                      <span aria-hidden="true" className="github-portfolio-folder__file-dot" />
                      {project.fileLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
