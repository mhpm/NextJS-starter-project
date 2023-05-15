import Link from 'next/link';
import Image from 'next/image';
import { IStore } from '@/src/interfaces';
import styles from './card-store.module.css';
import { useState } from 'react';

const CardStore = ({ id, title, imageUrl, description }: IStore) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <Link href={`/coffee-store/${id}`} className={styles.card}>
      {isLoading && (
        <div className='absolute animate-pulse w-full h-full flex items-center justify-center text-sm'>
          Image Loading...
        </div>
      )}
      <Image
        priority
        quality={50}
        alt='coffee'
        src={imageUrl}
        width={400}
        height={400}
        className='object-cover h-full w-full'
        onLoadingComplete={imageLoaded}></Image>
      <div className='text-sm bg-stone-800 opacity-0 hover:opacity-70 h-full w-full absolute z-10 top-0 transition ease-in items-center justify-center flex flex-col p-10'>
        <div className='text-sm font-bold p-1 text-primary'>{title}</div>
        <div>{description}</div>
      </div>
    </Link>
  );
};

export default CardStore;
