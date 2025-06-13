import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import CountryCard from '../components/CountryCard';
import { fetchAllCountries } from '../utils/api';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllCountries()
      .then(data => setCountries(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.grid}>
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}
