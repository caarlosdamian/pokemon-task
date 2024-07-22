import { useEffect } from 'react';
import { getAllPokemons } from '../../services/getAllPokemons';
import { setData } from '../../redux/slices/dataSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { ListResponseI, PokemonUrl } from '../../types';
import { List } from '../../components/List/List';

export const Home = () => {
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
    <section className="content" >
      <List
        items={pokemonData.results as ListResponseI<PokemonUrl>['results']}
      />
      <div className="controls">
        {pokemonData?.previous && (
          <button onClick={() => handleControlChange('prev')}>prev</button>
        )}
        <button onClick={() => handleControlChange('next')}>next</button>
      </div>
    </section>
  );
};
