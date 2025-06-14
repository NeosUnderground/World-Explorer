/* eslint-env jest */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CountryDetails from '../components/CountryDetails';
import { FavoritesProvider } from '../context/FavoritesContext';


// Mock country data
const mockCountry = {
  cca3: 'USA',
  name: {
    common: 'United States',
    nativeName: {
      eng: { common: 'United States' }
    }
  },
  subregion: 'North America',
  timezones: ['UTC-05:00'],
  currencies: {
    USD: { name: 'United States dollar' }
  },
  languages: {
    eng: 'English'
  },
  borders: ['CAN', 'MEX'],
  flags: {
    svg: 'https://flagcdn.com/us.svg'
  }
};

describe('CountryDetails', () => {
  test('renders the country name and data', () => {
    render(
      <FavoritesProvider>
        <CountryDetails country={mockCountry} imageUrl="https://example.com/landscape.jpg" />
      </FavoritesProvider>
    );

    expect(screen.getByRole('heading', { name: 'United States' })).toBeInTheDocument();
    expect(screen.getByText(/Native Name:/)).toBeInTheDocument();
    expect(screen.getByAltText('United States')).toBeInTheDocument();
  });

  test('toggles favorite star', () => {
    render(
      <FavoritesProvider>
        <CountryDetails country={mockCountry} imageUrl="" />
      </FavoritesProvider>
    );

    const star = screen.getByRole('button', { name: /Favorite/i });
    expect(star).toBeInTheDocument();
    fireEvent.click(star);
    expect(star).toHaveClass('active');
  });

  test('displays loader before image loads', () => {
    render(
      <FavoritesProvider>
        <CountryDetails country={mockCountry} imageUrl="https://example.com/landscape.jpg" />
      </FavoritesProvider>
    );

    const loader = screen.getByRole('status', { hidden: true });
    expect(loader).toBeInTheDocument();
  });
});
