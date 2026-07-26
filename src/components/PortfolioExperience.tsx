import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  CircuitBoard,
  Github,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Plane,
  Sparkles,
  X,
} from 'lucide-react';
import { useState } from 'react';

const capabilities = [
  {
    number: '01',
    icon: Layers3,
    title: 'Physical product',
    text: 'Emblems, objects, and installations shaped through vector design, laser fabrication, material testing, and finishing.',
  },
  {
    number: '02',
    icon: CircuitBoard,
    title: 'Connected experience',
    text: 'NFC and QR touchpoints that open stories, ownership journeys, sponsor moments, and useful next actions.',
  },
  {
    number: '03',
    icon: Braces,
    title: 'Digital system',
    text: 'Production web platforms, first-party analytics, and edge infrastructure built to support the object after it leaves the shop.',
  },
];

const selectedWork = [
  {
    eyebrow: 'FLAGSHIP PRACTICE',
    title: 'State of Stick, Co.',
    description:
      'A connected-product studio turning designed physical objects into useful digital touchpoints. I lead the full system—from emblem and fabrication work to the destinations, data, and operations behind each activation.',
    tags: ['Connected products', 'Laser fabrication', 'NFC + QR', 'Cloudflare'],
    href: 'https://stateofstick.co',
    action: 'Visit the studio',
    featured: true,
  },
  {
    eyebrow: 'PUBLIC ART · 2026',
    title: 'A map you can enter through touch.',
    description:
      'An ArtPrize initiative built around a 50-state acrylic map for America’s 250th year. Each state becomes its own designed object while contributing to one larger connected experience.',
    tags: ['ArtPrize', 'Public art', 'Interactive story', 'Fabrication'],
    href: 'https://stateofstick.co/artprize',
    action: 'Explore the project',
  },
  {
    eyebrow: 'SOFTWARE + SYSTEMS',
    title: 'Built past the landing page.',
    description:
      'I design and ship complete products across React, TypeScript, Astro, Workers, D1, R2, PostgreSQL, AI integrations, payments, and operational tooling.',
    tags: ['Product engineering', 'Edge systems', 'AI', 'Commerce'],
    href: 'https://github.com/cozyartz',
    action: 'View GitHub',
  },
];

const disciplines = [
  'Creative direction',
  'Connected product strategy',
  'Vector + emblem design',
  'Laser fabrication',
  'NFC + QR experiences',
  'React + TypeScript',
  'Astro + Cloudflare',
  'Product systems',
  'AI integrations',
  'FAA Part 107',
];

