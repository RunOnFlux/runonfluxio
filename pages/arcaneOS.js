import Head from 'next/head';
import ArcaneOSPage from '../components/arcaneOSPage/arcaneOSPage';
import { NavBar4 } from '../components/navbar/navbar4';
import styles from '../components/arcaneOSPage/index.module.css';

export default function Arcane() {
  const scrollToGuide = () => {
    const el = document.getElementById('arcane-install-guide');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Head>
        <title>Flux | ArcaneOS</title>
        <meta name="description" content="ArcaneOS - Next-gen secure operating system for Flux Cloud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar4 />

      {/* Hero Section */}
      <div className={styles.section1}>
        <div className="container">
          <h1>Flux <span>ArcaneOS</span></h1>
          <p>
            Built on Ubuntu 24.04, ArcaneOS brings secure, verifiable infrastructure to the Flux Cloud — designed for decentralization, privacy, and performance.
          </p>
          <div style={{ marginTop: '30px' }}>
            <button className={styles.btn2} onClick={scrollToGuide}>
              Jump to Install Guide
            </button>
          </div>
        </div>
      </div>

      <ArcaneOSPage />

      {/* Embedded Install Guide */}
      <div id="arcane-install-guide" className={styles.section2}>
        <div className="container">
          <h3>Flux Arcane Installation Guide</h3>
          <p>
            Below is the full installation guide. You can also{' '}
            <a href="/pdfs/flux-arcane-install-guide.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2B61D1' }}>
              open it in a new tab
            </a>.
          </p>
          <div style={{ marginTop: '30px', marginBottom: '80px' }}>
            <iframe
              src="/pdfs/flux-arcane-install-guide.pdf"
              width="100%"
              height="900px"
              style={{ border: '1px solid #ccc', borderRadius: '8px', }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
