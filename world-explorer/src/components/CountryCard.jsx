import React from 'react'; 
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import styles from './CountryCard.module.css';

export default function CountryCard({ country }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const fav = isFavorite(country.cca3);

  const toggleFavorite = (e) => {
    e.preventDefault();
    fav ? removeFavorite(country.cca3) : addFavorite(country.cca3);
  };

  return (
    <Link to={`/country/${country.cca3}`} className={styles.card}>
      <button
        className={`${styles.favorite} ${fav ? styles.active : ''}`}
        onClick={toggleFavorite}
        title={fav ? 'Unfavorite' : 'Favorite'}
      >
        ★
      </button>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className={styles.flag} />
      <div className={styles.header}>
        <h2 className={styles.title}>{country.name.common}</h2>
      </div>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
    </Link>
  );
}