import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>🚀 React SSR Boilerplate</h1>
        <p style={styles.subtitle}>
          Production-ready Server-Side Rendering setup built from scratch without Next.js.
        </p>

        <div style={styles.buttons}>
          <Link to="/about" style={styles.primaryBtn}>
            Explore More
          </Link>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.secondaryBtn}
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div style={styles.features}>
        <Feature title="⚡ SSR Enabled" desc="Server-side rendering with React 18 streaming." />
        <Feature title="🧠 TypeScript" desc="Fully typed setup for scalable apps." />
        <Feature title="🔥 Routing" desc="React Router SSR integration." />
        <Feature title="📦 Webpack" desc="Custom client & server bundling." />
      </div>

      <footer style={styles.footer}>
        Built by Lalit Patware
      </footer>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '40px',
    textAlign: 'center',
  },
  hero: {
    marginBottom: '50px',
  },
  title: {
    fontSize: '42px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  primaryBtn: {
    padding: '10px 20px',
    background: '#0070f3',
    color: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
  },
  secondaryBtn: {
    padding: '10px 20px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    textDecoration: 'none',
    color: '#333',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '40px',
  },
  card: {
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  footer: {
    marginTop: '60px',
    fontSize: '14px',
    color: '#888',
  },
};