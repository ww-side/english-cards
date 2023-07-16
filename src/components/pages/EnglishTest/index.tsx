import { useEffect, useState } from 'react';
import ModalTestResult from '../../shared/ModalTestResult/index.tsx';
import Button from '../../common/Button/index.tsx';
import TestCard from '../../shared/TestCard/index.tsx';
import { useAppSelector } from '../../../hooks/redux.ts';
import { Card } from '../../../interfaces/cards.ts';

const EnglishTest = () => {
  const { cards } = useAppSelector(state => state.cards);
  const [randomCards, setRandomCards] = useState<Card[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateRandomCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    const selectedCards = shuffledCards.slice(0, 4);
    setRandomCards(selectedCards);
  };

  useEffect(() => {
    if (cards.length > 0) {
      generateRandomCards();
    }
  }, []);

  const handleSubmit = () => {
    let count = correctAnswers;
    const newIncorrectAnswers: string[] = [];

    randomCards.forEach(card => {
      const inputElement = document.getElementById(
        `input-${card.id}`
      ) as HTMLInputElement;
      if (
        inputElement.value.trim().toLowerCase() === card.translate.toLowerCase()
      ) {
        count++;
      } else {
        newIncorrectAnswers.push(`${card.title} - ${card.translate}`);
      }
      inputElement.value = '';
    });

    setCorrectAnswers(count);
    setIncorrectAnswers(newIncorrectAnswers);

    setIsModalOpen(true);
    generateRandomCards();
  };

  return (
    <div className="mx-auto">
      <h1 className="text-3xl text-center my-4">English Test</h1>
      {randomCards.length > 0 ? (
        randomCards.map(card => <TestCard key={card.id} card={card} />)
      ) : (
        <p className="text-center font-thin text-lg mx-3">
          No cards found. Add a couple of cards for testing
        </p>
      )}
      {randomCards.length > 0 && (
        <Button color="purple" onClick={handleSubmit}>
          Submit
        </Button>
      )}
      <ModalTestResult
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
      />
    </div>
  );
};

export default EnglishTest;
