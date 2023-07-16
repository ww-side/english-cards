import { nanoid as id } from '@reduxjs/toolkit';

export const data = [
  {
    id: id(),
    title: 'Home',
    route: '/',
    styles: 'flex items-center gap-2 hover:opacity-50 transition duration-200',
  },
  {
    id: id(),
    title: 'Cards',
    route: '/cards',
    styles: 'flex items-center gap-2 hover:opacity-50 transition duration-200',
  },
  {
    id: id(),
    title: 'Tests',
    route: '/test',
    styles: 'flex items-center gap-2 hover:opacity-50 transition duration-200',
  },
];
