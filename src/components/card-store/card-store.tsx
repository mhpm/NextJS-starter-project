import Link from 'next/link';
import Image from 'next/image';
import { IStore } from '@/src/interfaces';
import styles from './card-store.module.css';
import { FC, ReactNode, useState } from 'react';
import styled from '@emotion/styled';

interface ICard extends IStore {
  children?: ReactNode;
}

const Container = styled(Link)``;

const CardStore = ({ id, imageUrl, children }: ICard) => {
  return (
    <Container href={`/coffee-store/${id}`} className={styles.card}>
      <Background imageUrl={imageUrl}></Background>
      {children}
    </Container>
  );
};

CardStore.Content = function Content({ children }: { children: ReactNode }) {
  return (
    <div className='text-sm bg-stone-800 opacity-0 hover:opacity-70 h-full w-full absolute z-10 top-0 transition ease-in items-center justify-center flex flex-col p-10'>
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
        alt='coffee'
        src={imageUrl}
        width={600}
        height={600}
        className='object-cover h-full w-full'
        onLoadingComplete={imageLoaded}></Image>
    </>
  );
};

export default CardStore;
