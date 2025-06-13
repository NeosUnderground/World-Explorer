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
