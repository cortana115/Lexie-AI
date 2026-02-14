/* ==========================================================
   LEXIE AI — Main JavaScript
   Apple-grade GSAP Animations, Liquid Motion, ScrollTrigger
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Apple-grade easing curves
    const EASE = {
        smooth: 'power3.out',
        silk: 'expo.out',
        elastic: 'elastic.out(1, 0.5)',
        spring: 'back.out(1.2)',
        liquid: 'power4.out',
        slowMo: 'power2.inOut'
    };

    /* ---------- PRELOADER ---------- */
    const preloader = document.getElementById('preloader');
    let heroAnimated = false;

    function dismissPreloader() {
        if (heroAnimated) return;
        heroAnimated = true;
        preloader.classList.add('done');
        setTimeout(startHeroAnimation, 200);
    }

    window.addEventListener('load', () => setTimeout(dismissPreloader, 1200));
    if (document.readyState === 'complete') setTimeout(dismissPreloader, 1200);

    /* ---------- CUSTOM CURSOR + MAGNETIC EFFECT ---------- */
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow && window.innerWidth > 1024) {
        let mouseX = 0, mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        gsap.ticker.add(() => {
            gsap.set(cursorGlow, {
                x: mouseX,
                y: mouseY,
            });
        });

        // Magnetic effect on buttons and cards
        document.querySelectorAll('.btn-primary, .btn-outline, .product-tab, .ai-action-chip').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(cursorGlow, { scale: 1.5, opacity: 0.8, duration: 0.4, ease: EASE.silk });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(cursorGlow, { scale: 1, opacity: 0.5, duration: 0.4, ease: EASE.silk });
            });
        });
    }

    /* ---------- LIQUID BLOB ANIMATION ---------- */
    const blobs = document.querySelectorAll('.liquid-blob');
    blobs.forEach((blob, i) => {
        // Organic floating motion
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
        });
    });

    /* ---------- NAVIGATION ---------- */
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');

    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        const currentY = window.scrollY;
        nav.classList.toggle('scrolled', currentY > 10);

        // Hide/show nav on scroll direction (Apple-style)
        if (currentY > 300) {
            nav.classList.toggle('nav-hidden', currentY > lastScrollY && currentY - lastScrollY > 5);
        } else {
            nav.classList.remove('nav-hidden');
        }
        lastScrollY = currentY;
    });

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navMobile.classList.toggle('open');
        });
    }

    /* ---------- PRODUCT TAB SWITCHING ---------- */
    document.querySelectorAll('.product-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            document.querySelectorAll('.product-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const wordDoc = document.getElementById('docWord');
            const outlookDoc = document.getElementById('docOutlook');
            if (!wordDoc || !outlookDoc) return;

            // Smooth crossfade transition
            const showing = target === 'word' ? wordDoc : outlookDoc;
            const hiding = target === 'word' ? outlookDoc : wordDoc;

            gsap.to(hiding, {
                opacity: 0, y: 8, duration: 0.2,
                onComplete: () => {
                    hiding.style.display = 'none';
                    showing.style.display = '';
                    gsap.fromTo(showing,
                        { opacity: 0, y: -8 },
                        { opacity: 1, y: 0, duration: 0.35, ease: EASE.silk }
                    );
                }
            });
        });
    });

    /* ---------- HERO ANIMATION — Cinematic Reveal ---------- */
    function startHeroAnimation() {
        const tl = gsap.timeline({ defaults: { ease: EASE.liquid }});

        // Eyebrow slides in
        tl.from('.hero-eyebrow', {
            y: 24, opacity: 0, duration: 0.8,
            ease: EASE.silk
        })
        // Headline lines reveal with stagger and slight scale
        .from('.hero-line', {
            y: 60, opacity: 0, duration: 1,
            stagger: 0.12,
            ease: EASE.liquid
        }, '-=0.5')
        // Subtitle fades up
        .from('.hero-subtitle', {
            y: 20, opacity: 0, duration: 0.9,
            ease: EASE.silk
        }, '-=0.6')
        // CTAs reveal with spring
        .from('.hero-ctas', {
            y: 20, opacity: 0, duration: 0.8,
            ease: EASE.spring
        }, '-=0.5')
        // Product window rises with parallax depth feel
        .from('.product-window', {
            y: 80, opacity: 0, scale: 0.95, duration: 1.2,
            ease: EASE.liquid
        }, '-=0.5')
        // Liquid blobs fade in
        .from('.liquid-blob', {
            scale: 0, opacity: 0, duration: 1.5,
            stagger: 0.2,
            ease: EASE.elastic
        }, '-=1');
    }

    /* ---------- SCROLL-TRIGGERED ANIMATIONS ---------- */

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animDuration = prefersReducedMotion ? 0.01 : undefined;

    // Fade-up elements with Apple-like smoothness
    gsap.utils.toArray('[data-animate="fade-up"]').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none'
            },
            y: 40,
            opacity: 0,
            duration: animDuration || 0.9,
            delay: parseFloat(el.dataset.delay || 0),
            ease: EASE.liquid
        });
    });

    // Stagger groups with silk easing
    const staggerGroups = {};
    gsap.utils.toArray('[data-animate="stagger-up"]').forEach(el => {
        const parent = el.parentElement;
        const key = parent ? parent.className : 'default';
        if (!staggerGroups[key]) staggerGroups[key] = [];
        staggerGroups[key].push(el);
    });

    Object.values(staggerGroups).forEach(group => {
        gsap.from(group, {
            scrollTrigger: {
                trigger: group[0],
                start: 'top 88%',
                toggleActions: 'play none none none'
            },
            y: 40,
            opacity: 0,
            duration: animDuration || 0.8,
            stagger: 0.1,
            ease: EASE.liquid
        });
    });

    // Scale-reveal elements (used in customers page)
    gsap.utils.toArray('[data-animate="scale-reveal"]').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            scale: 0.92,
            opacity: 0,
            duration: animDuration || 1.1,
            ease: EASE.liquid
        });
    });

    // Counter animation for philosophy metrics
    gsap.utils.toArray('[data-animate="counter"]').forEach(el => {
        const target = parseInt(el.dataset.target);
        const numberEl = el.querySelector('.metric-number');
        if (!numberEl) return;

        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            onEnter: () => {
                gsap.to({ val: 0 }, {
                    val: target,
                    duration: 2,
                    ease: EASE.liquid,
                    onUpdate: function() {
                        const v = Math.round(this.targets()[0].val);
                        if (target === 100) {
                            numberEl.innerHTML = v + '<span>%</span>';
                        } else {
                            numberEl.textContent = v;
                        }
                    }
                });
            },
            once: true
        });
    });

    /* ---------- PARALLAX LAYERS (Apple depth effect) ---------- */

    // Hero orbs — deep parallax
    gsap.to('.hero-orb-1, .liquid-blob-1', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5
        },
        y: -150,
        ease: 'none'
    });

    gsap.to('.hero-orb-2, .liquid-blob-2', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5
        },
        y: -80,
        ease: 'none'
    });

    gsap.to('.liquid-blob-3', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 2
        },
        y: -120,
        x: 40,
        ease: 'none'
    });

    // Product window perspective shift
    if (window.innerWidth > 768) {
        gsap.to('.product-window', {
            scrollTrigger: {
                trigger: '.hero-product',
                start: 'top 60%',
                end: 'bottom top',
                scrub: 1
            },
            y: -40,
            scale: 0.98,
            ease: 'none'
        });
    }

    /* ---------- WORKFLOW STEP ANIMATIONS ---------- */
    document.querySelectorAll('.workflow-step').forEach((step, i) => {
        const visual = step.querySelector('.workflow-step-visual');
        const content = step.querySelector('.workflow-step-content');

        if (content) {
            gsap.from(content, {
                scrollTrigger: {
                    trigger: step,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                x: step.classList.contains('workflow-step-reverse') ? 40 : -40,
                opacity: 0,
                duration: animDuration || 1,
                ease: EASE.liquid
            });
        }

        if (visual) {
            gsap.from(visual, {
                scrollTrigger: {
                    trigger: step,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                x: step.classList.contains('workflow-step-reverse') ? -40 : 40,
                opacity: 0,
                scale: 0.95,
                duration: animDuration || 1.1,
                delay: 0.15,
                ease: EASE.liquid
            });
        }
    });

    /* ---------- SECTION REVEALS ---------- */

    // Philosophy section — cinematic reveal
    if (document.querySelector('.philosophy')) {
        gsap.from('.philosophy-inner', {
            scrollTrigger: {
                trigger: '.philosophy',
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1.1,
            ease: EASE.liquid
        });
    }

    // CTA section
    if (document.querySelector('.cta')) {
        gsap.from('.cta-inner', {
            scrollTrigger: {
                trigger: '.cta',
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: EASE.liquid
        });
    }

    /* ---------- TEXT SHIMMER ON SCROLL (Apple-like) ---------- */
    document.querySelectorAll('.text-shimmer').forEach(el => {
        gsap.fromTo(el, {
            backgroundPosition: '-200% center'
        }, {
            backgroundPosition: '200% center',
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 1
            },
            ease: 'none'
        });
    });

    /* ---------- TRUST LOGO PARALLAX ---------- */
    const trustTrack = document.querySelector('.trust-logo-track');
    if (trustTrack) {
        // Pause marquee on hover
        trustTrack.addEventListener('mouseenter', () => {
            trustTrack.style.animationPlayState = 'paused';
        });
        trustTrack.addEventListener('mouseleave', () => {
            trustTrack.style.animationPlayState = 'running';
        });
    }

    /* ---------- CARD TILT (Apple-like hover depth) ---------- */
    if (window.innerWidth > 1024) {
        document.querySelectorAll('.pillar-card, .story-card, .workflow-step-visual .wf-visual-frame').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                gsap.to(card, {
                    rotateY: x * 4,
                    rotateX: y * -4,
                    transformPerspective: 800,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateY: 0,
                    rotateX: 0,
                    duration: 0.6,
                    ease: EASE.silk
                });
            });
        });
    }

    /* ---------- SMOOTH ANCHOR SCROLLING ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                gsap.to(window, {
                    scrollTo: { y: target, offsetY: 80 },
                    duration: 1.2,
                    ease: EASE.slowMo
                });
                if (navMobile && navMobile.classList.contains('open')) {
                    navToggle.classList.remove('open');
                    navMobile.classList.remove('open');
                }
            }
        });
    });

    /* ---------- PAGE-SPECIFIC: Filter buttons (customers) ---------- */
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Animate cards on filter change
            gsap.from('.story-card', {
                opacity: 0, y: 20, scale: 0.97,
                duration: 0.5,
                stagger: 0.06,
                ease: EASE.silk
            });
        });
    });

    /* ---------- INTERSECTION OBSERVER FOR LAZY ANIMATIONS ---------- */
    const lazyEls = document.querySelectorAll('.lazy-reveal');
    if (lazyEls.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        lazyEls.forEach(el => observer.observe(el));
    }
});
