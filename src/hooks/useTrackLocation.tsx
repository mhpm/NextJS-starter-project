import { useState } from 'react';

const useTrackLocation = () => {
  const [statusMsg, setStatusMsg] = useState<string>('');
  const [latLong, setLatLong] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const success = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;

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
