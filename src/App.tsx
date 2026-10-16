const publications = [
  {
    number: "01",
    title:
      "Preoperative Radiotherapy and Local Recurrence in Grade 3 Soft Tissue Sarcoma: A Causal Bayesian Network Analysis",
    authors: "Andrea Valle, Bruno Fuchs, Mirko Birbaumer, Philip Heesen",
    journal: "Cancers · Volume 18 · Issue 20 · 3269",
    date: "2026",
    doi: "10.3390/cancers18203269",
    url: "https://www.mdpi.com/2072-6694/18/20/3269",
    abstract:
      "Background: Estimating the effect of preoperative radiotherapy in grade 3 (G3) soft tissue sarcoma (STS) is difficult because treatment reflects clinical risk. We estimated whether local recurrence risk among treated patients would differ under surgery alone. Methods: We retrospectively analyzed a multicentre registry of 151 surgically treated G3 patients without chemotherapy; 99 received preoperative radiotherapy and 52 underwent surgery alone. Propensity score weighting targeted the average treatment effect among treated patients (ATT). The primary weighted interventional Bayesian network (BN) adjusted for age, metastasis, tumor size, depth, body location, and whoops surgery. Logistic regression and BN conditioning and intervention were reference analyses. Differential follow-up was assessed using a weighted Aalen–Johansen analysis. Results: Local recurrence occurred in 31 patients (20.5%). Weighting reduced the maximum absolute standardized mean difference from 0.866 to 0.139. Median bootstrap ATT estimates were +3.3 percentage points for conventional logistic regression, +5.2 for weighted logistic regression, and +1.37 for the weighted interventional BN. At 1 year, the weighted Aalen–Johansen risk difference was +0.83 percentage points, with a wide 95% confidence interval spanning benefit and harm. Conclusions: The weighted interventional BN produced a near-null estimate, but modest benefit or harm remained plausible. Treatment effect estimates were sensitive to the assumed causal structure, limiting definitive conclusions about radiotherapy benefit. Given the modest sample, limited treatment overlap, differential follow-up, and residual confounding, causal interpretation should remain cautious. These findings do not support changing established indications for preoperative radiotherapy, but this framework provides a transparent approach to evaluating treatment strategies in rare cancers.",
  },
];

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      aria-hidden="true"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="identity" href="#top" aria-label="Andrea Valle, home">
          <span>AV</span>
        </a>
      </header>

      <main id="top">
        <section className="intro" aria-labelledby="intro-title">
          <p className="label">Andrea Valle</p>
          <h1 id="intro-title">
            Notes on how things
            <br />
            <em>move, fail & learn.</em>
          </h1>
          <div className="intro-bottom">
            <div
              className="links"
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
                paddingRight: 0,
                flexWrap: "wrap",
              }}
            >
              <span style={{ marginRight: "10px", color: "var(--muted)" }}>Connect</span>
              <a style={{ padding: "12px 14px", border: "1px solid var(--line)", display: "flex", alignItems: "center", gap: "8px" }} href="mailto:valle.andrea@outlook.it">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                Email <ArrowUpRightIcon className="link-arrow" />
              </a>
              <a style={{ padding: "12px 14px", border: "1px solid var(--line)", display: "flex", alignItems: "center", gap: "8px" }} href="https://github.com/valleandreaa" target="_blank" rel="noreferrer">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.84a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
                GitHub <ArrowUpRightIcon className="link-arrow" />
              </a>
              <a style={{ padding: "12px 14px", border: "1px solid var(--line)", display: "flex", alignItems: "center", gap: "8px" }} href="https://www.linkedin.com/in/andrea-valle-961471184/" target="_blank" rel="noreferrer">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.3 3.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM3.75 8.5h3.1V20h-3.1V8.5Zm5.1 0h2.97v1.57h.04c.41-.78 1.43-1.96 2.94-1.96 3.14 0 3.72 2.07 3.72 4.76V20h-3.1v-6.32c0-1.51-.03-3.45-2.1-3.45-2.11 0-2.43 1.65-2.43 3.34V20H8.85V8.5Z" />
                </svg>
                LinkedIn <ArrowUpRightIcon className="link-arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="publications" aria-labelledby="publications-title">
          <div className="writing-head">
            <div>
              <p className="label">Peer reviewed</p>
              <h2 id="publications-title">Publications</h2>
            </div>
            <span className="count">{String(publications.length).padStart(2, "0")} paper</span>
          </div>

          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.doi}>
                <div className="publication-index">
                  <span>{publication.number}</span>
                  <time>{publication.date}</time>
                </div>
                <div className="publication-content">
                  <a href={publication.url} target="_blank" rel="noreferrer">
                    <h3>{publication.title}</h3>
                    <ArrowUpRightIcon className="publication-arrow" />
                  </a>
                  <p className="authors">{publication.authors}</p>
                  <p className="citation">{publication.journal} · DOI {publication.doi}</p>
                  <details>
                    <summary>Read abstract</summary>
                    <p>{publication.abstract}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© Andrea Valle</p>
        <a href="#top">Back to top <ArrowUpIcon /></a>
      </footer>
    </div>
  );
}
