import { Outlet } from 'react-router-dom';

export const Root = () => {

  return (
    <main className="page">
      <aside className="side">
        <img src="/logo.png" alt="logo" />
      </aside>
      <Outlet />
    </main>
  );
};
