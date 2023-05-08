import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import coffstore1 from '/public/static/1.jpg';
import coffstore2 from '/public/static/2.jpg';
import coffstore3 from '/public/static/3.jpg';
import coffstore4 from '/public/static/4.jpg';
import coffstore5 from '/public/static/5.jpg';
import coffstore6 from '/public/static/6.jpg';

const data: any[] = [
  { id: 1, image: coffstore1 },
  { id: 2, image: coffstore2 },
  { id: 3, image: coffstore3 },
  { id: 4, image: coffstore4 },
  { id: 5, image: coffstore5 },
  { id: 6, image: coffstore6 },
  { id: 7, image: coffstore1 },
  { id: 8, image: coffstore2 },
  { id: 9, image: coffstore3 },
  { id: 10, image: coffstore4 },
  { id: 11, image: coffstore5 },
  { id: 12, image: coffstore6 },
];

function ListImages() {
  return (
    <>
      {data.map((item) => (
        <Link
          href={`/coffee-store/${item.id}`}
          key={item.id}
          className='ease-in hover:rotate-6 duration-300 hover:brightness-125 col-md bg-amber-900 text-center rounded cursor-pointer border-4 hover:bg-amber-700'>
          <Image
            alt='coffee'
            src={item.image}
            width={400}
            height={400}
            className='object-cover h-full w-full'></Image>
        </Link>
      ))}
    </>
  );
}

export default ListImages;
