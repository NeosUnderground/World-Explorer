import { useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import styles from './CountryDetails.module.css';

export default function CountryDetails({ country, imageUrl }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const [imageLoaded, setImageLoaded] = useState(false);
  const fav = isFavorite(country.cca3);

  const toggleFavorite = () => {
    fav ? removeFavorite(country.cca3) : addFavorite(country.cca3);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <h1>{country.name.common}</h1>
        <button
          className={`${styles.favorite} ${fav ? styles.active : ''}`}
          onClick={toggleFavorite}
          title={fav ? 'Unfavorite' : 'Favorite'}
        >
          ★
        </button>
      </div>

       <div className={styles.terrainHeaderWrapper}>
        {!imageLoaded && <div className={styles.loader}></div>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`${country.name.common} landscape`}
            className={`${styles.terrainHeader} ${!imageLoaded ? styles.hidden : ''}`}
            onLoad={() => setImageLoaded(true)}
          />
        )}
      </div>

      <div className={styles.contentRow}>
        <div className={styles.info}>
          <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {})[0]?.common}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
          <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
          <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
          <p><strong>Borders:</strong> {country.borders ? country.borders.join(', ') : 'None'}</p>
        </div>
        {imageUrl && (
          <img src={country.flags.svg} alt={country.name.common} className={styles.flag} />
        )}
      </div>
      
    </div>
  );
}
