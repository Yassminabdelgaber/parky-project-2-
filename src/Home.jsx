import { useState } from "react";
import { useOutletContext } from "react-router-dom";

// ===== روابط قابلة للتعديل =====
const APP_STORE_URL = "https://apps.apple.com/"; // ضعي رابط التطبيق الحقيقي
const PLAY_STORE_URL = "https://play.google.com/store"; // ضعي رابط التطبيق الحقيقي

const miniIcons = ["📍", "▦", "💳", "👥", "🔔", "📊"];
const barColors = ["#2f6fe8", "#ffb400", "#0b1a5c"];
const spots = [false, true, false, false, false, true, false, false]; // true = مشغول

const joinFields = [
  { name: "fullName", type: "text" },
  { name: "phone", type: "tel" },
  { name: "email", type: "email" },
  { name: "garageName", type: "text" },
  { name: "address", type: "text", full: true },
  { name: "spots", type: "number" },
];

const guardFields = [
  { name: "ownerName", type: "text" },
  { name: "ownerPhone", type: "tel" },
  { name: "ownerEmail", type: "email" },
  { name: "garageName", type: "text" },
  { name: "guardName", type: "text", full: true },
  { name: "guardPhone", type: "tel" },
  { name: "guardId", type: "text", maxLength: 14, pattern: "[0-9]{14}" },
  { name: "shift", type: "select" },
  { name: "startDate", type: "date" },
];

// رمز QR تجريبي للمعاينة — استبدليه بصورة QR حقيقية (<img src="/qr.png" />)
const QR_N = 25;
const QR_PATH = (() => {
  let seed = 7;
  const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  const origins = [[0, 0], [0, QR_N - 7], [QR_N - 7, 0]];
  let d = "";
  for (let r = 0; r < QR_N; r++) {
    for (let c = 0; c < QR_N; c++) {
      let on = rnd() > 0.5;
      for (const [or, oc] of origins) {
        const rr = r - or, cc = c - oc;
        if (rr >= -1 && rr <= 7 && cc >= -1 && cc <= 7) {
          if (rr < 0 || rr > 6 || cc < 0 || cc > 6) on = false;
          else {
            const dist = Math.max(Math.abs(rr - 3), Math.abs(cc - 3));
            on = dist === 3 || dist <= 1;
          }
        }
      }
      if (on) d += `M${c} ${r}h1v1h-1z`;
    }
  }
  return d;
})();


