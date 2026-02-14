'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Dynamically load GSAP
    const loadGSAP = async () => {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
      script.onload = () => {
        const scrollTrigger = document.createElement('script')
        scrollTrigger.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'
        scrollTrigger.onload = () => {
          const scrollTo = document.createElement('script')
          scrollTo.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js'
          scrollTo.onload = () => {
            // Load animations
            loadAnimations()
          }
          document.body.appendChild(scrollTo)
        }
        document.body.appendChild(scrollTrigger)
      }
      document.body.appendChild(script)
    }
    loadGSAP()
  }, [])

  return (
    <>
      {/* Preloader */}
      <div className="preloader" id="preloader">
        <div className="preloader-inner">
          <div className="preloader-logo">LEXIE<span>.</span></div>
          <div className="preloader-bar"><div className="preloader-fill"></div></div>
        </div>
      </div>

      {/* Cursor Follower */}
      <div className="cursor-glow" id="cursorGlow"></div>

      {/* Announcement */}
      <div className="announcement">
        <div className="announcement-inner">
          <span className="announcement-badge">New</span>
          <span>Lexie now supports Outlook calendar triage and smart scheduling</span>
          <a href="#">Learn more <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">LEXIE<span>.</span></a>
          <div className="nav-links">
            <a href="#product">Product</a>
            <a href="#customers">Customers</a>
            <a href="#security">Security</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="nav-actions">
            <a href="#pricing" className="btn-ghost">Try free</a>
            <a href="#cta" className="btn-primary">Book a demo</a>
          </div>
          <button className="nav-mobile-toggle" id="navToggle" aria-label="Menu">
            <span></span><span></span>
          </button>
        </div>
        <div className="nav-mobile" id="navMobile">
          <a href="#product">Product</a>
          <a href="#customers">Customers</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
          <div className="nav-mobile-ctas">
            <a href="#pricing" className="btn-primary" style={{width:'100%',textAlign:'center'}}>Try free</a>
            <a href="#cta" className="btn-outline" style={{width:'100%',textAlign:'center'}}>Book a demo</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient-orb hero-orb-1"></div>
          <div className="hero-gradient-orb hero-orb-2"></div>
          <div className="liquid-blob liquid-blob-1"></div>
          <div className="liquid-blob liquid-blob-2"></div>
          <div className="liquid-blob liquid-blob-3"></div>
          <div className="hero-grid-lines"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow" data-animate="fade-up">
              <div className="hero-eyebrow-dot"></div>
              The native AI layer for Microsoft Office
            </div>
            <h1 data-animate="hero-headline">
              <span className="hero-line">Law at the</span>
              <span className="hero-line"><em>speed</em> of thought.</span>
            </h1>
            <p className="hero-subtitle" data-animate="fade-up" data-delay="0.4">
              Lexie lives inside Word and Outlook — drafting, reviewing, and
              executing alongside you. No tab-switching. No copy-paste.
              Just flow.
            </p>
            <div className="hero-ctas" data-animate="fade-up" data-delay="0.6">
              <a href="#pricing" className="btn-primary btn-lg">
                Start for free
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M9 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#cta" className="btn-outline btn-lg">Book a demo</a>
            </div>
          </div>
        </div>

        {/* Product Window */}
        <div className="hero-product" data-animate="product-reveal">
          <div className="container-lg">
            <div className="product-window">
              <div className="product-titlebar">
                <div className="product-dots">
                  <span className="dot-red"></span><span className="dot-yellow"></span><span className="dot-green"></span>
                </div>
                <div className="product-tabs">
                  <button className="product-tab active" data-tab="word">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="1" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M5 5h6M5 8h6M5 11h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    Word
                  </button>
                  <button className="product-tab" data-tab="outlook">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M1 5l7 4 7-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    Outlook
                  </button>
                </div>
                <div className="product-titlebar-spacer"></div>
              </div>
              <div className="product-body">
                {/* Sidebar */}
                <div className="product-sidebar">
                  <div className="product-sidebar-section">
                    <div className="product-sidebar-label">Documents</div>
                    <div className="product-sidebar-item active">
                      <span className="sidebar-icon">📄</span> Service Agreement
                    </div>
                    <div className="product-sidebar-item">
                      <span className="sidebar-icon">📄</span> NDA — Acme Corp
                    </div>
                    <div className="product-sidebar-item">
                      <span className="sidebar-icon">📋</span> Client Brief
                    </div>
                  </div>
                  <div className="product-sidebar-section">
                    <div className="product-sidebar-label">Precedents</div>
                    <div className="product-sidebar-item">
                      <span className="sidebar-icon">📚</span> Clause Library
                    </div>
                  </div>
                </div>

                {/* Document Area */}
                <div className="product-document" id="productDocument">
                  {/* Word Content */}
                  <div className="doc-content" id="docWord">
                    <div className="doc-toolbar">
                      <span className="doc-toolbar-item active">Normal</span>
                      <span className="doc-toolbar-sep">|</span>
                      <span className="doc-toolbar-item">B</span>
                      <span className="doc-toolbar-item">I</span>
                      <span className="doc-toolbar-item">U</span>
                    </div>
                    <div className="doc-title-line">SERVICE AGREEMENT</div>
                    <div className="doc-meta">Between Acme Corporation and Partner Ltd · Draft v2</div>
                    <div className="doc-section">
                      <div className="doc-heading">1. DEFINITIONS AND INTERPRETATION</div>
                      <div className="doc-paragraph">
                        1.1 In this Agreement, unless the context otherwise requires:
                      </div>
                      <div className="doc-paragraph doc-indent">
                        <span className="doc-highlight">{"\"Confidential Information\""}</span> means all information
                        disclosed by either party to the other, whether orally, in writing,
                        or by any other means, that is designated as confidential.
                      </div>
                      <div className="doc-paragraph doc-indent">
                        {'"Services"'} means the legal advisory services described in
                        Schedule 1 and any additional services agreed in writing.
                      </div>
                    </div>
                    <div className="doc-section">
                      <div className="doc-heading">2. TERM AND TERMINATION</div>
                      <div className="doc-paragraph">
                        2.1 This Agreement shall commence on the <span className="doc-highlight">Effective Date</span>
                        and continue for <span className="doc-highlight">twelve (12) months</span> unless terminated earlier
                        in accordance with this clause.
                      </div>
                    </div>
                    {/* Inline Suggestion */}
                    <div className="doc-ai-inline" id="aiInlineSuggestion">
                      <div className="doc-ai-inline-bar"></div>
                      <div className="doc-ai-inline-content">
                        <div className="doc-ai-inline-icon">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#0F4C81" strokeWidth="1.5"/><path d="M7 4v3l2 1.5" stroke="#0F4C81" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </div>
                        <div>
                          <strong>Lexie</strong> — Consider adding an automatic renewal clause.
                          87% of similar agreements in your precedent bank include one.
                        </div>
                      </div>
                      <div className="doc-ai-inline-actions">
                        <button className="doc-ai-btn-accept">Insert clause</button>
                        <button className="doc-ai-btn-dismiss">Dismiss</button>
                      </div>
                    </div>
                  </div>
                  {/* Outlook Content */}
                  <div className="doc-content" id="docOutlook" style={{display:'none'}}>
                    <div className="doc-toolbar">
                      <span className="doc-toolbar-item">Reply</span>
                      <span className="doc-toolbar-item">Forward</span>
                      <span className="doc-toolbar-sep">|</span>
                      <span className="doc-toolbar-item">Archive</span>
                    </div>
                    <div className="doc-email-header">
                      <div className="doc-email-subject">RE: Insurance Claim — Policy #IPC-2024-0847</div>
                      <div className="doc-email-meta">
                        <strong>From:</strong> claims@bombaycapital.com<br/>
                        <strong>To:</strong> legal@partnerltd.com<br/>
                        <strong>Date:</strong> 12 Feb 2026, 09:41 AM
                      </div>
                    </div>
                    <div className="doc-paragraph" style={{marginTop:'1rem'}}>
                      Dear Legal Team,
                    </div>
                    <div className="doc-paragraph">
                      We are writing regarding the outstanding insurance claim under the
                      above-referenced policy. Our client maintains that the <span className="doc-highlight">force majeure</span>
                      clause applies to the circumstances described in our initial filing.
                    </div>
                    <div className="doc-paragraph">
                      Please provide your assessment of the {'claim\'s'} validity and the
                      recommended course of action by end of business Friday.
                    </div>
                    <div className="doc-ai-inline" style={{animationDelay: '0.5s'}}>
                      <div className="doc-ai-inline-bar"></div>
                      <div className="doc-ai-inline-content">
                        <div className="doc-ai-inline-icon">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#0F4C81" strokeWidth="1.5"/><path d="M7 4v3l2 1.5" stroke="#0F4C81" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </div>
                        <div>
                          <strong>Lexie</strong> — I found 3 precedents in your jurisdiction that weaken the force majeure argument. Draft a response?
                        </div>
                      </div>
                      <div className="doc-ai-inline-actions">
                        <button className="doc-ai-btn-accept">Draft response</button>
                        <button className="doc-ai-btn-dismiss">Show precedents</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Panel */}
                <div className="product-ai-panel">
                  <div className="ai-panel-header">
                    <div className="ai-avatar">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="url(#lexieGrad)"/><defs><linearGradient id="lexieGrad" x1="2" y1="1" x2="14" y2="15"><stop stopColor="#0F4C81"/><stop offset="1" stopColor="#5AB472"/></linearGradient></defs></svg>
                    </div>
                    <span className="ai-panel-title">Lexie</span>
                    <span className="ai-panel-status">Active</span>
                  </div>
                  <div className="ai-panel-messages">
                    <div className="ai-msg ai-msg-assistant">
                      <div className="ai-msg-label">Lexie</div>
                      <div className="ai-msg-text">{'I\'ve'} reviewed the full document. Here{'\'s'} what I found:</div>
                    </div>
                    <div className="ai-msg ai-msg-assistant">
                      <div className="ai-msg-card">
                        <div className="ai-msg-card-title">
                          <span className="ai-msg-card-icon">⚠️</span> Clause Review
                        </div>
                        <div className="ai-msg-card-text">
                          The confidentiality definition in §1.1 is unusually broad.
                          Consider adding carve-outs for publicly available information.
                        </div>
                      </div>
                    </div>
                    <div className="ai-msg ai-msg-assistant">
                      <div className="ai-msg-card">
                        <div className="ai-msg-card-title">
                          <span className="ai-msg-card-icon">💡</span> Suggestion
                        </div>
                        <div className="ai-msg-card-text">
                          §2.1 lacks an automatic renewal clause — 87% of similar
                          agreements in your precedent bank include one.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ai-panel-actions">
                    <button className="ai-action-chip">Draft clause</button>
                    <button className="ai-action-chip">Full review</button>
                    <button className="ai-action-chip">Redline</button>
                    <button className="ai-action-chip">Precedents</button>
                  </div>
                  <div className="ai-panel-input">
                    <input type="text" placeholder="Ask Lexie anything…" disabled/>
                    <button className="ai-send-btn">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M9 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container">
          <p className="trust-label" data-animate="fade-up">Trusted by legal teams doing world-class work</p>
          <div className="trust-logos" data-animate="fade-up" data-delay="0.2">
            <div className="trust-logo-track">
              <svg width="140" height="28" viewBox="0 0 140 28"><text x="0" y="20" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="13" fill="#888" letterSpacing="0.08em">DENTONS</text></svg>
              <svg width="180" height="28" viewBox="0 0 180 28"><text x="0" y="20" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="13" fill="#888" letterSpacing="0.08em">BAKER McKENZIE</text></svg>
              <svg width="160" height="28" viewBox="0 0 160 28"><text x="0" y="20" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="13" fill="#888" letterSpacing="0.08em">CLIFFORD CHANCE</text></svg>
              <svg width="140" height="28" viewBox="0 0 140 28"><text x="0" y="20" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="13" fill="#888" letterSpacing="0.08em">ALLEN & OVERY</text></svg>
              <svg width="140" height="28" viewBox="0 0 140 28"><text x="0" y="20" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="13" fill="#888" letterSpacing="0.08em">RAJAH & TANN</text></svg>
              <svg width="130" height="28" viewBox="0 0 130 28"><text x="0" y="20" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="13" fill="#888" letterSpacing="0.08em">DREW & NAPIER</text></svg>
              <svg width="160" height="28" viewBox="0 0 160 28"><text x="0" y="20" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="13" fill="#888" letterSpacing="0.08em">WONG PARTNERSHIP</text></svg>
              {/* Duplicate for seamless marquee */}
              <svg width="140" height="28" viewBox="0 0 140 28"><text x="0" y="20" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="13" fill="#888" letterSpacing="0.08em">DENTONS</text></svg>
              <svg width="180" height="28" viewBox="0 0 180 28"><text x="0" y="20" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="13" fill="#888" letterSpacing="0.08em">BAKER McKENZIE</text></svg>
              <svg width="160" height="28" viewBox="0 0 160 28"><text x="0" y="20" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="13" fill="#888" letterSpacing="0.08em">CLIFFORD CHANCE</text></svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Load all animations
