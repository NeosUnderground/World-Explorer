import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/world-explorer-logo.png" alt="World Explorer logo" className={styles.logoImage} />
        World Explorer
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <Link className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} to="/">Home</Link>
        <Link className={`${styles.link} ${pathname === '/favorites' ? styles.active : ''}`} to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}