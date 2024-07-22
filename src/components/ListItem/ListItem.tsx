import './ListItem.css'

interface Props {
  name: string;
}

export const ListItem = ({ name }: Props) => {
  return (
    <li>
      <span className='name'>{name}</span>
      <img className='pokeball' src="/pokeball.png" alt="pokeball" />
    </li>
  );
};
