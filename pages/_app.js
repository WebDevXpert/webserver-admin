import { SessionProvider } from 'next-auth/react';
import GeneralLayout from './general-layout';
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <GeneralLayout>
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </GeneralLayout>
    </SessionProvider>
  );
}

export default App;