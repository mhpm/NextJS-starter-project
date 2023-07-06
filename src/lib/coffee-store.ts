import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey:
    process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY ||
    'xKATI7kvVcblGDj7wyZEYwBQDllHmHRWO8QAC3WSqLQ',
});

const getListOfCoffeeStoresPhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: 'coffee shop',
    page: 1,
    perPage: 1,
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
