import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <img className={styles.logo} src="/img/WPC_logo.png" alt="" />
            <p className={styles.eyebrow}>Version 2026.05a</p>
            <h1>Insider Technology Documentation</h1>
            <p className={styles.lede}>
              A maintainable reference for running livestream, camera, computer,
              sound, online, and advanced technology workflows in Mackey Hall.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/2026.05a/">
                Open docs
              </Link>
              <Link className="button button--secondary button--lg" to="/manual-2026.05a.pdf">
                Download PDF
              </Link>
            </div>
          </div>
          <div className={styles.quickLinks} aria-label="Documentation sections">
            {[
              ['Service Instructions', '/docs/2026.05a/docs/general'],
              ['Computer', '/docs/2026.05a/docs/computer'],
              ['Cameras', '/docs/2026.05a/docs/cameras'],
              ['Online Applications', '/docs/2026.05a/docs/online'],
              ['Advanced Information', '/docs/2026.05a/docs/advanced']
            ].map(([label, to]) => (
              <Link className={styles.quickLink} to={to} key={to}>
                {label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
