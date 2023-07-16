import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/index.tsx';

const Screen: FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <Outlet />
    </div>
  );
};

export default Screen;
