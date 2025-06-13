import { Link } from 'react-router-dom';
import styles from './CountryCard.module.css';

export default function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.cca3}`} className={styles.card}>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className={styles.flag} />
      <h2 className={styles.title}>{country.name.common}</h2>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
    </Link>
  );
}
