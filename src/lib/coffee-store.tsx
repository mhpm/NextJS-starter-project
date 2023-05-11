import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '',
});

const getListOfCoffeeStoresPhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: 'coffee shop',
    page: 1,
    perPage: 40,
  });

  return photos.response?.results.map((result) => {
    return {
      id: result.id,
      title: `Store Title`,
      description: `${result.description} ${result.alt_description}`,
      color: result.color,
      image: result.urls.small,
    };
  });
};

export const fetchCoffeeStore = async () => {
  const photos = await getListOfCoffeeStoresPhotos();
  return photos;
};