function loadAnimations() {
  if (typeof window === 'undefined') return
  const gsap = (window as any).gsap
  if (!gsap) return

  gsap.registerPlugin((window as any).ScrollTrigger)

  const EASE = {
    smooth: 'power3.out',
    silk: 'expo.out',
    elastic: 'elastic.out(1, 0.5)',
    spring: 'back.out(1.2)',
    liquid: 'power4.out',
    slowMo: 'power2.inOut'
  }

  /* Preloader */
  const preloader = document.getElementById('preloader')
  let heroAnimated = false

  function dismissPreloader() {
    if (heroAnimated) return
    heroAnimated = true
    preloader?.classList.add('done')
    setTimeout(startHeroAnimation, 200)
  }

  window.addEventListener('load', () => setTimeout(dismissPreloader, 1200))
  if (document.readyState === 'complete') setTimeout(dismissPreloader, 1200)

  /* Custom Cursor */
  const cursorGlow = document.getElementById('cursorGlow')
  if (cursorGlow && window.innerWidth > 1024) {
    let mouseX = 0, mouseY = 0
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    })
    gsap.ticker.add(() => {
      gsap.set(cursorGlow, { x: mouseX, y: mouseY })
    })

    document.querySelectorAll('.btn-primary, .btn-outline, .product-tab, .ai-action-chip').forEach((btn: any) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(cursorGlow, { scale: 1.5, opacity: 0.8, duration: 0.4, ease: EASE.silk })
      })
      btn.addEventListener('mouseleave', () => {
        gsap.to(cursorGlow, { scale: 1, opacity: 0.5, duration: 0.4, ease: EASE.silk })
      })
    })
  }

  /* Liquid Blobs */
  const blobs = document.querySelectorAll('.liquid-blob')
  blobs.forEach((blob: any, i: number) => {
    gsap.to(blob, {
      x: () => gsap.utils.random(-40, 40),
      y: () => gsap.utils.random(-30, 30),
      scale: () => gsap.utils.random(0.9, 1.1),
      rotation: () => gsap.utils.random(-10, 10),
      duration: () => gsap.utils.random(6, 10),
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: i * 0.5,
    })
  })

  /* Navigation */
  const nav = document.getElementById('nav')
  const navToggle = document.getElementById('navToggle')
  const navMobile = document.getElementById('navMobile')

  let lastScrollY = 0
  window.addEventListener('scroll', () => {
    const currentY = window.scrollY
    nav?.classList.toggle('scrolled', currentY > 10)
    if (currentY > 300) {
      nav?.classList.toggle('nav-hidden', currentY > lastScrollY && currentY - lastScrollY > 5)
    } else {
      nav?.classList.remove('nav-hidden')
    }
    lastScrollY = currentY
  })

  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('open')
    navMobile?.classList.toggle('open')
  })

  /* Product Tab Switching */
  document.querySelectorAll('.product-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = (tab as any).dataset.tab
      document.querySelectorAll('.product-tab').forEach(t => t.classList.remove('active'))
      tab.classList.add('active')

      const wordDoc = document.getElementById('docWord')
      const outlookDoc = document.getElementById('docOutlook')
      if (!wordDoc || !outlookDoc) return

      const showing = target === 'word' ? wordDoc : outlookDoc
      const hiding = target === 'word' ? outlookDoc : wordDoc

      gsap.to(hiding, {
        opacity: 0, y: 8, duration: 0.2,
        onComplete: () => {
          hiding.style.display = 'none'
          showing.style.display = ''
          gsap.fromTo(showing,
            { opacity: 0, y: -8 },
            { opacity: 1, y: 0, duration: 0.35, ease: EASE.silk }
          )
        }
      })
    })
  })

  /* Hero Animation */
  function startHeroAnimation() {
    const tl = gsap.timeline({ defaults: { ease: EASE.liquid }})
    tl.from('.hero-eyebrow', { y: 24, opacity: 0, duration: 0.8, ease: EASE.silk })
      .from('.hero-line', { y: 60, opacity: 0, duration: 1, stagger: 0.12, ease: EASE.liquid }, '-=0.5')
      .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.9, ease: EASE.silk }, '-=0.6')
      .from('.hero-ctas', { y: 20, opacity: 0, duration: 0.8, ease: EASE.spring }, '-=0.5')
      .from('.product-window', { y: 80, opacity: 0, scale: 0.95, duration: 1.2, ease: EASE.liquid }, '-=0.5')
      .from('.liquid-blob', { scale: 0, opacity: 0, duration: 1.5, stagger: 0.2, ease: EASE.elastic }, '-=1')
  }

  /* Scroll Animations */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const animDuration = prefersReducedMotion ? 0.01 : undefined

  gsap.utils.toArray('[data-animate="fade-up"]').forEach((el: any) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      y: 40, opacity: 0, duration: animDuration || 0.9,
      delay: parseFloat(el.dataset.delay || 0), ease: EASE.liquid
    })
  })

  /* Trust Marquee */
  const trustTrack = document.querySelector('.trust-logo-track')
  if (trustTrack) {
    trustTrack.addEventListener('mouseenter', () => {
      (trustTrack as any).style.animationPlayState = 'paused'
    })
    trustTrack.addEventListener('mouseleave', () => {
      (trustTrack as any).style.animationPlayState = 'running'
    })
  }
}
