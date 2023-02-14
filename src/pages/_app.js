import Footer from '@/components/basic/Footer'
import FooterBottom from '@/components/basic/FooterBottom'
import TopBar from '@/components/basic/TopBar/TopBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopBar/>
      <Component {...pageProps}/>
      <Footer/>
      <FooterBottom/>
    </>
  )
}
