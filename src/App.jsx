import { useEffect, useState } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import content from "./content";
import Home from "./Home";
import LegalPage from "./LegalPage";
import "./App.css";

// ===== عناصر ثابتة (مش بتتغير مع اللغة) =====
const navIds = ["home", "about", "features", "services", "how", "contact"];
const quickHrefs = ["/#home", "/#about", "/#features", "/#how", "/#faq"];
const serviceHrefs = ["/#services", "/#services", "/#features", "/#guard", "/#features"];
// سياسة الخصوصية والشروط لسه مفيش ليهم صفحات، فبترجع للرئيسية
const legalPaths = ["/", "/", "/cookies"];

const contactItems = [
  { icon: "📞", key: "phone", text: "+20 100 123 4567", href: "tel:+201001234567", ltr: true },
  { icon: "✉️", key: "email", text: "partners@parky.app", href: "mailto:partners@parky.app", ltr: true },
  { icon: "📍", key: "address", href: "https://maps.google.com/?q=Abbas+El+Akkad+Nasr+City+Cairo" },
  { icon: "🕒", key: "hours" },
];

const socials = [
  { label: "Instagram", text: "IG", href: "https://instagram.com/" },
  { label: "Facebook", text: "f", href: "https://facebook.com/" },
  { label: "X", text: "X", href: "https://x.com/" },
  { label: "LinkedIn", text: "in", href: "https://linkedin.com/" },
];

// اللوجو: كلمة Parky بخط عريض مائل + الخط الأصفر المنحني تحتها
function Logo({ light }) {
  return (
    <Link to="/" className={light ? "logo logo-light" : "logo"} aria-label="Parky">
      <span className="logo-word">Parky</span>
      <svg className="logo-swoosh" viewBox="0 0 120 20" preserveAspectRatio="none" aria-hidden="true">
        <path d="M2 19 C 25 9, 70 3, 117 4 C 75 6, 35 11, 2 19 Z" fill="#ffb400" />
      </svg>
    </Link>
  );
}

function getInitialLang() {
  try {
    const saved = localStorage.getItem("parky-lang");
    if (saved === "ar" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  return "ar";
}

// عند تغيير الصفحة: ينزل للسكشن لو في #، أو يرجع لأعلى الصفحة
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const timer = setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
        return () => clearTimeout(timer);
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Layout() {
  const [lang, setLang] = useState(getInitialLang);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const activeId = pathname === "/" ? active : "";
  const t = content[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";

  const toggleLang = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  // اللغة والاتجاه وعنوان الصفحة
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = t.pageTitle;
    try {
      localStorage.setItem("parky-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang, dir, t.pageTitle]);

  // تمييز الرابط الحالي في الـ navbar أثناء السكرول (في الصفحة الرئيسية بس)
  useEffect(() => {
    if (pathname !== "/") return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="website" dir={dir}>
      {/* Navbar */}
      <nav className="navbar">
        <Logo />

        <button
          type="button"
          className="menu-btn"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* في الموبايل بيتفتح ويتقفل بالزرار اللي فوق */}
        <div
          className={menuOpen ? "nav-panel open" : "nav-panel"}
          onClick={(e) => e.target.closest("a") && setMenuOpen(false)}
        >
          <div className="nav-links">
            {navIds.map((id, i) => (
              <Link key={id} to={`/#${id}`} className={activeId === id ? "active" : ""}>
                {t.nav[i]}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <button type="button" className="lang-btn" onClick={toggleLang} aria-label={t.langLabel}>
              {t.langBtn} 🌐
            </button>
            <Link to="/#app" className="outline-btn">{t.navDownload}</Link>
            <Link to="/#join" className="nav-button">{t.navPartner}</Link>
          </div>
        </div>
      </nav>

      {/* محتوى الصفحة الحالية */}
      <Outlet context={{ lang, t }} />

      {/* Footer */}
      <footer className="site-footer" id="contact">
        <div className="footer-cta">
          <div>
            <h3>{t.footer.ctaTitle}</h3>
            <p>{t.footer.ctaText}</p>
          </div>
          <Link to="/#join" className="nav-button">{t.footer.ctaBtn}</Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>{t.footer.brand}</p>
            <div className="socials">
              {socials.map((x) => (
                <a key={x.label} href={x.href} target="_blank" rel="noreferrer" aria-label={x.label}>
                  {x.text}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>{t.footer.quickTitle}</h4>
            <ul>
              {t.footer.quick.map((label, i) => (
                <li key={label}><Link to={quickHrefs[i]}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.servicesTitle}</h4>
            <ul>
              {t.footer.services.map((label, i) => (
                <li key={label}><Link to={serviceHrefs[i]}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.contactTitle}</h4>
            <ul className="contact-list">
              {contactItems.map((c) => {
                const text = c.text || t.footer[c.key];
                return (
                  <li key={c.key}>
                    <span className="contact-icon">{c.icon}</span>
                    {c.href ? (
                      <a href={c.href} dir={c.ltr ? "ltr" : undefined}>{text}</a>
                    ) : (
                      <span>{text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.footer.copyright}</span>
          <div className="legal">
            {t.footer.legal.map((l, i) => (
              <Link key={l} to={legalPaths[i]}>{l}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":slug" element={<LegalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
