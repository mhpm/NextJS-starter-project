import { StaticImageData } from 'next/image';

interface IStore {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
  likes: number;
}

export default IStore;
