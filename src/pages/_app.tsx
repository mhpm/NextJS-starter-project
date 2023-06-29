import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { CoffeeStoreProvider } from '@/src/context';
import Script from 'next/script';

function App({ Component, pageProps }: AppProps) {
  return (
    <CoffeeStoreProvider>
      <Component {...pageProps} />
      <Script src="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap" />
    </CoffeeStoreProvider>
  );
}

export default App;
