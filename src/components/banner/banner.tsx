import React from 'react';
import Image from 'next/image';

import mug from '/public/static/mug.png';

function Banner() {
  const handleClickBanner = () => {
    console.log('handleClickBanner');
  };

  return (
    <div className='flex justify-between gap-10 relative'>
      <div>
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
          Give me a Taste!
        </button>
      </div>
      <Image
        alt='mug'
        src={mug}
        width={200}
        height={400}
        className='object-scale-down'></Image>
    </div>
  );
}

export default Banner;
