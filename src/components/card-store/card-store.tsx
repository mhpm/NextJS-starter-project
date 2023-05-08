import Link from 'next/link';
import Image from 'next/image';
import { IStore } from '@/interfaces';
import styles from './card-store.module.css';

const CardStore = ({ id, title, url, thumbnailUrl }: IStore) => {
  return (
    <Link href={`/coffee-store/${id}`} className={styles.card}>
      <div className='w-full absolute bg-primary'>{title}</div>
      <Image
        alt='coffee'
        src={thumbnailUrl}
        width={400}
        height={400}
        className='object-cover h-full w-full'></Image>
    </Link>
  );
};

export default CardStore;
