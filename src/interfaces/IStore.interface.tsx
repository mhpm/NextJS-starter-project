import { StaticImageData } from 'next/image';

interface IStore {
  albumId?: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default IStore;