export default function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <button className="wordmark" onClick={() => jumpTo('top')} aria-label="Back to top">
          <span>ANDREA</span>
          <span>COZART—LUNDIN</span>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          <button onClick={() => jumpTo('practice')}>Practice</button>
          <button onClick={() => jumpTo('work')}>Selected work</button>
          <button onClick={() => jumpTo('about')}>About</button>
          <a href="mailto:hello@andreacozart.me">Start a conversation</a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <button onClick={() => jumpTo('practice')}>Practice</button>
            <button onClick={() => jumpTo('work')}>Selected work</button>
            <button onClick={() => jumpTo('about')}>About</button>
            <a href="mailto:hello@andreacozart.me">Start a conversation</a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="status-line">
              <span className="status-dot" />
              Battle Creek, Michigan · Building now
            </div>
            <h1>
              I make physical
              <br />
              ideas <em>do more.</em>
            </h1>
            <p className="hero-lede">
              I’m Andrea Cozart-Lundin—founder of State of Stick, Co., creative technologist, artist, and
              full-stack builder. I connect crafted objects to stories, systems, and measurable experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://stateofstick.co" target="_blank" rel="noreferrer">
                Explore State of Stick, Co. <ArrowUpRight />
              </a>
              <button className="text-link" onClick={() => jumpTo('work')}>
                See selected work <ArrowDownRight />
              </button>
            </div>
          </div>

          <div className="hero-object" aria-label="Engraved State of Stick, Co. ArtPrize emblem">
            <div className="object-stamp">DESIGNED + MADE IN MICHIGAN</div>
            <div className="object-frame">
              <img
                src="/state-of-stick-artprize-can.png"
                alt="Laser-engraved State of Stick, Co. ArtPrize 2026 can-shaped emblem"
                width="1000"
                height="1333"
              />
            </div>
            <span className="object-note object-note-one">01 / OBJECT</span>
            <span className="object-note object-note-two">ART + INTERFACE</span>
          </div>

          <div className="hero-index" aria-hidden="true">
            <span>PORTFOLIO / 2026</span>
            <span>SCROLL TO ENTER ↓</span>
          </div>
        </section>

        <section className="manifesto" id="practice">
          <p className="section-kicker">MY PRACTICE</p>
          <h2>
            The work lives where <span>object</span>, <span>story</span>, and <span>system</span> meet.
          </h2>
          <p className="manifesto-copy">
            A connected product should feel valuable before anyone taps it. Then the digital layer should make
            that object more useful—without getting in the way of the craft.
          </p>

          <div className="capability-grid">
            {capabilities.map(({ number, icon: Icon, title, text }) => (
              <article className="capability" key={title}>
                <div className="capability-top">
                  <span>{number}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="work-heading">
            <p className="section-kicker">SELECTED WORK</p>
            <h2>Ideas made tangible.</h2>
            <p>One practice. Multiple materials. Every layer considered.</p>
          </div>

          <div className="work-list">
            {selectedWork.map((project, index) => (
              <article className={`work-card ${project.featured ? 'work-card-featured' : ''}`} key={project.title}>
                <div className="work-number">0{index + 1}</div>
                {project.featured && (
                  <div className="work-image">
                    <img
                      src="/state-of-stick-gr-can.png"
                      alt="Engraved State of Stick, Co. GR ArtPrize 2026 emblem"
                      width="2040"
                      height="2988"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="work-content">
                  <p className="work-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.action} <ArrowUpRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-portrait">
            <div className="portrait-frame">
              <img src="/Cozy1.png" alt="Andrea Cozart-Lundin" width="512" height="512" loading="lazy" />
            </div>
            <p>FOUNDER · MAKER · BUILDER</p>
          </div>

          <div className="about-copy">
            <p className="section-kicker">ABOUT ANDREA</p>
            <h2>Not one lane. One point of view.</h2>
            <p className="about-lede">
              My background crosses art, software, fabrication, infrastructure, and aviation. That range is the
              point: I can follow an idea from sketch to physical object to the platform that makes it work.
            </p>
            <p>
              Today my focus is State of Stick, Co.—building connected physical products and experiences with a
              small, woman-owned Michigan business. I also bring years of product engineering and creative
              technology work to ambitious collaborations.
            </p>

            <div className="discipline-list">
              {disciplines.map((discipline) => (
                <span key={discipline}>
                  <Check /> {discipline}
                </span>
              ))}
            </div>

            <div className="about-meta">
              <span>
                <MapPin /> Battle Creek, MI
              </span>
              <span>
                <Plane /> FAA Part 107
              </span>
              <a href="https://github.com/cozyartz" target="_blank" rel="noreferrer">
                <Github /> @cozyartz
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-kicker">LET’S MAKE SOMETHING REAL</p>
            <h2>
              Have an object, idea,
              <br />
              or impossible brief?
            </h2>
          </div>
          <div className="contact-action">
            <Sparkles aria-hidden="true" />
            <p>
              I’m interested in connected products, public art, brand activations, unusual interfaces, and
              projects that need both creative and technical thinking.
            </p>
            <a href="mailto:hello@andreacozart.me">
              <Mail /> hello@andreacozart.me <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-mark">A—CL</div>
        <p>© 2026 Andrea Cozart-Lundin</p>
        <p>Designed in Michigan. Built at the edge.</p>
      </footer>
    </div>
  );
}
