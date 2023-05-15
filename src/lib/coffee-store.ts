import { createApi } from 'unsplash-js';
import { faker } from '@faker-js/faker';

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '',
});

const getListOfCoffeeStoresPhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: 'coffee shop',
    page: 1,
    perPage: 100,
  });

  const stores = photos.response?.results.map((result) => {
    return {
      id: result.id,
      title: result.user.username,
      description: result.user.location,
      imageUrl: result.urls.regular,
      likes: result.likes,
    };
  });

  return stores;
};

export const fetchCoffeeStore = async () => {
  const photos = await getListOfCoffeeStoresPhotos();
  return photos;
};
