import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import '../styles/globals.css';
import store from '../public/src/app/store';

function MyApp({ Component, pageProps }) {
  return( 
  <SessionProvider session={pageProps.session}>
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
  </SessionProvider>
  )
  
}

export default MyApp
