import { render, screen } from '@testing-library/react';
import { Stat } from './Stat';

describe('stat component', () => {
  it('should render component with correct props', () => {
    render(<Stat name="testing" value={10} testid="testing" />);
    const value = screen.getByTestId('testing-value').textContent;
    expect(value).toBe('10');
  });
});
