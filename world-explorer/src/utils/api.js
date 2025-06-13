const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

console.log("Unsplash key:", import.meta.env.VITE_UNSPLASH_ACCESS_KEY);

export async function fetchAllCountries() {
  const fields = [
    'name',
    'flags',
    'population',
    'region',
    'capital',
    'cca3'
  ];
  const response = await fetch(`https://restcountries.com/v3.1/all?fields=${fields.join(',')}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch countries');
  }
  return response.json();
}


export async function fetchCountryImage(name) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    name + ' landscape'
  )}&client_id=${UNSPLASH_ACCESS_KEY}&orientation=landscape&per_page=1`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results?.[0]?.urls?.regular || null;
  } catch (err) {
    console.error('Error fetching Unsplash image:', err);
    return null;
  }
}
