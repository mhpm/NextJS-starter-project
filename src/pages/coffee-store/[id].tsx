import { useRouter } from 'next/router';
import { IStore } from '@/src/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { fetchCoffeeStore } from '@/src/lib/coffee-store';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (staticProps: any) => {
  const params = staticProps.params;
  const coffeeStoreData = await fetchCoffeeStore();

  return {
    props: {
      coffeeStore: coffeeStoreData?.find((store) => store.id == params.id),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const coffeeStoreData = await fetchCoffeeStore();

  const paths: any = coffeeStoreData?.map((store) => {
    return {
      params: {
        id: store.id,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

const CoffeeStore = ({ coffeeStore }: { coffeeStore: IStore }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className='h-screen w-screen flex justify-center items-center animate-ping'>
        <h3> Loading ...</h3>
      </div>
    );
  }

  const { title, image, id, description } = coffeeStore;

  return (
    <div className='w-fill p-10 text-center font-bold'>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className='text-xl mb-3'>{title}</h1>
      <div className='w-full flex justify-center items-center my-10 flex-col text-center'>
        <Image
          src={image || ''}
          width={400}
          height={400}
          alt='image'
          className='rounded-lg'
        />
        <p className='w-1/2 p-5'>{description}</p>
      </div>
      <Link className='bg-primary rounded-full p-3 px-10' href={'/'}>
        Back
      </Link>
    </div>
  );
};

export default CoffeeStore;
