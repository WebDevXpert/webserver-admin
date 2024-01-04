import { SessionProvider } from 'next-auth/react';
import GeneralLayout from './general-layout';
import Sidebar from '@/components/Sidebar';
import "../styles/globals.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <GeneralLayout>
        <Sidebar>
          <ToastContainer />
          <Component {...pageProps} />
        </Sidebar>
      </GeneralLayout>
    </SessionProvider>
  );
}

export default App;
