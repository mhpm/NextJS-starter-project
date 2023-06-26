import { useState } from 'react';
import LoadingComponent from '.';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  return {
    isLoading,
    LoadingComponent,
    toggleLoading: () => setIsLoading(!isLoading),
  };
};

export default useLoading;
