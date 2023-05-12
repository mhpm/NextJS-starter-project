import { StaticImageData } from 'next/image';

interface IStore {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
  color?: string;
  voting?: number;
}

export default IStore;
