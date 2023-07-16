import { FC } from 'react';
import { nanoid as id } from '@reduxjs/toolkit';
import Button from '../../common/Button/index.tsx';
import SwitchPageBtn from '../../common/SwitchPageBtn/index.tsx';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useAppSelector } from '../../../hooks/redux.ts';

interface PaginationProps {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, onPageChange }) => {
  const currentPage = useAppSelector(state => state.pagination.currentPage);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="flex justify-center mb-3 text-white font-normal">
      <Button color="purple" onClick={() => handlePageClick(currentPage - 1)}>
        <AiOutlineLeft size={20} />
      </Button>
      {[...Array(totalPages)].map((_, index) => (
        <SwitchPageBtn
          key={id()}
          index={index}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      ))}
      <Button color="purple" onClick={() => handlePageClick(currentPage + 1)}>
        <AiOutlineRight size={20} />
      </Button>
    </div>
  );
};

export default Pagination;
