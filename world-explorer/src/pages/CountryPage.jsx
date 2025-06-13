import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './CountryPage.module.css';

export default function CountryPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        setLoading(true);
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await response.json();
        setCountry(data[0]);
      } catch (err) {
          console.error('Error fetching country:', err);
          setError('Failed to load country details.');
      } finally {
          setLoading(false);
      }
    }
    fetchCountry();
  }, [code]);

  if (loading) return <p className={styles.message}>Loading...</p>;
  if (error) return <p className={styles.message}>{error}</p>;

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>&larr; Back</button>
      <div className={styles.details}>
        <img src={country.flags.svg} alt={country.name.common} className={styles.flag} />
        <div className={styles.info}>
          <h1>{country.name.common}</h1>
          <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {})[0]?.common}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
          <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
          <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
          <p><strong>Borders:</strong> {country.borders ? country.borders.join(', ') : 'None'}</p>
        </div>
      </div>
    </div>
  );
}