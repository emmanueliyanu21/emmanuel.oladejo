import Header from '@/components/Header'
import ClientEffects from '@/components/ClientEffects'

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Header />

      <main>
        {/* ── HERO ─────────────────────────────────────── */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="status-line reveal">
                <span className="live" aria-hidden="true" />
                Senior Frontend Engineer · Lagos, NG · UTC+1
              </div>
              <h1 className="name">
                <span className="ln reveal">Emmanuel</span>
                <span className="ln reveal">
                  Iyanu <em>Oladejo</em>
                </span>
              </h1>
              <p className="thesis reveal">
                I build the payment interfaces people trust with their <u>money</u>.
              </p>
              <p className="sub reveal">
                Six years shipping production fintech — checkout gateways, multi-currency
                cards, and the real-time flows that move them. React &amp; Angular,
                TypeScript, edge-to-edge.
              </p>
              <div className="hero-cta reveal">
                <a href="#work" className="btn btn-primary">
                  See the work <span className="arrow" aria-hidden="true">↗</span>
                </a>
                <a href="#contact" className="btn btn-ghost">Get in touch</a>
              </div>
            </div>

            <aside className="hero-card reveal" aria-label="Emmanuel Oladejo">
              <figure className="portrait">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/portrait.png"
                  alt="Portrait of Emmanuel Iyanu Oladejo, Senior Frontend Engineer"
                  width={540}
                  height={648}
                />
                <p className="badge">
                  <span className="live" aria-hidden="true" />
                  Available for work
                </p>
              </figure>
              <div className="spec">
                <div className="spec-head">
                  <span>// profile.json</span>
                  <span>v2026</span>
                </div>
                <div className="spec-row">
                  <span className="k">focus</span>
                  <span className="v">Fintech · Payments</span>
                </div>
                <div className="spec-row">
                  <span className="k">core</span>
                  <span className="v gold">React · Angular · TS</span>
                </div>
                <div className="spec-row">
                  <span className="k">based</span>
                  <span className="v">Lagos, Nigeria</span>
                </div>
                <div className="spec-row">
                  <span className="k">remote</span>
                  <span className="v gold">Open · global</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ── STATS BAND ───────────────────────────────── */}
        <div className="band">
          <div className="wrap band-inner">
            <div className="stat reveal">
              <div className="num">6<small>+</small></div>
              <div className="lbl">Years shipping</div>
            </div>
            <div className="stat reveal">
              <div className="num">7</div>
              <div className="lbl">Companies built for</div>
            </div>
            <div className="stat reveal">
              <div className="num">500<small>+</small></div>
              <div className="lbl">Devs reached · DevFest</div>
            </div>
            <div className="stat reveal">
              <div className="num">20<small>+</small></div>
              <div className="lbl">Engineers mentored</div>
            </div>
          </div>
        </div>

        {/* ── ABOUT ────────────────────────────────────── */}
        <section className="block" id="about">
          <div className="wrap">
            <div className="about-grid">
              <div className="reveal">
                <span className="label">// about</span>
              </div>
              <div>
                <p className="lead reveal">
                  Six years shipping production fintech — checkout gateways, multi-currency
                  card management, and payment flows that handle the edge cases banks
                  don&apos;t document in their APIs.
                </p>
                <p className="reveal">
                  I started as a junior at Zenith Bank writing jQuery for internal tools,
                  and spent the years since moving up through increasingly complex payment
                  systems. At Interswitch I rebuilt a legacy switch UI from scratch in
                  React. At Kaiglo I architected the entire storefront. The pattern is the
                  same everywhere: dig into how money moves, then build the interface that
                  makes it feel effortless.
                </p>
                <p className="reveal">
                  Outside client work I mentor engineers and speak at developer events.
                  DevFest Lagos 2025, 500+ developers in the room. I care about the next
                  generation of Nigerian engineers having better onramps than I did.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WORK ─────────────────────────────────────── */}
        <section className="block" id="work">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow reveal">
                  <span className="idx">01</span>
                  {' → Work · deployments'}
                </span>
                <h2 className="reveal" style={{ marginTop: '0.8rem' }}>Systems shipped</h2>
              </div>
              <p className="note reveal">
                Every engagement below shipped to real users. No concept work, no internal
                prototypes — production code people pay with.
              </p>
            </div>

            <div className="ledger">

              {/* Wakanow */}
              <article className="entry reveal">
                <div className="meta-l">
                  <span className="chip live">Live</span>
                  <span className="yr">Nov 2024 – Now</span>
                </div>
                <div className="body">
                  <h3>Travel Checkout · <span className="co">Wakanow</span></h3>
                  <p className="role">Senior Frontend Engineer</p>
                  <p className="desc">
                    Rebuilt the travel checkout funnel — flights, hotels, visa applications
                    — with React and TypeScript. Streamlined the payment step from four
                    screens to two, cutting booking drop-off significantly across Africa&apos;s
                    largest OTA.
                  </p>
                </div>
                <div>
                  <div className="stack">
                    <span className="t">React</span>
                    <span className="t">TypeScript</span>
                    <span className="t">Redux Toolkit</span>
                    <span className="t">Tailwind CSS</span>
                  </div>
                  <div className="metric">
                    <span className="bar" />
                    4 screens → 2 at checkout
                  </div>
                </div>
              </article>

              {/* Interswitch */}
              <article className="entry reveal">
                <div className="meta-l">
                  <span className="chip shipped">Shipped</span>
                  <span className="yr">Oct 2024 – May 2026</span>
                </div>
                <div className="body">
                  <h3>Payment Switch UI · <span className="co">Interswitch Group</span></h3>
                  <p className="role">Senior Frontend Engineer</p>
                  <p className="desc">
                    Rebuilt two internal product consoles powering Nigeria&apos;s largest
                    payment switch. Migrated a legacy Angular 8 app to Angular 17 with
                    standalone components and NgRx signal store.
                  </p>
                </div>
                <div>
                  <div className="stack">
                    <span className="t">Angular</span>
                    <span className="t">NgRx</span>
                    <span className="t">TypeScript</span>
                    <span className="t">RxJS</span>
                  </div>
                  <div className="metric">
                    <span className="bar" />
                    60% bundle size reduction
                  </div>
                </div>
              </article>

              {/* Prunedge */}
              <article className="entry reveal">
                <div className="meta-l">
                  <span className="chip shipped">Shipped</span>
                  <span className="yr">Mar – Sep 2024</span>
                </div>
                <div className="body">
                  <h3>HR &amp; Payroll Platform · <span className="co">Prunedge</span></h3>
                  <p className="role">Frontend Engineer</p>
                  <p className="desc">
                    Built a multi-tenant HR and payroll platform from design specs. Key
                    contribution: a payroll rules engine UI that lets non-technical HR
                    admins configure complex deductions without engineering support.
                  </p>
                </div>
                <div>
                  <div className="stack">
                    <span className="t">React</span>
                    <span className="t">TypeScript</span>
                    <span className="t">React Query</span>
                    <span className="t">Styled Components</span>
                  </div>
                  <div className="metric">
                    <span className="bar" />
                    Self-serve payroll config
                  </div>
                </div>
              </article>

              {/* Kaiglo */}
              <article className="entry reveal">
                <div className="meta-l">
                  <span className="chip shipped">Shipped</span>
                  <span className="yr">Aug 2022 – Oct 2024</span>
                </div>
                <div className="body">
                  <h3>E-commerce Storefront · <span className="co">Kaiglo</span></h3>
                  <p className="role">Lead Frontend Engineer</p>
                  <p className="desc">
                    Sole frontend architect for a Lagos e-commerce marketplace. Designed
                    the component system, built storefront, seller dashboard, and the
                    in-app wallet with escrow — all from scratch, solo.
                  </p>
                </div>
                <div>
                  <div className="stack">
                    <span className="t">Next.js</span>
                    <span className="t">TypeScript</span>
                    <span className="t">Zustand</span>
                    <span className="t">Tailwind CSS</span>
                  </div>
                  <div className="metric">
                    <span className="bar" />
                    Full stack, built solo
                  </div>
                </div>
              </article>

              {/* Platform45 */}
              <article className="entry reveal">
                <div className="meta-l">
                  <span className="chip shipped">Shipped</span>
                  <span className="yr">Aug – Oct 2022</span>
                </div>
                <div className="body">
                  <h3>Fintech Dashboards · <span className="co">Platform45</span></h3>
                  <p className="role">Frontend Engineer (Contract)</p>
                  <p className="desc">
                    Short-term engagement building data-intensive dashboards for a South
                    African fintech client. Worked inside a remote cross-functional squad
                    on tight delivery cycles.
                  </p>
                </div>
                <div>
                  <div className="stack">
                    <span className="t">React</span>
                    <span className="t">TypeScript</span>
                    <span className="t">Material-UI</span>
                    <span className="t">React Query</span>
                  </div>
                  <div className="metric">
                    <span className="bar" />
                    Delivered on schedule
                  </div>
                </div>
              </article>

              {/* Zenith Bank */}
              <article className="entry reveal">
                <div className="meta-l">
                  <span className="chip shipped">Shipped</span>
                  <span className="yr">Aug 2020 – Jul 2022</span>
                </div>
                <div className="body">
                  <h3>Branch Ops Dashboard · <span className="co">Zenith Bank</span></h3>
                  <p className="role">Frontend Developer</p>
                  <p className="desc">
                    First engineering role. Transitioned the team from jQuery to React.
                    Shipped an internal branch-ops dashboard used daily by 1,200+ staff
                    across Nigeria.
                  </p>
                </div>
                <div>
                  <div className="stack">
                    <span className="t">React</span>
                    <span className="t">JavaScript</span>
                    <span className="t">SCSS</span>
                  </div>
                  <div className="metric">
                    <span className="bar" />
                    1,200+ daily staff users
                  </div>
                </div>
              </article>

              {/* Onebmac */}
              <article className="entry reveal">
                <div className="meta-l">
                  <span className="chip shipped">Shipped</span>
                  <span className="yr">Jul 2018 – Sep 2020</span>
                </div>
                <div className="body">
                  <h3>Agency Work · <span className="co">Onebmac</span></h3>
                  <p className="role">Frontend Developer</p>
                  <p className="desc">
                    Agency work across retail, hospitality, and logistics clients.
                    Pixel-perfect responsive HTML/CSS from Figma, integrated with PHP
                    backends across multiple industries.
                  </p>
                </div>
                <div>
                  <div className="stack">
                    <span className="t">HTML5</span>
                    <span className="t">CSS3</span>
                    <span className="t">JavaScript</span>
                    <span className="t">jQuery</span>
                  </div>
                  <div className="metric">
                    <span className="bar" />
                    Multi-industry delivery
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* ── PRODUCTS ─────────────────────────────────── */}
        <section className="block" id="products">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow reveal">
                  <span className="idx">02</span>
                  {' → Products · in build'}
                </span>
                <h2 className="reveal" style={{ marginTop: '0.8rem' }}>Things I&apos;m building</h2>
              </div>
              <p className="note reveal">Side projects that became serious products.</p>
            </div>
            <div className="product-grid">

              <a
                className="product-card reveal"
                href="https://staging.withlevo.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Levo — banking dashboard for African freelancers"
              >
                <span className="ghost" aria-hidden="true">L</span>
                <div className="pc-top">
                  <span className="chip shipped">In beta</span>
                  <span className="role">Creator &amp; lead engineer</span>
                </div>
                <h3>Levo</h3>
                <p className="pc-desc">
                  A banking dashboard for African freelancers — multi-currency balances,
                  invoice generation, and instant payout to local accounts.
                </p>
                <div className="pc-foot">
                  <div className="stack">
                    <span className="t">Next.js</span>
                    <span className="t">TypeScript</span>
                    <span className="t">Tailwind CSS</span>
                  </div>
                  <span className="pc-link">
                    Visit staging <span className="arrow" aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>

              <a
                className="product-card reveal"
                href="https://feanpay.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Feanpay — payments infrastructure for small Nigerian businesses"
              >
                <span className="ghost" aria-hidden="true">F</span>
                <div className="pc-top">
                  <span className="chip shipped">In beta</span>
                  <span className="role">Creator &amp; lead engineer</span>
                </div>
                <h3>Feanpay</h3>
                <p className="pc-desc">
                  Payments infrastructure for small Nigerian businesses — virtual accounts,
                  split settlements, and a no-code checkout link builder.
                </p>
                <div className="pc-foot">
                  <div className="stack">
                    <span className="t">React</span>
                    <span className="t">Node.js</span>
                    <span className="t">TypeScript</span>
                  </div>
                  <span className="pc-link">
                    Visit feanpay <span className="arrow" aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* ── STACK ────────────────────────────────────── */}
        <section className="block" id="stack">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow reveal">
                  <span className="idx">03</span>
                  {' → Stack · toolkit'}
                </span>
                <h2 className="reveal" style={{ marginTop: '0.8rem' }}>What I reach for</h2>
              </div>
            </div>
            <div className="stack-grid reveal">
              <div className="stack-cell">
                <div className="ct">Core frameworks <span className="n">01</span></div>
                <div className="items">
                  <span>React.js</span>
                  <span>Angular</span>
                  <span>Next.js</span>
                </div>
              </div>
              <div className="stack-cell">
                <div className="ct">Languages <span className="n">02</span></div>
                <div className="items">
                  <span>TypeScript</span>
                  <span>JavaScript ES6+</span>
                  <span>HTML5</span>
                  <span>CSS3 / SCSS</span>
                </div>
              </div>
              <div className="stack-cell">
                <div className="ct">State &amp; data <span className="n">03</span></div>
                <div className="items">
                  <span>Redux Toolkit</span>
                  <span>NgRx</span>
                  <span>React Query</span>
                  <span>Zustand</span>
                  <span>RxJS</span>
                  <span>Context</span>
                </div>
              </div>
              <div className="stack-cell">
                <div className="ct">Build &amp; testing <span className="n">04</span></div>
                <div className="items">
                  <span>Vite</span>
                  <span>Webpack</span>
                  <span>Vitest</span>
                  <span>React Testing Library</span>
                  <span>Jest</span>
                  <span>Jasmine</span>
                </div>
              </div>
              <div className="stack-cell">
                <div className="ct">UI &amp; styling <span className="n">05</span></div>
                <div className="items">
                  <span>Tailwind CSS</span>
                  <span>Radix UI</span>
                  <span>CVA</span>
                  <span>Material-UI</span>
                  <span>Styled Components</span>
                  <span>Storybook</span>
                </div>
              </div>
              <div className="stack-cell">
                <div className="ct">Backend &amp; ops <span className="n">06</span></div>
                <div className="items">
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>NestJS</span>
                  <span>Docker</span>
                  <span>GitHub Actions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMMUNITY ────────────────────────────────── */}
        <section className="block" id="community">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow reveal">
                  <span className="idx">04</span>
                  {' → Community · beyond the codebase'}
                </span>
                <h2 className="reveal" style={{ marginTop: '0.8rem' }}>Beyond the codebase</h2>
              </div>
            </div>
            <div className="comm-grid">

              <article className="comm-card reveal">
                <span className="big" aria-hidden="true">D</span>
                <div className="k">Speaker</div>
                <h4>DevFest Lagos 2025</h4>
                <p>
                  Spoke on building resilient payment UIs at Google DevFest Lagos — 500+
                  developers in attendance.
                </p>
              </article>

              <article className="comm-card reveal">
                <span className="big" aria-hidden="true">D</span>
                <div className="k">Founder · Mentor</div>
                <h4>Drexilio</h4>
                <p>
                  Founded Drexilio, a community for African engineers to find and share
                  freelance opportunities across the continent.
                </p>
              </article>

              <article className="comm-card reveal">
                <span className="big" aria-hidden="true">T</span>
                <div className="k">Mentor</div>
                <h4>Techhaven &amp; Techstudio</h4>
                <p>
                  Mentored 20+ developers through bootcamp programmes at Techhaven and
                  Techstudio, Lagos — from HTML basics to deploying React apps.
                </p>
              </article>

              <article className="comm-card reveal">
                <span className="big" aria-hidden="true">O</span>
                <div className="k">Contributor</div>
                <h4>Open source</h4>
                <p>
                  Regular contributor to open source tooling in the Nigerian developer
                  ecosystem. Bug fixes, documentation, and small feature PRs.
                </p>
              </article>

            </div>

            <div
              className="reveal"
              style={{
                marginTop: '2.4rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--line)',
                display: 'flex',
                gap: '2rem 3rem',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div className="eyebrow" style={{ marginBottom: '0.6rem' }}>Education</div>
                <p
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.86rem',
                    lineHeight: 1.9,
                    color: 'var(--mute)',
                  }}
                >
                  B.Tech – Second Class Upper, Nigeria<br />
                  PGD, Computer Science – Babcock University<br />
                  Web Developer – Andela Learning Community
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────── */}
        <section className="block contact" id="contact">
          <div className="wrap">
            <div className="eyebrow reveal">
              <span className="idx">05</span>
              &nbsp;→ Contact
            </div>
            <div className="big-cta reveal">
              <a href="mailto:emmanueliyanu.oladejo@gmail.com">
                Let&apos;s build it.
              </a>
            </div>
            <div className="contact-rows reveal">
              <a href="mailto:emmanueliyanu.oladejo@gmail.com">
                <span className="d" aria-hidden="true" />
                emmanueliyanu.oladejo@gmail.com
              </a>
              <a href="tel:+2347068576214">
                <span className="d" aria-hidden="true" />
                +234 706 857 6214
              </a>
              <a href="https://github.com/emmanueliyanu21" target="_blank" rel="noopener noreferrer">
                <span className="d" aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-oladejo-b4b751120/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="d" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer>
        <div className="wrap foot">
          <p className="m">
            <b>Emmanuel Iyanu Oladejo</b> — Senior Frontend Engineer
          </p>
          <p className="m">Lagos, Nigeria · open to work · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  )
}
