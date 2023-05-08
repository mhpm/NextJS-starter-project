import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';

type ICoffee = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const CoffeeStore = () => {
  const [coffee, setCoffee] = useState<ICoffee>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('https://api.sampleapis.com/coffee/hot');
      const json: ICoffee[] = await data.json();

      setCoffee(json.find((coffee) => coffee.id.toString() === id));
    };

    getData();
  }, []);

  return (
    <div className='w-fill p-10 text-center font-bold'>
      <h1 className='text-xl mb-3'>CoffeStore: {coffee?.title}</h1>
      <p>{coffee?.description}</p>
    </div>
  );
};

export default CoffeeStore;
