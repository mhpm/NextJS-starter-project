import Link from 'next/link';
import Image from 'next/image';
import { IStore } from '@/src/interfaces';
import styles from './card-store.module.css';
import { ReactNode, useState } from 'react';

interface ICard extends IStore {
  children?: ReactNode;
  className?: string;
}

const CardStore = ({ id, imageUrl, className, children }: ICard) => {
  return (
    <Link
      href={`/coffee-store/${id}`}
      className={[styles.card, className].join(' ')}
    >
      <Background imageUrl={imageUrl}></Background>
      {children}
    </Link>
  );
};

CardStore.Content = function Content({ children }: { children: ReactNode }) {
  return (
    <div className="text-sm bg-stone-800 opacity-0 hover:opacity-70 h-full w-full absolute z-10 top-0 transition ease-in items-center justify-center flex flex-col p-10">
      {children}
    </div>
  );
};

const Background = ({ imageUrl }: { imageUrl: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <div className={styles.loading}>Image Loading...</div>}
      <Image
        priority
        quality={50}
        alt="coffee"
        src={imageUrl}
        width={1000}
        height={1000}
        className="object-cover h-full w-full"
        onLoadingComplete={imageLoaded}
      ></Image>
    </>
  );
};

export default CardStore;
