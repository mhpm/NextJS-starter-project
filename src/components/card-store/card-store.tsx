import Link from 'next/link';
import Image from 'next/image';
import { IStore } from '@/src/interfaces';
import styles from './card-store.module.css';

const CardStore = ({ id, title, image, description, color }: IStore) => {
  return (
    <Link
      href={`/coffee-store/${id}`}
      className={[styles.card, `outline-[${color}]`].join(' ')}>
      <Image
        alt='coffee'
        src={image}
        width={400}
        height={400}
        className='object-cover h-full w-full'></Image>
      <div className='text-sm bg-stone-800 opacity-0 hover:opacity-70 h-full w-full absolute z-10 top-0 transition ease-in items-center justify-center flex flex-col p-10'>
        <div className='text-sm font-bold p-1 text-primary'>{title}</div>
        <div>{description}</div>
      </div>
    </Link>
  );
};

export default CardStore;
