import { StaticImageData } from 'next/image';

interface IStore {
  id: number;
  title: string;
  image: string;
  description?: string;
  color?: string;
}

export default IStore;
