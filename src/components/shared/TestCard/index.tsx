import { FC } from 'react';
import CheckField from '../../common/CheckField/index.tsx';
import { Card } from '../../../interfaces/cards.ts';

interface TestCardProps {
  card: Card;
}

const TestCard: FC<TestCardProps> = ({ card }) => {
  return (
    <div className="flex items-center justify-between gap-3 shadow-md bg-white mb-3 rounded-2xl p-5">
      <p className="text-lg">{card.title}</p>
      <CheckField id={`input-${card.id}`} placeholder="Write a translation" />
    </div>
  );
};

export default TestCard;
