import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import { ListItem } from './ListItem';
import { initialState } from '../../redux/slices/detailsSlice';
import { beforeEach } from 'vitest';

describe('DetailItem Component', () => {
  beforeEach(() => {
    renderWithProviders(<ListItem name="pikachu" />, {
      preloadedState: {
        details: {
          ...initialState,
          name: 'pikachu',
        },
      },
    });
  });

  it('it should render item with classname Active', () => {
    const listItem = screen.getByTestId(/listItem/i);
    expect(listItem.className).toBe('listItem active');
  });

  it('it should render item with name of pokemon', () => {
    const pokemonName = screen.getByTestId('pokemonName');
    expect(pokemonName.textContent).toBe('pikachu');
  });
});
