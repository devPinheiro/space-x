import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders devPinheiro', () => {
  render(<App />);
  const linkElement = screen.getByText(/devPinheiro/i);
  expect(linkElement).toBeInTheDocument();
});
