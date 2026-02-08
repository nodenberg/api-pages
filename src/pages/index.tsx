import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomePageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className={styles.gridBackdrop} aria-hidden="true" />
      <div className={styles.heroInner}>
        <p className={styles.kicker}>NODENBERG API</p>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.actions}>
          <Link className={styles.primaryCta} to="/docs/intro">
            Open Documentation
          </Link>
          <Link className={styles.secondaryCta} to="/docs/reference/API">
            Full API Source Copy
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomeHighlights() {
  return (
    <section className={styles.highlights}>
      <article className={styles.card}>
        <h2>Authentication First</h2>
        <p>
          Every endpoint except <code>GET /health</code> requires
          <code> X-API-Key</code>. Validate auth setup before integration.
        </p>
      </article>
      <article className={styles.card}>
        <h2>Template Pipeline</h2>
        <p>
          Inspect placeholders, validate templates, and generate Excel/PDF using
          base64 payloads.
        </p>
      </article>
      <article className={styles.card}>
        <h2>Reference Integrity</h2>
        <p>
          The source API markdown is copied without modification so implementation
          details remain traceable.
        </p>
      </article>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Nodenberg API Documentation"
      description="Static documentation site for the Nodenberg API.">
      <HomePageHeader />
      <main className={styles.main}>
        <HomeHighlights />
      </main>
    </Layout>
  );
}
