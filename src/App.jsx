import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
  Mail,
  ArrowRight,
} from "lucide-react";
import { projects, ecosystem, journal } from "./data/content";
import logo from "./assets/logo.png";
import hero from "./assets/hero.webp";
import HeroImg from "./assets/HeroImg.png";
import crystal from "./assets/crystal.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Work", "Ecosystem", "Ideas", "Speaking", "About"];

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <button
          className="brand"
          onClick={() => go("top")}
          aria-label="Go to top"
        >
          {/* <img src={logo} w-10 h-full /> */}
          <span>CK</span>
          <medium>CRYSTAL KIZOR</medium>
        </button>

        <div className="nav-links desktop-nav">
          {links.map((link) => (
            <button key={link} onClick={() => go(link.toLowerCase())}>
              {link}
            </button>
          ))}
          <button className="nav-cta" onClick={() => go("contact")}>
            Let's talk <ArrowUpRight size={15} />
          </button>
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link}
                onClick={() => go(link.toLowerCase())}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <span>0{i + 1}</span>
                {link}
                <ArrowUpRight size={17} />
              </motion.button>
            ))}
            <button onClick={() => go("contact")} className="mobile-talk">
              Let's talk <ArrowUpRight size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-pad">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">
              Architect / Designer / Researcher / Entrepreneur
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              Designing better ways to <em>live, build</em> and grow.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="hero-description">
              Crystal Kizor explores how people, place, climate and ideas can
              shape a more thoughtful future.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="hero-actions">
              <a href="#work" className="button button-dark">
                Explore the work <ArrowDownRight size={18} />
              </a>
              <a href="#contact" className="text-link">
                Work with Crystal <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-visual" delay={0.18}>
          <div className="portrait-frame">
            <img src={HeroImg} alt="" />
            <img
              src="./assets/hero.webp"
              alt="Portrait placeholder for Crystal Kizor"
            />
            <div className="portrait-caption">
              <span>01</span>
              <span>CRYSTAL KIZOR</span>
              <span>LAGOS / NIGERIA</span>
            </div>
          </div>
          <div className="hero-stamp">
            C<br />K
          </div>
        </Reveal>
      </div>
      <div className="container hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDownRight size={16} />
        <span>2026</span>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section-pad" id="about">
      <div className="container intro-grid">
        <Reveal>
          <p className="section-label">02 / POINT OF VIEW</p>
        </Reveal>
        <Reveal delay={0.08}>
          <div>
            <h2>
              Different disciplines.
              <br />
              <em>One question.</em>
            </h2>
            <p className="large-copy">
              How can we create places, products, knowledge and opportunities
              that make life better?
            </p>
            <p className="body-copy">
              From architecture and product design to education, research and
              youth development, Crystal's work sits at the intersection of
              creativity and impact.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work section-pad" id="work">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <p className="section-label">03 / SELECTED WORK</p>
            <h2>
              Built with <em>purpose.</em>
            </h2>
          </div>
          <p>
            Projects that explore climate, context, culture and everyday life.
          </p>
        </Reveal>
        <div className="project-list">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <article className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span className="project-number">{project.number}</span>
                  <a
                    href="#contact"
                    className="round-arrow"
                    aria-label={`Learn about ${project.title}`}
                  >
                    <ArrowUpRight />
                  </a>
                </div>
                <div className="project-meta">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                  <span>{project.location}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="ecosystem section-pad" id="ecosystem">
      <div className="container">
        <Reveal className="section-heading ecosystem-heading">
          <div>
            <p className="section-label">04 / THE ECOSYSTEM</p>
            <h2>
              One practice.
              <br />
              <em>Many expressions.</em>
            </h2>
          </div>
          <p>
            Explore the ideas, ventures and platforms growing around Crystal's
            work.
          </p>
        </Reveal>
        <div className="ecosystem-grid">
          {ecosystem.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.08} className="eco-group">
              <div className="eco-top">
                <span>{group.eyebrow}</span>
                <span>0{i + 1}</span>
              </div>
              <h3>{group.group}</h3>
              {group.items.map((item) => (
                <a className="eco-item" href="#contact" key={item.name}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.desc}</p>
                  </div>
                  <ArrowUpRight size={20} />
                </a>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-pad">
      <div className="container about-grid">
        <Reveal className="about-image">
          <img src={crystal} alt="Portrait placeholder" loading="lazy" />
          <span>BEHIND THE WORK</span>
        </Reveal>
        <Reveal delay={0.1} className="about-copy">
          <p className="section-label">05 / ABOUT CRYSTAL</p>
          <h2>
            A curious mind with a <em>builder's instinct.</em>
          </h2>
          <p className="large-copy">
            Crystal is an architect, designer, researcher, entrepreneur and
            speaker interested in the systems behind the spaces we inhabit.
          </p>
          <p className="body-copy">
            Her work moves between practice and public conversation — creating
            buildings and products, teaching professionals, developing platforms
            and asking difficult questions about how we design for people and
            place.
          </p>
          <a href="#contact" className="text-link">
            More about Crystal <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="journal section-pad" id="ideas">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <p className="section-label">06 / IDEAS & WRITING</p>
            <h2>
              Thinking <em>out loud.</em>
            </h2>
          </div>
          <a href="#contact" className="text-link">
            Explore all ideas <ArrowUpRight size={16} />
          </a>
        </Reveal>
        <div className="journal-list">
          {journal.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <article className="journal-row">
                <span className="journal-date">{post.date}</span>
                <div>
                  <span className="tag">{post.tag}</span>
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                </div>
                <ArrowUpRight className="journal-arrow" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Speaking() {
  return (
    <section className="speaking section-pad" id="speaking">
      <div className="container speaking-inner">
        <Reveal>
          <p className="section-label">07 / SPEAKING</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2>
            Let's start
            <br />
            <em>a conversation.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p>
            Conversations on architecture, climate-responsive design, African
            cities, entrepreneurship, creativity and the built environment.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a className="button button-light" href="mailto:hello@example.com">
            Invite Crystal to speak <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const options = [
    "I want to build",
    "I want to learn",
    "I want to collaborate",
    "I want to hear her speak",
    "I want to explore the ideas",
  ];
  return (
    <section className="contact section-pad" id="contact">
      <div className="container">
        <Reveal>
          <p className="section-label">08 / YOUR NEXT STEP</p>
          <h2>
            Where do you want
            <br />
            to go <em>next?</em>
          </h2>
        </Reveal>
        <div className="contact-options">
          {options.map((option, i) => (
            <Reveal key={option} delay={i * 0.05}>
              <a href="mailto:hello@example.com">
                <span>0{i + 1}</span>
                {option}
                <ArrowRight size={18} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <div className="footer-brand">
            CRYSTAL
            <em>KIZOR</em>
          </div>
          <p>Designing better ways to live, build and grow.</p>
        </div>
        <div className="footer-links">
          <a href="#work">Work</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#ideas">Ideas</a>
          <a href="#speaking">Speaking</a>
          <a href="#about">About</a>
        </div>
        <div className="footer-social">
          <a href="#contact">
            <span>IG</span>
          </a>
          <a href="#contact">
            <span>LI</span>
          </a>
          <a href="mailto:hello@example.com">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Crystal Kizor</span>
        <span>Lagos / Nigeria</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Work />
        <Ecosystem />
        <About />
        <Journal />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
