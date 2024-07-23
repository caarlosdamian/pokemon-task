/* eslint-disable @typescript-eslint/ban-ts-comment */
import { act, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import { beforeEach } from 'vitest';

import { initialState } from '../../redux/slices/detailsSlice';
import { PokemonDetailsI } from '../../types';
import { Details } from './Details';
import { getPokemonDetails } from '../../services/getPokemonDetails';

const mockState = {
  abilities: [
    {
      ability: {
        name: 'overgrow',
      },
    },
  ],
  weight: 69,
  stats: [
    {
      base_stat: 45,
      stat: {
        name: 'hp',
      },
    },
  ],
  types: [
    {
      type: {
        name: 'grass',
      },
    },
  ],
  id: 1,
  height: 7,
  name: 'bulbasaur',
};
vi.mock('../../services/getPokemonDetails', () => ({
  getPokemonDetails: vi.fn(),
}));

describe('Details Component', () => {
  beforeEach(() => {
    // @ts-ignore
    (getPokemonDetails as vi.Mock).mockResolvedValue(mockState);
  });

  it('should render correct stats after loading', async () => {
    act(() => {
      renderWithProviders(<Details />, {
        preloadedState: {
          details: { ...initialState, ...mockState } as PokemonDetailsI,
        },
      });
    });

    await waitFor(() => {
      expect(screen.queryByText('Loading....')).not.toBeInTheDocument();
    });

    const name = screen.getByTestId('name-value').textContent;
    expect(name).toBe('Bulbasaur');

    const height = screen.getByTestId('height-value').textContent;
    expect(height).toBe('7');

    const weight = screen.getByTestId('weight-value').textContent;
    expect(weight).toBe('69');

    const hp = screen.getByTestId('hp-value').textContent;
    expect(hp).toBe('45');
  });
});
