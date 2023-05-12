import { fetchCoffeeStore } from '@/src/lib/coffee-store';
import { NextApiRequest, NextApiResponse } from 'next';

const getCoffeeStoresByLocation = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  try {
    const response = await fetchCoffeeStore();
    res.status(200);
    res.json(response);
  } catch (error) {
    console.log('error: ', error);
    res.status(500);
    res.json({ message: 'Something went wrong', error });
  }
};

export default getCoffeeStoresByLocation;
