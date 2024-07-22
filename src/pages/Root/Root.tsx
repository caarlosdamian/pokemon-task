import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hook';

export const Root = () => {
  const { sprites } = useAppSelector((state) => state.details);
  return (
    <main className="page">
      <aside className="side">
        <img src="/logo.png" alt="logo" />
        <img
          className="side_pokemon"
          src={
            sprites
              ? sprites.front_default
              : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
          }
          alt="logo"
        />
      </aside>
      <Outlet />
    </main>
  );
};
