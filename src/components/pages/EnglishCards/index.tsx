import { FC } from 'react';
import CreateCardField from '../../shared/CreateCardField/index.tsx';
import SearchCardField from '../../shared/SearchCardField/index.tsx';
import CardList from '../../shared/CardList/index.tsx';

const EnglishCards: FC = () => {
  return (
    <div className="flex flex-col items-center font-thin mt-4 bg-gray-100">
      <h1 className="text-3xl font-normal mb-2">Your cards</h1>
      <SearchCardField />
      <CreateCardField />
      <CardList />
    </div>
  );
};

export default EnglishCards;
