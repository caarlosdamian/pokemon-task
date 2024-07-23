import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import { beforeEach } from 'vitest';
import { Home } from './Home';

const initState = {
  count: 1302,
  next: 'https://pokeapi.co/api/v2/pokemon/?offset=180&limit=20',
  previous: 'https://pokeapi.co/api/v2/pokemon/?offset=140&limit=20',
  results: [
    {
      name: 'sentret',
      url: 'https://pokeapi.co/api/v2/pokemon/161/',
    },
    {
      name: 'furret',
      url: 'https://pokeapi.co/api/v2/pokemon/162/',
    },
    {
      name: 'hoothoot',
      url: 'https://pokeapi.co/api/v2/pokemon/163/',
    },
    {
      name: 'noctowl',
      url: 'https://pokeapi.co/api/v2/pokemon/164/',
    },
  ],
};

describe('DetailItem Component', () => {
  beforeEach(() => {
    renderWithProviders(<Home />, {
      preloadedState: {
        data: initState,
      },
    });
  });

  it('it should render list with 4 items ', () => {
    const list = screen.getByTestId('list');
    expect(list.children.length).toBe(4);
  });
});
