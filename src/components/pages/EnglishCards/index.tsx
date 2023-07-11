import CreateCardField from '../../shared/CreateCardField';
import { FC } from 'react';
import SearchCardField from '../../shared/SearchCardField';
import CardList from '../../shared/CardList';

const EnglishCards: FC = () => {
  return (
    <div className="flex flex-col items-center font-thin mt-4 bg-gray-100">
      <h1 className="text-3xl font-normal mb-4">Your cards</h1>
      <SearchCardField />
      <CreateCardField />
      <CardList />
    </div>
  );
};

export default EnglishCards;