export default function Home() {
  const { lang, t } = useOutletContext();

  const [form, setForm] = useState({});
  const [sent, setSent] = useState(false);
  const [guardForm, setGuardForm] = useState({});
  const [guardSent, setGuardSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partner request:", form); // اربطيه هنا بالـ API بتاعك
    setSent(true);
  };

  const handleGuardChange = (e) =>
    setGuardForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleGuardSubmit = (e) => {
    e.preventDefault();
    console.log("Guard request:", guardForm); // اربطيه هنا بالـ API بتاعك
    setGuardSent(true);
  };

  return (
    <>
         {/* About */}
      <section className="how-section" id="about">
        <div className="section-heading">
          <h2>{t.about.title}</h2>
          <p>{t.about.lead}</p>
        </div>

        {/* ضعي صورتك في public/garage-gate.jpg وهتظهر هنا تلقائي */}
        <div className="scene"></div>

        <div className="steps-grid">
          {t.about.steps.map((s) => (
            <div className="step-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <p className="how-note">{t.about.note}</p>
      </section>



      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-bar"></div>
          <span className="hero-label">{t.hero.label}</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.text}</p>
          <div className="hero-buttons">
            <a href="#join" className="primary-btn">{t.hero.join}</a>
            <a href="#features" className="secondary-btn">{t.hero.explore}</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dash-card">
            <div className="dash-head">
              <h3>{t.hero.dashTitle}</h3>
              <span className="live-status">{t.hero.live}</span>
            </div>
            <div className="dash-stats">
              <div><strong>75%</strong><small>{t.hero.occupancy}</small></div>
              <div><strong>18</strong><small>{t.hero.available}</small></div>
              <div><strong>24</strong><small>{t.hero.total}</small></div>
            </div>
            <div className="dash-spots">
              {spots.map((busy, i) => (
                <i key={i} className={busy ? "busy" : ""}></i>
              ))}
            </div>
          </div>
          <div className="dash-note">{t.hero.note}</div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section" id="benefits">
        {t.benefits.map((b) => (
          <div className="benefit-item" key={b.title}>
            <h2>{b.title}</h2>
            <p>{b.text}</p>
          </div>
        ))}
      </section>

     

      {/* Features (dark) */}
      <section className="features-dark" id="features">
        <div className="section-heading">
          <span className="pill-label">{t.features.pill}</span>
          <h2>{t.features.title}</h2>
          <p>{t.features.lead}</p>
        </div>

        <div className="admin-card">
          <div className="admin-text">
            <span className="admin-tag">{t.features.adminTag}</span>
            <h3>{t.features.adminTitle}</h3>
            <p>{t.features.adminText}</p>
            <ul className="admin-checks">
              {t.features.adminChecks.map((c) => (
                <li key={c}>
                  <span className="tick">✓</span>
                  {c}
                </li>
              ))}
            </ul>
            <a href="#guard" className="dark-btn">{t.features.adminBtn}</a>
          </div>

          <div className="guard-mock">
            <div className="guard-head">
              <span className="guard-avatar">{lang === "ar" ? "أ" : "A"}</span>
              <div>
                <strong>{t.features.guardName}</strong>
                <small>{t.features.guardRole}</small>
              </div>
              <span className="guard-badge">{t.features.inService}</span>
            </div>
            <div className="guard-stats">
              <div><strong>24</strong><small>{t.features.entriesToday}</small></div>
              <div><strong className="blue">18</strong><small>{t.features.exitsToday}</small></div>
              <div><strong className="brown">75%</strong><small>{t.features.occupancy}</small></div>
            </div>
            <div className="guard-log"><span>{t.features.log1}</span><small>09:42</small></div>
            <div className="guard-log"><span>{t.features.log2}</span><small>09:15</small></div>
            <button type="button" className="guard-qr">{t.features.scanQr}</button>
          </div>
        </div>

        <div className="mini-grid">
          {t.features.mini.map((f, i) => (
            <div className="mini-card" key={f.title}>
              <span className="mini-icon">{miniIcons[i]}</span>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Growth (light) */}
      <section className="growth-section" id="services">
        <div className="section-heading">
          <h2>{t.growth.title}</h2>
          <p>{t.growth.sub}</p>
        </div>
        <div className="growth-grid">
          {t.growth.items.map((g, i) => (
            <div className="growth-card" key={g.title} style={{ "--bar": barColors[i] }}>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Parky */}
      <section className="why-section">
        <div className="section-heading">
          <h2>{t.why.title}</h2>
          <p>{t.why.sub}</p>
        </div>
        <div className="growth-grid">
          {t.why.items.map((r, i) => (
            <div className="growth-card" key={r.title} style={{ "--bar": barColors[i] }}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 steps */}
      <section className="start-section" id="how">
        <div className="section-heading">
          <h2>{t.start.title}</h2>
        </div>
        <div className="start-grid">
          {t.start.steps.map((st, i) => (
            <div className="start-card" key={st.title}>
              <span className="start-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{st.title}</h3>
              <p>{st.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech */}
      <section className="tech-section">
        <div className="section-heading">
          <h2>{t.tech.title}</h2>
          <p>{t.tech.lead}</p>
        </div>
        <div className="tech-grid">
          {t.tech.items.map((x) => (
            <div className="tech-card" key={x.title}>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join form */}
      <section className="join-section" id="join">
        <div className="join-text">
          <h2>{t.join.title}</h2>
          <p>{t.join.text}</p>
          <small>{t.join.note}</small>
        </div>

        <div className="join-card">
          <h3>{t.join.formTitle}</h3>
          <p className="join-sub">{t.join.formSub}</p>

          {sent ? (
            <div className="join-done">{t.join.done}</div>
          ) : (
            <form className="join-form" onSubmit={handleSubmit}>
              {joinFields.map((f) => (
                <label key={f.name} className={f.full ? "field full" : "field"}>
                  <span>{t.join.fields[f.name].label}</span>
                  <input
                    name={f.name}
                    type={f.type}
                    placeholder={t.join.fields[f.name].ph}
                    value={form[f.name] || ""}
                    onChange={handleChange}
                    required
                  />
                </label>
              ))}

              <label className="field">
                <span>{t.join.typeLabel}</span>
                <select name="type" value={form.type || ""} onChange={handleChange} required>
                  <option value="" disabled>{t.join.typePh}</option>
                  {t.join.typeOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </label>

              <button type="submit" className="join-submit">{t.join.submit}</button>
              <small className="join-foot">{t.join.foot}</small>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <h2>{t.faq.title}</h2>
        <div className="faq-list">
          {t.faq.items.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Download app */}
      <section className="app-section" id="app">
        <div className="section-heading">
          <h2>{t.app.title}</h2>
          <p>{t.app.sub}</p>
        </div>

        <div className="app-card">
          <div className="app-info">
            <h3>{t.app.cardTitle}</h3>
            <p>{t.app.cardText}</p>
            <ul className="app-checks">
              {t.app.checks.map((c) => (
                <li key={c}>
                  <span className="app-tick">✓</span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="store-btns">
              <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="store-btn">{t.app.ios}</a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className="store-btn">{t.app.android}</a>
            </div>
          </div>

          <div className="qr-card">
            <h4>{t.app.qrTitle}</h4>
            <small>{t.app.qrSub}</small>
            <svg className="qr-svg" viewBox={`-1 -1 ${QR_N + 2} ${QR_N + 2}`} role="img" aria-label="QR">
              <rect x="-1" y="-1" width={QR_N + 2} height={QR_N + 2} fill="#fff" />
              <path d={QR_PATH} fill="#000" />
            </svg>
            <small>{t.app.qrDemo}</small>
            <span className="qr-link">{t.app.qrLink}</span>
          </div>
        </div>

        <p className="app-note">{t.app.note}</p>
      </section>

      {/* Guard request - page header */}
      <section className="page-head" id="guard">
        <div className="crumbs">
          <a href="#home">{t.guard.crumbHome}</a>
          <span>/</span>
          <em>{t.guard.title}</em>
        </div>
        <h2>{t.guard.title}</h2>
        <span className="head-pill">{t.guard.pill}</span>
      </section>

      {/* Guard request - form */}
      <section className="join-section">
        <div className="join-text">
          <h2>{t.guard.heading}</h2>
          <p>{t.guard.text}</p>
          <small>{t.guard.note}</small>
        </div>

        <div className="join-card">
          <h3>{t.guard.title}</h3>
          <p className="join-sub">{t.guard.formSub}</p>

          {guardSent ? (
            <div className="join-done">{t.guard.done}</div>
          ) : (
            <form className="join-form" onSubmit={handleGuardSubmit}>
              {guardFields.map((f) => (
                <label key={f.name} className={f.full ? "field full" : "field"}>
                  <span>{t.guard.fields[f.name].label}</span>
                  {f.type === "select" ? (
                    <select
                      name={f.name}
                      value={guardForm[f.name] || ""}
                      onChange={handleGuardChange}
                      required
                    >
                      <option value="" disabled>{t.guard.fields[f.name].ph}</option>
                      {t.guard.shiftOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      name={f.name}
                      type={f.type}
                      placeholder={t.guard.fields[f.name].ph}
                      maxLength={f.maxLength}
                      pattern={f.pattern}
                      value={guardForm[f.name] || ""}
                      onChange={handleGuardChange}
                      required
                    />
                  )}
                </label>
              ))}
              <button type="submit" className="join-submit">{t.guard.submit}</button>
              <small className="join-foot">{t.guard.foot}</small>
            </form>
          )}
        </div>
      </section>

    </>
  );
}
