import './ListItem.css'

interface Props {
  name: string;
}

export const ListItem = ({ name }: Props) => {
  return (
    <li className='listItem'>
      <span className='listItem__name'>{name}</span>
      <img className='listItem__pokeball' src="/pokeball.png" alt="pokeball" />
    </li>
  );
};
