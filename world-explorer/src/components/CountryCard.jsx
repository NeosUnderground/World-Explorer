import styles from './CountryCard.module.css';

export default function CountryCard({ country }) {
  return (
    <div className={styles.card}>
      <img src={country.flags.png} alt={country.flags.alt} className={styles.flag} />
      <div className={styles.title}>{country.name.common}</div>
      <div>Population: {country.population.toLocaleString()}</div>
      <div>Region: {country.region}</div>
      <div>Capital: {country.capital?.[0]}</div>
    </div>
  );
}