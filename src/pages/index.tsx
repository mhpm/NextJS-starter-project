import { Banner } from '@/src/components';
import { ListStoreContainer } from '@/src/containers';

// https://jsonplaceholder.typicode.com/photos
// import source from '@/data/data.json';

import { fetchCoffeeStore } from '@/src/lib/coffee-store';
import { useContext } from 'react';
import { CoffeeStoreContext } from '../context/coffee-store/coffeeStore.context';
import { CoffeeStoreActions } from '../context/coffee-store/coffeeStore.interfaces';
import Head from 'next/head';

// only runs on server side rendering
export async function getStaticProps(context: any) {
  const data = await fetchCoffeeStore();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

//client side code
export default function Home(props: any) {
  const { state, dispatch } = useContext(CoffeeStoreContext);

  const { coffeeStores } = state;

  const getNearestStores = async () => {
    const response = await fetch('/api/coffee-stores/getByLocation');
    const stores = await response.json();

    try {
      dispatch({
        type: CoffeeStoreActions.SET_COFFEE_STORES,
        payload: {
          coffeeStores: stores.slice(-8),
        },
      });
    } catch (error) {
      console.log('error: ', stores);
    }
  };

  return (
    <>
      <Head>
        <title>Coffee Stores</title>
      </Head>
      <main>
        <div className='flex min-h-screen flex-col items-center justify-center p-12 sm:p-24'>
          <Banner onClickButton={getNearestStores} />
          {coffeeStores.length > 0 && (
            <div className='w-full xl:w-2/3 mt-10'>
              <h2 className='font-bold text-xl pb-5'>Nearest Coffee Stores</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
                <ListStoreContainer data={coffeeStores} />
              </div>
            </div>
          )}
          <div className='w-full xl:w-2/3 mt-20'>
            <h2 className='font-bold text-xl pb-5'>Pittsburgh Coffee Stores</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
              <ListStoreContainer data={props.data} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
