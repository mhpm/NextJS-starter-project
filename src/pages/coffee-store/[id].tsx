import { useRouter } from 'next/router';
import { IStore } from '@/src/interfaces';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import coffeeStoreData from '@/data/data.json';

export const getStaticProps: GetStaticProps = (staticProps: any) => {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoreData.find((store) => store.id == params.id),
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
};

const CoffeeStore = ({ coffeeStore }: { coffeeStore: IStore }) => {
  const router = useRouter();

  const { id, title, url, thumbnailUrl } = coffeeStore;

  return (
    <div className='w-fill p-10 text-center font-bold'>
      <h1 className='text-xl mb-3'>CoffeStore: {title}</h1>
      <div>
        <Image src={url} width={400} height={400} alt='image' />
      </div>
      <button
        className='bg-primary rounded-full p-3 px-10'
        onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
};

export default CoffeeStore;
