import React from 'react';
import { render, screen } from '@testing-library/react';
import App1 from './App';

test('renders learn react link', () => {
  render(<App1 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
