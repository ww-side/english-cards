import { FC } from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';

const Screen: FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <Outlet />
    </div>
  );
};

export default Screen;
