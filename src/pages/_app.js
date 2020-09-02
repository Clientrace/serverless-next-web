
import '../styles/index.scss';
import DefaultLayout from './../layouts/default/index';


function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}


export default MyApp
