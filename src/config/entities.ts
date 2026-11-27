import { Circle, Square, Triangle } from 'lucide-react';

export const entities = {
  book: {
    label: 'Boeken',
    path: '/books',
    background: 'bg-book',
    fill: 'fill-book',
    icon: Square,
  },
  author: {
    label: 'Auteurs',
    path: '/authors',
    background: 'bg-author',
    fill: 'fill-author',
    icon: Circle,
  },
  genre: {
    label: 'Genres',
    path: '/genres',
    background: 'bg-genre',
    fill: 'fill-genre',
    icon: Triangle,
  },
} as const;

export type EntityType = keyof typeof entities;
