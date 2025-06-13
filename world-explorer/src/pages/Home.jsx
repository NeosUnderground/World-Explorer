import styles from './Home.module.css';
import CountryCard from '../components/CountryCard';

export default function Home() {
  return (
    <div className={styles.grid}>
      {/* placeholder cards */}
      {Array.from({ length: 12 }).map((_, idx) => (
        <CountryCard key={idx} country={{
          name: { common: 'Placeholder' },
          flags: { png: 'https://via.placeholder.com/150', alt: 'Placeholder flag' },
          population: 1000000,
          region: 'N/A',
          capital: ['Nowhere']
        }} />
      ))}
    </div>
  );
}
