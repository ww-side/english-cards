import { nanoid as id } from '@reduxjs/toolkit';
import { AiOutlineHome } from 'react-icons/ai';
import { PiCards, PiNotePencilDuotone } from 'react-icons/pi';

const basicStyle =
  'flex items-center gap-2 hover:opacity-50 transition duration-200';

export const data = [
  {
    id: id(),
    icon: <AiOutlineHome />,
    title: 'Home',
    route: '/',
    styles: basicStyle,
  },
  {
    id: id(),
    icon: <PiCards />,
    title: 'Cards',
    route: '/cards',
    styles: basicStyle,
  },
  {
    id: id(),
    icon: <PiNotePencilDuotone />,
    title: 'Tests',
    route: '/test',
    styles: basicStyle,
  },
];
