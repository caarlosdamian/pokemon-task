import { useNavigate } from 'react-router-dom';
import { getPokemonDetails } from '../../services/getPokemonDetails';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { setData } from '../../redux/slices/detailsSlice';
import './ListItem.css';

interface Props {
  name: string;
}

export const ListItem = ({ name }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.details);

  const handleClick = async () => {
    const response = await getPokemonDetails(name);
    dispatch(setData(response));
  };

  const handleDoubleClick = () => {
    navigate(`/${name}`);
  };

  return (
    <li
      data-testid="listItem"
      className={`listItem ${state?.name === name ? 'active' : ''}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <span data-testid="pokemonName" className="listItem__name">
        {name}
      </span>
      <img className="listItem__pokeball" src="/pokeball.png" alt="pokeball" />
    </li>
  );
};
