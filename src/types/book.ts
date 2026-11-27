export interface Book {
  id: number | string;
  name: string;
  year: number | string;
  author: { name: string };
}