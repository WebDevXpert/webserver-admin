import { SessionProvider } from 'next-auth/react';
import GeneralLayout from './general-layout';
import Sidebar from '@/components/Sidebar';
import "../styles/globals.css"

function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <GeneralLayout>
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </GeneralLayout>
    </SessionProvider>
  );
}

export default App;
