import { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-row h-screen">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
