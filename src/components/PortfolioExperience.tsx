import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Radio,
  Fingerprint,
  Layers3,
  Menu,
  X,
  Github,
  Mail,
  Plus,
  Minus,
} from "lucide-react";

const stages = [
  {
    label: "The object",
    title: "Made to mean something.",
    text: "An emblem. A package. A piece of equipment. Start with a physical object worth keeping.",
    detail: "01 / PHYSICAL PRODUCT",
    icon: Layers3,
  },
  {
    label: "The connection",
    title: "A small touch. A new possibility.",
    text: "A phone tap or QR scan opens a browser experience. The object becomes a doorway to useful information.",
    detail: "02 / NFC + QR",
    icon: Radio,
  },
  {
    label: "The relationship",
    title: "Useful long after the first tap.",
    text: "Keep approved product knowledge, service history, stories, and next actions connected as the object’s life unfolds.",
    detail: "03 / CONNECTED PRODUCT INTELLIGENCE",
    icon: Fingerprint,
  },
];
const links = [
  ["State of Stick", "The company", "https://stateofstick.co"],
  ["ZapLatch", "Connected service software", "https://zaplatch.com"],
  [
    "ALTstatic™",
    "The connected platform",
    "https://stateofstick.co/altstatic",
  ],
  [
    "Product catalog",
    "Objects made to be kept",
    "https://stateofstick.co/catalog",
  ],
  [
    "Platform documentation",
    "Explore the system",
    "https://docs.stateofstick.co",
  ],
  [
    "TechFlunky Labs",
    "Creative + technical practice",
    "https://techflunkylabs.com",
  ],
];
const disciplines = [
  "Product strategy",
  "Creative direction",
  "Laser fabrication",
  "NFC + QR experiences",
  "React + TypeScript",
  "Cloudflare infrastructure",
  "AI integrations",
  "FAA Part 107",
];
const external = { target: "_blank", rel: "noopener noreferrer" };

