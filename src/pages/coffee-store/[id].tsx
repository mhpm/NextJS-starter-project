import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IStore } from '@/src/interfaces';
import { fetchCoffeeStore } from '@/src/lib/coffee-store';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import mug from '@/public/static/mug.png';
import likeIcon from '@/public/static/icons/like.svg';
import useSWR from 'swr';

export const getStaticProps: GetStaticProps = async (staticProps: any) => {
  const params = staticProps.params;
  const coffeeStoreData = await fetchCoffeeStore();
  const coffeeStore = coffeeStoreData?.find((store) => store.id == params.id);

  return {
    props: {
      coffeeStore: coffeeStore ? coffeeStore : { title: 'No Store founded' },
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
  const [store, setStore] = useState<IStore>(coffeeStore);
  const router = useRouter();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `/api/coffee-stores/getById?id=${coffeeStore?.id}`,
    fetcher
  );

  const handleLikeUp = () => {
    try {
      const { id } = store;

      fetch(`/api/coffee-stores/likeUp?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      })
        .then((response: Response) => response.json())
        .then((data) => {
          const { likes } = data.updated[0];
          setStore((prev) => ({ ...prev, likes }));
        });
    } catch (error) {
      console.log('error updating record: ', error);
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setStore(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (coffeeStore?.id) {
      try {
        fetch('/api/coffee-stores/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...store,
          }),
        }).then((response: Response) => response.json());
      } catch (error) {
        console.log('error creating record: ', error);
      }
    }
  }, [coffeeStore]);

  if (router.isFallback) {
    return (
      <div className='h-screen w-screen flex justify-center items-center animate-ping'>
        <h3> Loading ...</h3>
      </div>
    );
  }

  return (
    <div className='w-fill p-10 text-center font-bold'>
      {store?.id && (
        <>
          <Head>
            <title>{store.title}</title>
          </Head>
          <Title title={store.title} />
          <div className='w-full flex justify-center items-center my-10 flex-col text-center'>
            <Image
              src={store.imageUrl || mug}
              width={400}
              height={400}
              alt='image'
              className='rounded-lg'
            />
            {store.id && (
              <Body
                description={store.description || ''}
                like={store.likes}
                handleIconClick={handleLikeUp}
              />
            )}
          </div>
        </>
      )}
      <Link className='bg-primary rounded-full p-3 px-10' href={'/'}>
        Back
      </Link>
    </div>
  );
};

const Title = ({ title }: { title: string }) => (
  <h1 className='text-3xl mb-3'>
    <span className='text-primary'>{title}</span>
  </h1>
);

const Body = ({
  description,
  like,
  handleIconClick,
}: {
  description: string;
  like: number;
  handleIconClick: () => void;
}) => (
  <>
    <p className='w-1/2 p-5'>{description}</p>
    <div className='font-bold text-2xl flex gap-5 align-middle items-center'>
      <span className='pt-2'>{like} </span>
      <button onClick={handleIconClick}>
        <Image
          alt='like'
          className='hover:brightness-150'
          width={40}
          height={40}
          src={likeIcon}></Image>
      </button>
    </div>
  </>
);

export default CoffeeStore;
