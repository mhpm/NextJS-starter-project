import { Inter } from 'next/font/google';
import Banner from '../components/banner/banner';
import ListImages from '@/components/list-images/ListImages';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main>
        <div className='flex min-h-screen flex-col items-center justify-center p-24'>
          <Banner />
          <div className='w-full xl:w-2/3 mt-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
              <ListImages />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
