import { FC } from 'react';

interface SwitchPageBtn {
  index: number;
  currentPage: number;
  handlePageClick: (pageNumber: number) => void;
}

const SwitchPageBtn: FC<SwitchPageBtn> = ({
  index,
  currentPage,
  handlePageClick,
}) => {
  return (
    <button
      key={index}
      className={`mx-1 bg-gray-200 hover:bg-purple-600 
      hover:text-white text-black py-2 px-4 transition 
      duration-300 ease-in-out rounded-xl 
      shadow-2xl 
      ${currentPage === index + 1 ? 'bg-purple-600 text-white' : ''}`}
      onClick={() => handlePageClick(index + 1)}
    >
      {index + 1}
    </button>
  );
};

export default SwitchPageBtn;
