import { render, screen } from '@testing-library/react';
import { DetailItem } from './DetailItem';

it('Testing DetailItem Component', () => {
  render(<DetailItem label="Testing" value={33} />);
  const value = screen.getByTestId(/value/i).textContent;
  const label = screen.getByTestId(/label/i).textContent;
  expect(value).toBe('33');
  expect(label).toBe('Testing');
});
