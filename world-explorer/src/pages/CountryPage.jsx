import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCountryImage } from '../utils/api';
import CountryDetails from '../components/CountryDetails';
import styles from './CountryPage.module.css';

export default function CountryPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await res.json();
        const countryData = data[0];
        setCountry(countryData);
        const image = await fetchCountryImage(countryData.name.common);
        setImageUrl(image);
      } catch (err) {
        console.log(err);
        setError('Failed to load country details.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [code]);

  if (loading) return <p className={styles.message}>Loading...</p>;
  if (error) return <p className={styles.message}>{error}</p>;

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>&larr; Back</button>
      {country && <CountryDetails country={country} imageUrl={imageUrl} />}
    </div>
  );
}
