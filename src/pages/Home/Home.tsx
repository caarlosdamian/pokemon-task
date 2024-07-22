import { useEffect, useState } from 'react';
import { ListItem } from '../../components/ListItem/ListItem';
import { getAllPokemons } from '../../services/getAllPokemons';
import { PokemonI } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setData } from '../../redux/dataSlice';

export const Home = () => {
  // const [pokemonData, setPokemonData] = useState([]);
  const dispatch = useAppDispatch();
  const pokemonData = useAppSelector((state) => state.data);
  useEffect(() => {
    getAllPokemons().then((res) => dispatch(setData(res)));
  }, [dispatch]);

  const handleControlChange = async (type: 'next' | 'prev') => {
    if (type === 'next') {
      const response = await getAllPokemons(pokemonData.next);
      dispatch(setData(response));
      return;
    }
    const response = await getAllPokemons(pokemonData.previous);
    dispatch(setData(response));
    return;
  };

  return (
    <div className="left">
      <ul className="list">
        {pokemonData?.results?.map(({ name, url }: PokemonI) => (
          <ListItem key={url} name={name} />
        ))}
      </ul>
      <div className="controls">
        {pokemonData?.previous && (
          <button onClick={() => handleControlChange('prev')}>prev</button>
        )}
        <button onClick={() => handleControlChange('next')}>next</button>
      </div>
    </div>
  );
};
