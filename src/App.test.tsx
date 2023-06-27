import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Busca y selecciona una ubicación/i);
  expect(linkElement).toBeInTheDocument();
});
