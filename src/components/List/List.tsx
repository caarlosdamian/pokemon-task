import { PokemonUrl } from '../../types';
import { ListItem } from '../ListItem/ListItem';
import './List.css'

interface Props {
  items: PokemonUrl[];
}

export const List = ({ items }: Props) => {
  return (
    <ul className="list">
      {items?.map(({ name, url }: PokemonUrl) => (
        <ListItem key={url} name={name} />
      ))}
    </ul>
  );
};
