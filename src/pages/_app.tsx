import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactNode, createContext } from 'react';

const StoreContext = createContext({});

const StoreProvider = (props: any) => {
  const initialState: any = {
    latLong: '',
    coffeeStores: [],
  };

  return (
    <StoreContext.Provider value={{ state: initialState }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />;
    </StoreProvider>
  );
}
