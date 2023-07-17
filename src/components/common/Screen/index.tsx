import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/index.tsx';

const Screen: FC = () => {
  useEffect(() => {
    document.body.classList.add('bg-gray-100');
  }, []);

  return (
    <div className="flex flex-col h-min bg-gray-100">
      <Header />
      <Outlet />
    </div>
  );
};

export default Screen;
