import { screen } from '@testing-library/react';
import { List } from './List';
import { renderWithProviders } from '../../test/test-utils';

const items = [
  {
    name: 'kabutops',
    url: 'https://pokeapi.co/api/v2/pokemon/141/',
  },
  {
    name: 'aerodactyl',
    url: 'https://pokeapi.co/api/v2/pokemon/142/',
  },
];

describe('Testing List Component', () => {
  it('render a list of 2 items', () => {
    renderWithProviders(<List items={items} />);
    const list = screen.getByTestId('list');
    expect(list.children.length).toBe(2);
  });
});
