import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <main>
        <section className={styles.hero}>
          <div className={styles.inner}>
            <h1 className={styles.title}>Insider Documentation</h1>
            <p className={styles.subtitle}>
              A clear operating and maintenance guide for Mackey Hall livestream,
              camera, computer, projector, sound, and building-control workflows.
            </p>
            <div className={styles.actions}>
              <Link className={`${styles.button} ${styles.primary}`} to="/docs/">
                Open Docs
              </Link>
              <Link className={styles.button} to="pathname:///insider-documentation.pdf">
                Download PDF
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.below} aria-label="Quick links">
          <div className={styles.quickLinks}>
            <Link className={styles.quickLink} to="/docs/docs/general">
              <strong>Service Workflow</strong>
              <p>Sunday setup, livestream, service operation, shutdown, and Stream Deck controls.</p>
            </Link>
            <Link className={styles.quickLink} to="/docs/documentation/">
              <strong>Building Controls</strong>
              <p>Current guest-facing projector, rear TV, screen, audio, microphone, and input guides.</p>
            </Link>
            <Link className={styles.quickLink} to="/docs/docs/computer">
              <strong>Computer and Streaming</strong>
              <p>OBS, Proclaim, cameras, stream destinations, maintenance, and online systems.</p>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