export default function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stage, setStage] = useState(0);
  const [openCapability, setOpenCapability] = useState<number | null>(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  const StageIcon = stages[stage].icon;
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menuOpen]);
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="Andrea Cozart-Lundin home"
        >
          A<span>—</span>CL
        </a>
        <span className="header-caption">
          INDEPENDENT MIND.
          <br />
          CONNECTED WORLD.
        </span>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#about">The founder</a>
          <a className="nav-contact" href="#contact">
            Let’s connect <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[
              ["Selected work", "work"],
              ["The founder", "about"],
              ["Let’s connect", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-topline">
            <span>
              <i /> ANDREA COZART-LUNDIN
            </span>
            <span>BATTLE CREEK, MICHIGAN / EST. IN CURIOSITY</span>
          </div>
          <h1>
            Physical craft.
            <br />
            <span>Digital instinct.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              I’m Andrea. Founder of <strong>State of Stick, Co. Inc.</strong>
              <br />I turn physical objects into lasting digital
              connections—with design, manufacturing, software, and a little
              restless curiosity.
            </p>
            <a
              className="round-link"
              href="#work"
              aria-label="Explore selected work"
            >
              <ArrowDown />
            </a>
          </div>
          <div
            className="hero-art"
            aria-label="Abstract illustration of a connected physical identity"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="identity-chip">
              <Fingerprint strokeWidth={0.7} />
              <span>OBJECT / IDENTITY / POSSIBILITY</span>
            </div>
            <span className="art-coordinate">
              42.3211° N<br />
              85.1797° W
            </span>
            <span className="art-caption">
              THE PHYSICAL IS ONLY THE BEGINNING.
            </span>
          </div>
          <div className="hero-foot mono">
            <span>FOUNDER + CREATIVE TECHNOLOGIST</span>
            <span>SCROLL TO CONNECT ↓</span>
          </div>
        </section>
        <div className="discipline-strip" aria-label="Practice areas">
          <span>DESIGN</span>
          <i>✳</i>
          <span>MAKE</span>
          <i>✳</i>
          <span>CONNECT</span>
          <i>✳</i>
          <span>REIMAGINE</span>
          <i>✳</i>
        </div>
        <section className="work-section section" id="work">
          <div className="section-heading">
            <span className="kicker">01 / SELECTED WORK</span>
            <h2>
              One curious mind.
              <br />
              <span>Many ways to connect.</span>
            </h2>
          </div>
          <article className="company-feature">
            <a
              className="product-photo"
              href="https://stateofstick.co"
              {...external}
            >
              <img
                src="/connected-products.webp"
                alt="A collection of real metallic-finish State of Stick emblems"
                width="1254"
                height="1254"
                loading="lazy"
              />
              <span className="photo-caption mono">
                REAL OBJECTS. REAL POSSIBILITIES. <ArrowUpRight size={18} />
              </span>
            </a>
            <div className="company-copy">
              <span className="kicker">THE COMPANY / FOUNDER</span>
              <h3>
                State of Stick,
                <br />
                Co. Inc.
              </h3>
              <p className="large-copy">
                The object is the beginning.
                <br />
                The connection is what comes next.
              </p>
              <p>
                A Battle Creek company bringing physical manufacturing,
                persistent product identity, software, and AI together. We make
                premium emblems and connected experiences that keep useful
                information with the products, places, and people it belongs to.
              </p>
              <div className="tags">
                <span>Made in Michigan</span>
                <span>Connected products</span>
                <span>Physical + digital</span>
              </div>
              <a
                className="text-link"
                href="https://stateofstick.co"
                {...external}
              >
                Explore the company <ArrowUpRight />
              </a>
            </div>
          </article>
          <div className="project-grid">
            <article className="zaplatch-card">
              <div className="card-top mono">
                <span>01.A / SERVICE SOFTWARE</span>
                <ArrowUpRight />
              </div>
              <div className="zap-wordmark">
                zaplatch<span>.</span>
              </div>
              <div className="service-path" aria-hidden="true">
                <Radio />
                <span />
                <Fingerprint />
                <span />
                <Layers3 />
              </div>
              <h3>
                Good work deserves
                <br />a lasting connection.
              </h3>
              <p>
                AI-assisted software for businesses that install, repair, and
                maintain. Branded emblems give customers a tap or scan back to
                their service team, with equipment details, requests, and
                recorded work connected.
              </p>
              <a
                className="text-link"
                href="https://zaplatch.com"
                {...external}
              >
                Meet ZapLatch <ArrowUpRight />
              </a>
            </article>
            <article className="platform-card">
              <div className="card-top mono">
                <span>01.B / CONNECTED PLATFORM</span>
                <ArrowUpRight />
              </div>
              <div className="platform-symbol" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h3>
                ALTstatic™
                <br />
                <span>A doorway that lasts.</span>
              </h3>
              <p>
                The connected platform behind physical-to-digital experiences.
                Product identity, managed destinations, and useful context give
                each interaction somewhere meaningful to go.
              </p>
              <a
                className="text-link"
                href="https://stateofstick.co/altstatic"
                {...external}
              >
                Explore ALTstatic <ArrowUpRight />
              </a>
            </article>
          </div>
          <article className="proof-card">
            <img
              src="/connected-bottle.webp"
              alt="Custom Cauldron bottle prototype with a dimensional connected emblem"
              width="1350"
              height="1800"
              loading="lazy"
            />
            <div>
              <span className="kicker">
                PHYSICAL PROOF / PRODUCED PROTOTYPE
              </span>
              <h3>
                More than packaging.
                <br />A story with a next chapter.
              </h3>
              <p>
                The Custom Cauldron prototype brings physical craft and a
                managed product story together. A tangible example of what
                connected packaging can become.
              </p>
              <a
                className="text-link"
                href="https://stateofstick.co/case-studies/custom-cauldron"
                {...external}
              >
                See the case study <ArrowUpRight />
              </a>
            </div>
          </article>
        </section>
        <section className="connection-section section" id="connection">
          <div className="section-heading">
            <span className="kicker">02 / FOLLOW THE CONNECTION</span>
            <h2>
              A thing becomes
              <br />
              <span>something more.</span>
            </h2>
            <p>
              Select a step. Follow the idea from a physical object to an
              ongoing relationship.
            </p>
          </div>
          <div className="connection-lab">
            <div
              className="stage-buttons"
              role="group"
              aria-label="Explore the connection stages"
            >
              {stages.map((item, index) => (
                <button
                  key={item.label}
                  aria-pressed={stage === index}
                  onClick={() => setStage(index)}
                >
                  <span className="mono">0{index + 1}</span>
                  {item.label}
                  <ArrowRight />
                </button>
              ))}
            </div>
            <div className="stage-visual" aria-hidden="true">
              <div className={`signal-rings stage-${stage}`}>
                <span />
                <span />
                <span />
                <StageIcon />
              </div>
              <span className="mono">CONCEPTUAL INTERACTION</span>
            </div>
            <div
              className="stage-content"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="kicker">{stages[stage].detail}</span>
              <h3>{stages[stage].title}</h3>
              <p>{stages[stage].text}</p>
              <a
                className="text-link"
                href="https://stateofstick.co/connected-product-intelligence"
                {...external}
              >
                Explore the intelligence layer <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
        <section className="about-section section" id="about">
          <div>
            <span className="kicker">03 / THE PERSON BEHIND THE WORK</span>
            <h2>
              Artist’s eye.
              <br />
              Builder’s mind.
              <br />
              <span>Founder’s nerve.</span>
            </h2>
            <div className="founder-signature">
              Andrea Cozart-Lundin
              <span>FOUNDER / STATE OF STICK, CO. INC.</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              I like the place where disciplines collide. Where a sketch becomes
              an object, an object becomes an interface, and an idea becomes a
              business.
            </p>
            <p>
              My work crosses art, fabrication, full-stack software,
              infrastructure, and aviation. Today, I bring those worlds together
              at State of Stick, Co. Inc.—building from Battle Creek, Michigan,
              with a belief that physical products can keep doing more.
            </p>
            <div className="disciplines">
              {disciplines.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              className="text-link"
              href="https://stateofstick.co/founder-story"
              {...external}
            >
              Read my founder story <ArrowUpRight />
            </a>
          </div>
        </section>
        <section className="practice-section section">
          <span className="kicker">04 / WHAT WE CAN MAKE HAPPEN</span>
          {[
            [
              "Physical products with purpose",
              "Emblems, connected packaging, recognition pieces, retail displays, and creative installations. Thoughtful design, fabrication, and a useful digital destination.",
              "Explore the catalog",
              "https://stateofstick.co/catalog",
            ],
            [
              "Software that stays with the object",
              "Connected product identities, managed experiences, service workflows, and AI assistance grounded in approved information. Start with one object, one audience, and one useful action.",
              "Explore the platform",
              "https://stateofstick.co/platform",
            ],
            [
              "Art that invites participation",
              "Public art and connected storytelling that make an audience part of the experience. Explore the State of Stick ArtPrize initiative and its physical-to-digital ideas.",
              "Explore ArtPrize",
              "https://stateofstick.co/artprize",
            ],
          ].map(([title, text, action, href], index) => (
            <div className="capability-row" key={title}>
              <h3>
                <button
                  aria-expanded={openCapability === index}
                  aria-controls={`capability-${index}`}
                  onClick={() =>
                    setOpenCapability(openCapability === index ? null : index)
                  }
                >
                  <span className="mono">0{index + 1}</span>
                  {title}
                  {openCapability === index ? <Minus /> : <Plus />}
                </button>
              </h3>
              <div id={`capability-${index}`} hidden={openCapability !== index}>
                <p>{text}</p>
                <a className="text-link" href={href} {...external}>
                  {action}
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          ))}
        </section>
        <section className="links-section section">
          <div className="section-heading">
            <span className="kicker">05 / THE CONNECTED WORLD</span>
            <h2>Follow the threads.</h2>
          </div>
          <div className="link-grid">
            {links.map(([name, detail, href]) => (
              <a key={name} href={href} {...external}>
                <span>
                  <strong>{name}</strong>
                  <small>{detail}</small>
                </span>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </section>
        <section className="contact-section section" id="contact">
          <span className="kicker">GOT SOMETHING IN MIND?</span>
          <a className="contact-title" href="mailto:andrea@stateofstick.co">
            Let’s make
            <br />
            it <em>real.</em>
            <ArrowUpRight />
          </a>
          <div className="contact-bottom">
            <p>
              A physical product. A useful platform.
              <br />
              An idea that doesn’t fit neatly into a category.
            </p>
            <a href="mailto:andrea@stateofstick.co">
              <Mail size={18} /> andrea@stateofstick.co
            </a>
          </div>
        </section>
      </main>
      <footer>
        <a className="wordmark" href="#top">
          A<span>—</span>CL
        </a>
        <p>
          © {new Date().getFullYear()} Andrea Cozart-Lundin
          <br />
          DESIGNED IN MICHIGAN. BUILT AT THE EDGE.
        </p>
        <a href="https://github.com/cozyartz" {...external}>
          <Github size={18} /> GitHub <ArrowUpRight size={16} />
        </a>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
