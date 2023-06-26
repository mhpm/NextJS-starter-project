import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IStore } from '@/src/interfaces';
import { fetchCoffeeStore } from '@/src/lib/coffee-store';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import likeIcon from '@/public/static/icons/like.svg';
import useSWR from 'swr';
import { CardStore } from '@/src/components';

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
      <div className="h-screen w-screen flex justify-center items-center animate-ping">
        <h3> Loading ...</h3>
      </div>
    );
  }

  return (
    <div className="w-fill p-10 text-center font-bold">
      {store?.id && (
        <>
          <Head>
            <title>{store.title}</title>
          </Head>
          <Title title={store.title || ''} />
          <div className="w-full flex justify-center items-center my-10 flex-col text-center">
            <CardStore
              id={store.id}
              imageUrl={store.imageUrl}
              description={store.description}
              likes={store.likes}
            >
              <CardStore.Content>
                <LikeControl
                  like={store.likes || 0}
                  handleIconClick={handleLikeUp}
                />
              </CardStore.Content>
            </CardStore>
            <p className="sm:w-1/2 w-full  p-4">{store.description}</p>
          </div>
        </>
      )}
      <Link className="bg-primary rounded-full p-3 px-10" href={'/'}>
        Back
      </Link>
    </div>
  );
};

const Title = ({ title }: { title: string }) => (
  <h1 className="text-3xl mb-3">
    <span className="text-primary">{title}</span>
  </h1>
);

const LikeControl = ({
  like,
  handleIconClick,
}: {
  like: number;
  handleIconClick: () => void;
}) => (
  <>
    <div className="font-bold text-2xl flex gap-5 align-middle items-center">
      <span className="pt-2">{like} </span>
      <button
        className="p-4 rounded-full bg-stone-200 hover:bg-stone-50"
        onClick={handleIconClick}
      >
        <Image
          alt="like"
          className=""
          width={40}
          height={40}
          src={likeIcon}
        ></Image>
      </button>
    </div>
  </>
);

export default CoffeeStore;
