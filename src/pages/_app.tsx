import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { CoffeeStoreProvider } from '@/src/context';

function App({ Component, pageProps }: AppProps) {
  return (
    <CoffeeStoreProvider>
      <Component {...pageProps} />
    </CoffeeStoreProvider>
  );
}

export default App;
