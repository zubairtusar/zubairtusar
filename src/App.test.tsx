import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const nameElement = screen.getByText(/Zubair Rahman Tusar/i);
  expect(nameElement).toBeInTheDocument();
});