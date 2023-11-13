import { Author } from "./Author";

export interface Post {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  img: string;
  description: string;
  published: string;
  author: Author;
}
