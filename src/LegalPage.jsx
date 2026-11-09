import { Link, Navigate, useOutletContext, useParams } from "react-router-dom";

// صفحة قانونية عامة: بتقرا المحتوى من content.js حسب الرابط (مثلًا /cookies)
export default function LegalPage() {
  const { slug } = useParams();
  const { t } = useOutletContext();
  const page = t.legal.pages[slug];

  if (!page) return <Navigate to="/" replace />;

  return (
    <>
      <section className="page-head">
        <div className="crumbs">
          <Link to="/">{t.legal.crumbHome}</Link>
          <span>/</span>
          <em>{page.title}</em>
        </div>
        <h2>{page.title}</h2>
        <span className="head-pill">{page.updated}</span>
      </section>

      <section className="legal-section">
        <div className="legal-wrap">
          <aside className="legal-side">
            <div className="toc-card">
              <h4>{t.legal.tocTitle}</h4>
              <ol>
                {page.sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#sec-${i + 1}`}>{i + 1}. {s.title}</a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="help-card">
              <h4>{t.legal.helpTitle}</h4>
              <p>{t.legal.helpText}</p>
              <a href="mailto:support@parky.app">support@parky.app</a>
            </div>
          </aside>

          <article className="legal-card">
            <p className="legal-intro">{page.intro}</p>

            {page.sections.map((s, i) => (
              <section className="legal-block" id={`sec-${i + 1}`} key={s.title}>
                <h3>
                  <span className="num">{i + 1}</span>
                  {s.title}
                </h3>
                {s.text && <p>{s.text}</p>}
                {s.lead && <p>{s.lead}</p>}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
