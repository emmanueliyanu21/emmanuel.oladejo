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
                  <em>Oladejo</em>
                </span>
              </h1>
              <p className="thesis reveal">
                I build the payment interfaces people trust with their <u>money</u>.
              </p>
              <p className="sub reveal">
                Six years shipping production fintech — checkout gateways, multi-currency cards, and
                the real-time flows that move them. React &amp; Angular, TypeScript, edge-to-edge.
              </p>
              <div className="hero-cta reveal">
                <a href="#work" className="btn btn-primary">
                  See the work <span className="arrow" aria-hidden="true">↗</span>
                </a>
                <a href="#contact" className="btn btn-ghost">Start a conversation</a>
              </div>
            </div>

            <aside className="hero-card reveal" aria-label="Emmanuel Oladejo">
              <figure className="portrait">
                <div className="portrait-placeholder">
                  <span>EO</span>
                </div>
                <p className="badge">
                  <span className="live" aria-hidden="true" />
                  Open to work
                </p>
              </figure>
              <div className="spec">
                <div className="spec-head">
                  <span>profile.spec</span>
                  <span>v2.6</span>
                </div>
                <div className="spec-row">
                  <span className="k">role</span>
                  <span className="v">Sr. Frontend Eng.</span>
                </div>
                <div className="spec-row">
                  <span className="k">location</span>
                  <span className="v">Lagos, NG</span>
                </div>
                <div className="spec-row">
                  <span className="k">available</span>
                  <span className="v gold">Open · 2026</span>
                </div>
                <div className="spec-row">
                  <span className="k">core</span>
                  <span className="v">React / Angular</span>
                </div>
                <div className="spec-row">
                  <span className="k">exp</span>
                  <span className="v">6 yrs</span>
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
              <div className="lbl">Years in fintech</div>
            </div>
            <div className="stat reveal">
              <div className="num">12<small>+</small></div>
              <div className="lbl">Products shipped</div>
            </div>
            <div className="stat reveal">
              <div className="num">4</div>
              <div className="lbl">Companies</div>
            </div>
            <div className="stat reveal">
              <div className="num">$2<small>B+</small></div>
              <div className="lbl">In transaction flow</div>
            </div>
          </div>
        </div>

        {/* ── ABOUT ────────────────────────────────────── */}
        <section className="block" id="about">
          <div className="wrap">
            <div className="about-grid reveal">
              <div>
                <p className="label eyebrow">
                  <span className="idx">01</span> About
                </p>
              </div>
              <div>
                <p className="lead">
                  I turn complex money movement into interfaces that feel obvious — fast, accurate,
                  and trusted at scale.
                </p>
                <p>
                  My focus has always been the moment of transaction: the split-second when a user
                  commits a payment, the confirmation that lands instantly, the dashboard that never
                  lies. I work across the full frontend layer — architecture, design systems, and
                  performance — to make fintech feel effortless.
                </p>
                <p>
                  Based in Lagos, Nigeria, at the intersection of Africa&apos;s fastest-growing
                  payment ecosystems. React &amp; Angular primary, TypeScript always, eye forever on
                  the user.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WORK ─────────────────────────────────────── */}
        <section className="block" id="work">
          <div className="wrap">
            <div className="section-head">
              <h2>Selected Work</h2>
              <span className="note">Six years, four companies, one focus — fintech at scale.</span>
            </div>
            <div className="ledger">

              {/* Entry 1 */}
              <div className="entry reveal">
                <div className="meta-l">
                  <span className="chip live">Live</span>
                  <span className="yr">2023 – Now</span>
                </div>
                <div className="body">
                  <h3>Checkout Gateway · <span className="co">Fincra</span></h3>
                  <p className="role">Senior Frontend Engineer</p>
                  <p className="desc">
                    Architected the merchant-facing checkout SDK and dashboard consumed by{' '}
                    <b>3,000+ businesses</b> across Africa. Rebuilt the payment flow from a
                    multi-page form into a single-pass sheet, cutting abandonment by 34 % while
                    adding 12 new currency routes.
                  </p>
                </div>
                <div>
                  <div className="stack">
                    <span className="t">React</span>
                    <span className="t">TypeScript</span>
                    <span className="t">Next.js</span>
                    <span className="t">GraphQL</span>
                    <span className="t">Zustand</span>
                  </div>
                  <div className="metric">
                    <span className="bar" />
                    34 % drop in abandonment
                  </div>
                </div>
              </div>

              {/* Entry 2 */}
              <div className="entry reveal">
                <div className="meta-l">
                  <span className="chip shipped">Shipped</span>
                  <span className="yr">2021 – 2023</span>
                </div>
                <div className="body">
                  <h3>Multi-currency Cards · <span className="co">Chipper Cash</span></h3>
                  <p className="role">Frontend Engineer</p>
                  <p className="desc">
                    Built the card-management interface enabling users to hold, convert, and spend
                    across <b>7 African currencies</b> in real time. Delivered a design-system
                    migration from a legacy CSS approach to token-driven theming — adopted across
                    four product squads.
                  </p>
                </div>
                <div>
                  <div className="stack">
                    <span className="t">Angular</span>
                    <span className="t">TypeScript</span>
                    <span className="t">NgRx</span>
                    <span className="t">REST</span>
                    <span className="t">SCSS</span>
                  </div>
                  <div className="metric">
                    <span className="bar" />
                    200 k+ daily active users
                  </div>
                </div>
              </div>

              {/* Entry 3 */}
              <div className="entry reveal">
                <div className="meta-l">
                  <span className="chip shipped">Shipped</span>
                  <span className="yr">2020 – 2021</span>
                </div>
                <div className="body">
                  <h3>Real-time Ledger · <span className="co">Kuda Bank</span></h3>
                  <p className="role">Frontend Engineer</p>
                  <p className="desc">
                    Developed the real-time transaction feed and notification layer for Nigeria&apos;s
                    first fully digital bank. Introduced <b>WebSocket-driven optimistic updates</b>{' '}
                    that cut perceived latency from 900 ms to under 120 ms for 1 M+ users.
                  </p>
                </div>
                <div>
                  <div className="stack">
                    <span className="t">React</span>
                    <span className="t">Redux</span>
                    <span className="t">WebSockets</span>
                    <span className="t">Node.js</span>
                  </div>
                  <div className="metric">
                    <span className="bar" />
                    900 ms → 120 ms latency
                  </div>
                </div>
              </div>

              {/* Entry 4 */}
              <div className="entry reveal">
                <div className="meta-l">
                  <span className="chip shipped">Shipped</span>
                  <span className="yr">2018 – 2020</span>
                </div>
                <div className="body">
                  <h3>POS Interface · <span className="co">Flutterwave</span></h3>
                  <p className="role">Junior → Mid Frontend Engineer</p>
                  <p className="desc">
                    Joined as first frontend hire on the merchant POS team. Shipped the web terminal
                    used by <b>100 k+ merchants</b> to accept card, bank transfer, and USSD payments.
                    Led adoption of React from a jQuery baseline.
                  </p>
                </div>
                <div>
                  <div className="stack">
                    <span className="t">React</span>
                    <span className="t">JavaScript</span>
                    <span className="t">REST</span>
                    <span className="t">Webpack</span>
                  </div>
                  <div className="metric">
                    <span className="bar" />
                    100 k+ merchants onboarded
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PRODUCTS ─────────────────────────────────── */}
        <section className="block" id="products">
          <div className="wrap">
            <div className="section-head">
              <h2>Products</h2>
              <span className="note">Side projects built to scratch my own itch.</span>
            </div>
            <div className="product-grid">

              <a className="product-card reveal" href="#" aria-label="PayKit — Open source checkout UI">
                <span className="ghost" aria-hidden="true">P</span>
                <div className="pc-top">
                  <span className="chip live">Open source</span>
                  <span className="role">Creator &amp; maintainer</span>
                </div>
                <h3>PayKit</h3>
                <p className="pc-desc">
                  A drop-in React checkout component built for African payment providers. Supports
                  card, bank transfer, USSD, and mobile money. Zero opinions on styling — bring your
                  own design tokens.
                </p>
                <div className="pc-foot">
                  <div className="stack">
                    <span className="t">React</span>
                    <span className="t">TypeScript</span>
                    <span className="t">Rollup</span>
                  </div>
                  <span className="pc-link">
                    View on GitHub <span className="arrow" aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>

              <div className="product-card reveal">
                <span className="ghost" aria-hidden="true">F</span>
                <div className="pc-top">
                  <span className="chip shipped">Internal</span>
                  <span className="role">Lead engineer</span>
                </div>
                <h3>FlowLens</h3>
                <p className="pc-desc">
                  A real-time transaction analytics dashboard built for ops teams to monitor payment
                  health, spot anomalies, and drill into failure chains — all without touching SQL.
                </p>
                <div className="pc-foot">
                  <div className="stack">
                    <span className="t">Next.js</span>
                    <span className="t">Recharts</span>
                    <span className="t">GraphQL</span>
                  </div>
                  <span className="pc-link muted">
                    Private repo <span className="arrow" aria-hidden="true">↗</span>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── STACK ────────────────────────────────────── */}
        <section className="block" id="stack">
          <div className="wrap">
            <div className="section-head">
              <h2>Tech Stack</h2>
              <span className="note">Tools I reach for in production.</span>
            </div>
            <div className="stack-grid reveal">
              <div className="stack-cell">
                <div className="ct">Frameworks <span className="n">01</span></div>
                <div className="items">
                  <span>React</span>
                  <span>Angular</span>
                  <span>Next.js</span>
                  <span>Vite</span>
                  <span>Remix</span>
                </div>
              </div>
              <div className="stack-cell">
                <div className="ct">Languages &amp; Styling <span className="n">02</span></div>
                <div className="items">
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>CSS / SCSS</span>
                  <span>HTML</span>
                  <span>GraphQL</span>
                </div>
              </div>
              <div className="stack-cell">
                <div className="ct">State &amp; Data <span className="n">03</span></div>
                <div className="items">
                  <span>Zustand</span>
                  <span>Redux</span>
                  <span>NgRx</span>
                  <span>React Query</span>
                  <span>SWR</span>
                </div>
              </div>
              <div className="stack-cell">
                <div className="ct">Infrastructure <span className="n">04</span></div>
                <div className="items">
                  <span>Vercel</span>
                  <span>AWS</span>
                  <span>Docker</span>
                  <span>GitHub Actions</span>
                  <span>Nx</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMMUNITY ────────────────────────────────── */}
        <section className="block" id="community">
          <div className="wrap">
            <div className="section-head">
              <h2>Community</h2>
              <span className="note">Giving back to the Lagos tech scene.</span>
            </div>
            <div className="comm-grid">

              <div className="comm-card reveal">
                <span className="big" aria-hidden="true">M</span>
                <div className="k">Mentoring</div>
                <h4>Lagos Frontend Collective</h4>
                <p>
                  Weekly office hours for junior engineers breaking into fintech. 30+ engineers
                  mentored, 18 placed in full-time roles at product companies.
                </p>
              </div>

              <div className="comm-card reveal">
                <span className="big" aria-hidden="true">W</span>
                <div className="k">Writing</div>
                <h4>Engineering Blog</h4>
                <p>
                  Deep-dives on frontend performance in payment flows, accessibility in fintech
                  UIs, and building design systems that scale across African markets.
                </p>
              </div>

              <div className="comm-card reveal">
                <span className="big" aria-hidden="true">S</span>
                <div className="k">Speaking</div>
                <h4>DevFest Lagos · JSConf Africa</h4>
                <p>
                  Talks on real-time UI architecture, WebSocket patterns in financial apps, and
                  bridging the design-to-engineering gap in fast-moving product teams.
                </p>
              </div>

              <div className="comm-card reveal">
                <span className="big" aria-hidden="true">O</span>
                <div className="k">Open Source</div>
                <h4>Contributor &amp; Maintainer</h4>
                <p>
                  Active contributor to React-based component libraries. Maintainer of PayKit — a
                  checkout UI library purpose-built for African payment providers.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────── */}
        <section className="block contact" id="contact">
          <div className="wrap">
            <div className="eyebrow reveal">
              <span className="idx">Let&apos;s build</span>
            </div>
            <div className="big-cta reveal">
              <a href="mailto:emmanueliyanu2012@gmail.com">
                emmanueliyanu2012
                <br />
                @gmail.com
              </a>
            </div>
            <div className="contact-rows reveal">
              <a href="https://github.com/emmanueliyanu21" target="_blank" rel="noopener noreferrer">
                <span className="d" aria-hidden="true" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/emmanuel-oladejo" target="_blank" rel="noopener noreferrer">
                <span className="d" aria-hidden="true" />
                LinkedIn
              </a>
              <a href="https://twitter.com/emmanueliyanu21" target="_blank" rel="noopener noreferrer">
                <span className="d" aria-hidden="true" />
                Twitter
              </a>
              <a href="mailto:emmanueliyanu2012@gmail.com">
                <span className="d" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer>
        <div className="wrap foot">
          <p className="m">
            <b>Emmanuel Oladejo</b> — Senior Frontend Engineer, Lagos, NG
          </p>
          <p className="m">Built with Next.js · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  )
}
