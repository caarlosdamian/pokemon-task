import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="page">
      <div className="right">
        <img src="/logo.png" alt="" />
      </div>
      <Outlet />
    </div>
  );
};
