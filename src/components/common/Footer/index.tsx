import { FC } from 'react';
import { data } from './data.tsx';

const Footer: FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 mb-3">
      {data.map(item => (
        <a
          key={item.id}
          className="hover:opacity-50 transition duration-200"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Footer;
