import { Link } from 'react-router-dom';
import Button from '../../common/Button/index.tsx';
import mike from '../../../assets/img/mike.png';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center gap-3 h-screen max-sm:flex-col">
      <img
        className="max-md:w-5/12 max-md:h-5/12 max-sm:w-6/12 max-sm:h-6/12"
        src={mike}
        alt="mike"
      />
      <div className="flex flex-col gap-2 w-3/12 max-lg:w-5/12 max-sm:w-7/12">
        <h1 className="text-4xl font-semibold">
          Ooops! This page doesn't exist
        </h1>
        <p className="text-lg font-thin">
          You must have picked the wrong door because I haven't been able to lay
          my eye on the page you've been searching for.
        </p>
        <Button color="purple">
          <Link className="w-full" to="/">
            Go home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
