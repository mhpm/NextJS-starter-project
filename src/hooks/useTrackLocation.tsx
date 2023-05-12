import { useContext, useState } from 'react';
import { CoffeeStoreContext } from '@/src/context/coffee-store/coffeeStore.context';
import { CoffeeStoreActions } from '../context/coffee-store/coffeeStore.interfaces';

const useTrackLocation = () => {
  const [statusMsg, setStatusMsg] = useState<string>('');
  const [latLong, setLatLong] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { dispatch } = useContext(CoffeeStoreContext);

  const success = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;

    dispatch({
      type: CoffeeStoreActions.SET_LAT_LONG,
      payload: { latLong: `${latitude}, ${longitude}` },
    });

    console.log(`${latitude}, ${longitude}`);

    setLatLong(`${latitude}, ${longitude}`);
    setStatusMsg('');
    setIsLoading(false);
  };

  const error = () => {
    setStatusMsg('Unable to retrieve your location');
    setIsLoading(false);
  };

  const handleTrackLocation = () => {
    setIsLoading(true);

    if (!navigator.geolocation) {
      setStatusMsg('Geolocation is not suppoerted by your browser');
      setIsLoading(false);
    } else {
      setLatLong('');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return { latLong, statusMsg, handleTrackLocation, isLoading };
};

export default useTrackLocation;
