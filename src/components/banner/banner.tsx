import React from 'react';
import Image from 'next/image';

import mug from '/public/static/mug.png';
import { useTrackLocation } from '@/src/hooks';

function Banner({ onClickButton }: { onClickButton: () => void }) {
  const { handleTrackLocation, statusMsg, isLoading } = useTrackLocation();

  const handleClickBanner = () => {
    handleTrackLocation();
    onClickButton();
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-6 justify-between gap-10 relative'>
      <div className='col-span-6 md:col-span-4'>
        <h1 className='text-5xl mb-4 font-bold'>
          Best Coffee in <span className='text-primary'>Pitt!</span>
        </h1>
        <h2 className='text-3xl mb-4'>Traditional Taste from home</h2>
        <h3 className='text-xl mb-4'>
          List of best coffe-shops in pittsburght
        </h3>
        <button
          onClick={handleClickBanner}
          className='p-4 bg-primary rounded font-bold'>
          {isLoading ? 'Loading...' : 'View stores nearby'}
        </button>
        <p className='mt-2 text-red-400'>{statusMsg}</p>
      </div>
      <div className='col-span-2 md:block hidden'>
        <Image
          alt='mug'
          src={mug}
          width={200}
          height={400}
          className='object-scale-down'></Image>
      </div>
    </div>
  );
}

export default Banner;
