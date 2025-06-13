import { useState, useEffect, useCallback } from 'react';
import CountryCard from '../components/CountryCard';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import styles from './Home.module.css';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [index, setIndex] = useState(20);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3')
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sorted);
      });
  }, []);

  const loadMore = useCallback(() => {
    setIndex(prev => prev + 20);
  }, []);

  useInfiniteScroll(loadMore);

  const filtered = countries.filter(c => {
    const matchSearch = c.name.common.toLowerCase().includes(search.toLowerCase());
    const matchRegion = region ? c.region === region : true;
    return matchSearch && matchRegion;
  });

  const visible = (search || region) ? filtered : filtered.slice(0, index);

  const uniqueRegions = [...new Set(countries.map(c => c.region))].filter(Boolean).sort();

  return (
    <div className={styles.home}>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search countries..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setIndex(20);
          }}
          className={styles.search}
        />
        <select
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            setIndex(20);
          }}
          className={styles.select}
        >
          <option value="">All Regions</option>
          {uniqueRegions.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <div className={styles.grid}>
        {visible.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}
