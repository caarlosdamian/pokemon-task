import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { getPokemonDetails } from '../../services/getPokemonDetails';
import { useNavigate, useParams } from 'react-router-dom';
import { setData } from '../../redux/slices/detailsSlice';
import { DetailItem } from '../../components/DetailItem/DetailItem';
import { Stat } from '../../components/Stat/Stat';
import './Details.css';

export const Details = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    height,
    id,
    types,
    weight,
    stats,
    abilities,
    name: pokemonName,
  } = useAppSelector((state) => state.details);
  const { name } = useParams<{ name: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);

      try {
        const response = await getPokemonDetails(name);
        dispatch(setData(response));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [dispatch, name]);

  return (
    <div className="content">
      {isLoading ? (
        <>Loading....</>
      ) : (
        <div className="details">
          <button className="details__btn" onClick={() => navigate('/')}>
            Go Back
          </button>
          <div className="type__container">
            <DetailItem
              className="type__details"
              label="Type"
              value={types ? (types[0]?.type?.name as string) : ''}
            />
          </div>
          <div className="main__details">
            <DetailItem
              className="main__detail"
              label="Number:"
              testid="number"
              value={id}
            />
            <DetailItem
              className="main__detail"
              label="Name:"
              value={pokemonName as string}
              testid="name"
            />
            <DetailItem
              className="main__detail"
              label="Height:"
              value={height}
              testid="height"
            />
            <DetailItem
              className="main__detail"
              label="Weight:"
              value={weight}
              testid="weight"
            />
          </div>
          <div className="secondary__details">
            <div className="stats">
              {stats.map((stat) => (
                <Stat
                  key={stat.stat.name}
                  name={stat.stat.name}
                  value={stat.base_stat}
                  testid={stat.stat.name}
                />
              ))}
            </div>
            <div className="abilities">
              <span>Abilities</span>
              {abilities?.map((item) => (
                <span key={item.ability.name}>{item.ability.name}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
