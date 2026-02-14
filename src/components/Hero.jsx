import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaBehance, FaEnvelope, FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import portraitCutout from '../assets/Me1-cropped.png';
import portraitFallback from '../assets/Me.png';
import './Hero.css';

const enterEase = [0.22, 1, 0.36, 1];

const socialLinks = [
  {
    label: 'Behance',
    href: 'https://www.behance.net/username',
    icon: FaBehance
  },
  {
    label: 'GitHub',
    href: 'https://github.com/username',
    icon: FaGithub
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/201063344708',
    icon: FaWhatsapp
  },
  {
    label: 'Gmail',
    href: 'mailto:placeholder@example.com',
    icon: FaEnvelope
  }
];

export default function Hero() {
  const [activePortrait, setActivePortrait] = useState(portraitCutout);
  const heroRef = useRef(null);
  const rafRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return undefined;

    if (reduceMotion) {
      node.style.setProperty('--parallax-x', '0');
      node.style.setProperty('--parallax-y', '0');
      return undefined;
    }

    const updateFrame = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.085;
      current.y += (target.y - current.y) * 0.085;

      node.style.setProperty('--parallax-x', current.x.toFixed(4));
      node.style.setProperty('--parallax-y', current.y.toFixed(4));

      rafRef.current = window.requestAnimationFrame(updateFrame);
    };

    rafRef.current = window.requestAnimationFrame(updateFrame);
    return () => window.cancelAnimationFrame(rafRef.current);
  }, [reduceMotion]);

  const updatePointerTarget = (clientX, clientY) => {
    const node = heroRef.current;
    if (!node || reduceMotion) return;

    const rect = node.getBoundingClientRect();
    const relativeX = (clientX - rect.left) / rect.width;
    const relativeY = (clientY - rect.top) / rect.height;

    targetRef.current.x = Math.max(-1, Math.min(1, (relativeX - 0.5) * 2));
    targetRef.current.y = Math.max(-1, Math.min(1, (relativeY - 0.5) * 2));
  };

  return (
    <section
      className="hero"
      ref={heroRef}
      onMouseMove={(event) => updatePointerTarget(event.clientX, event.clientY)}
      onMouseLeave={() => {
        targetRef.current = { x: 0, y: 0 };
      }}
    >
      <div className="hero-background" aria-hidden="true">
        <span className="blob blob-one" />
        <span className="blob blob-two" />
      </div>

      <div className="hero-noise" aria-hidden="true" />

      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82, ease: enterEase }}
        >
          <p className="hero-kicker">Technical Product Manager</p>
          <h1>I'm Bassem Ahmed, Technical Product Manager with 4 Years of Experience</h1>
          <p className="hero-subtitle">
            I build digital products that do not just launch, they grow and are AI-powered.
          </p>

          <div className="hero-actions">
            <a
              href="#"
              className="btn btn-primary"
              aria-label="Download My CV"
              download
              onClick={(event) => event.preventDefault()}
            >
              Download My CV
            </a>
            <a href="tel:+201063344708" className="btn btn-secondary" aria-label="Contact Me">
              Contact Me
            </a>
          </div>

          <ul className="hero-socials" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="hero-stage-wrap"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: enterEase }}
        >
          <div className="hero-stage">
            <img
              className={`hero-stage-image${
                activePortrait === portraitCutout ? ' hero-stage-image--subject' : ''
              }`}
              src={activePortrait}
              alt="Portrait of AI Product Owner"
              onError={() => {
                if (activePortrait !== portraitFallback) {
                  setActivePortrait(portraitFallback);
                }
              }}
            />
            <span className="hero-stage-glow" aria-hidden="true" />
            <span className="hero-stage-tone" aria-hidden="true" />
            <span className="hero-stage-left-fade" aria-hidden="true" />
            <span className="hero-stage-vignette" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
