import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} to="/">Home</Link>
        <Link className={`${styles.link} ${pathname === '/favorites' ? styles.active : ''}`} to="/favorites">Favorites</Link>
      </nav>
      <h1 className={styles.title}>World Explorer</h1>
    </header>
  );
}