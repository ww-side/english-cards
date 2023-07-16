import { FC } from 'react';
import Footer from '../../common/Footer';
import { data } from './data.ts';
import 'animate.css';
import mainImg from '../../../assets/img/main.png';

const Home: FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-center gap-7 mt-7 mb-10 max-sm:flex-col">
        <img
          className="h-[500px] w-[400px] max-md:h-[400px] max-md:w-[300px] animate__animated animate__zoomIn"
          src={mainImg}
          alt="iphone"
        />
        <div className="w-5/12 max-sm:w-full max-sm:px-6">
          <h1 className="text-3xl font-semibold mb-2 max-sm:text-center">
            English Cards
          </h1>
          {data.map(item => (
            <p key={item.id} className="mb-2">
              {item.title}
            </p>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
