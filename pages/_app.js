import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';
import GeneralLayout from './general-layout';

export default function App({ Component, pageProps }) {
  return (
    <GeneralLayout>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </GeneralLayout>
  );
}
