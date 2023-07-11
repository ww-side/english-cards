import { FC } from 'react';
import Button from '../../common/Button';
import SwitchPageBtn from '../../common/SwitchPageBtn';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
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
