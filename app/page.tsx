'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, AtSign, Clock3, Menu, X } from 'lucide-react'

const programs = [
  { number: '01', title: 'Strength', text: 'Build a body that performs under pressure.', image: '/training-card.png' },
  { number: '02', title: 'Conditioning', text: 'Move faster. Recover smarter. Go further.', image: '/studio-card.png' },
]

const schedule = [
  ['06:00', 'Hybrid Strength', 'Maya Chen', 'Performance Lab'],
  ['07:30', 'Engine Room', 'Marcus Cole', 'Main Floor'],
  ['12:00', 'Athletic Conditioning', 'Jules Hart', 'Performance Lab'],
  ['18:30', 'Barbell Club', 'Maya Chen', 'Strength Floor'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <nav className="nav container" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="Iron House home"><span>IRON</span>HOUSE<span className="dot">.</span></a>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#training" onClick={() => setMenuOpen(false)}>Training</a>
            <a href="#method" onClick={() => setMenuOpen(false)}>Our method</a>
            <a href="#schedule" onClick={() => setMenuOpen(false)}>Schedule</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="nav-cta" href="#join" onClick={() => setMenuOpen(false)}>Start training <ArrowUpRight size={16} /></a>
          </div>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>

        <div className="hero-image" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="eyebrow light"><span className="eyebrow-line" /> EST. 2014 / NYC</p>
          <h1>Train<br /><em>different.</em></h1>
          <p className="hero-copy">A stronger body. A sharper mind.<br />A community that keeps you moving.</p>
          <a href="#join" className="circle-cta" aria-label="Start your training journey"><ArrowDownRight size={26} /></a>
        </div>
        <div className="hero-side-label">NO SHORTCUTS <span /> FULL COMMITMENT</div>
        <div className="scroll-note"><span className="scroll-line" /> Scroll to explore</div>
      </section>

      <section className="ticker" aria-label="Gym values"><div>STRENGTH <span>✦</span> COMMUNITY <span>✦</span> PERFORMANCE <span>✦</span> DISCIPLINE <span>✦</span> STRENGTH <span>✦</span> COMMUNITY <span>✦</span></div></section>

      <section className="intro container" id="method">
        <div className="section-kicker"><span>01</span><span className="kicker-line" /><span>THE IRON HOUSE METHOD</span></div>
        <div className="intro-grid">
          <h2>Not just a gym.<br /><span>A way of life.</span></h2>
          <div className="intro-text"><p>We built Iron House for people who are done with average. Our training blends proven strength principles, high-performance conditioning, and a community that refuses to let you settle.</p><a className="text-link" href="#training">Discover our approach <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="programs container" id="training">
        <div className="section-heading"><div><div className="section-kicker"><span>02</span><span className="kicker-line" /><span>TRAIN WITH PURPOSE</span></div><h2>Find your <em>edge.</em></h2></div><p>Every session has a purpose.<br />Every rep moves you forward.</p></div>
        <div className="program-grid">{programs.map((program) => <article className="program-card" key={program.number}><img src={program.image} alt={`${program.title} training at Iron House`} /><div className="card-shade" /><div className="program-info"><span>{program.number}</span><h3>{program.title}</h3><p>{program.text}</p><ArrowUpRight className="card-arrow" size={22} /></div></article>)}</div>
        <a className="outline-button" href="#schedule">View all programs <ArrowUpRight size={17} /></a>
      </section>

      <section className="stats-band"><div className="container stats-grid"><div><strong>10<span>+</span></strong><p>Years of<br />getting better</p></div><div><strong>42<span>k</span></strong><p>Community<br />members</p></div><div><strong>26</strong><p>Expert-led<br />weekly sessions</p></div><div className="stats-statement"><p>GOOD IS THE<br /><em>ENEMY OF GREAT.</em></p><span>— JIM COLLINS</span></div></div></section>

      <section className="schedule container" id="schedule">
        <div className="section-heading schedule-heading"><div><div className="section-kicker"><span>03</span><span className="kicker-line" /><span>THIS WEEK AT IRON HOUSE</span></div><h2>Show up.<br /><em>Put in work.</em></h2></div><a className="text-link" href="#join">See full schedule <ArrowUpRight size={16} /></a></div>
        <div className="schedule-list">{schedule.map(([time, name, coach, room]) => <div className="schedule-row" key={time}><div className="time"><Clock3 size={16} /> {time}</div><div className="class-name">{name}</div><div className="coach">{coach}</div><div className="room">{room}</div><ArrowUpRight size={18} className="row-arrow" /></div>)}</div>
      </section>

      <section className="join-section" id="join"><div className="join-content container"><p className="eyebrow light"><span className="eyebrow-line" /> YOUR STRONGEST SELF IS WAITING</p><h2>Ready to<br /><em>level up?</em></h2><p className="join-copy">Your first session is on us.<br />Come see what you're capable of.</p><a className="lime-button" href="mailto:hello@ironhouse.fit">Claim your free session <ArrowUpRight size={18} /></a></div><div className="join-mark">IH<span>×</span></div></section>

      <footer id="contact"><div className="container footer-top"><a className="wordmark" href="#top"><span>IRON</span>HOUSE<span className="dot">.</span></a><p>Built for the committed.<br />Made for the long run.</p><div className="footer-social"><a href="#contact" aria-label="Social profile"><AtSign size={19} /></a><a href="#contact" aria-label="Email"><ArrowUpRight size={19} /></a></div></div><div className="container footer-bottom"><span>© 2024 Iron House Athletics</span><span>New York · Los Angeles · Online</span><span>Privacy / Terms</span></div></footer>
    </main>
  )
}
