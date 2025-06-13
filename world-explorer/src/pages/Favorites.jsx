import { useFavorites } from '../context/FavoritesContext';
import { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import styles from './Favorites.module.css';

export default function Favorites() {
  const { favorites } = useFavorites();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (favorites.length === 0) {
      setCountries([]);
      return;
    }

    fetch(`https://restcountries.com/v3.1/alpha?codes=${favorites.join(',')}&fields=name,flags,population,region,capital,cca3`)
      .then(res => res.json())
      .then(setCountries);
  }, [favorites]);

  return (
    <div className={styles.favorites}>
      <h1>Your Favorite Countries</h1>
      {countries.length === 0 ? (
        <p>No favorites yet. Go explore and add some!</p>
      ) : (
        <div className={styles.grid}>
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}