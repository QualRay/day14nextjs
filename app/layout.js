
import '../public/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../public/assets/vendor/boxicons/css/boxicons.min.css';
import '../public/assets/vendor/quill/quill.snow.css';
import '../public/assets/vendor/quill/quill.bubble.css';
import '../public/assets/vendor/remixicon/remixicon.css';
import '../public/assets/vendor/simple-datatables/style.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import '../public/assets/css/style.css';
import './globals.css';

import Script from 'next/script';

import Head from 'next/head';

import { PrimeReactProvider } from 'primereact/api';

//👇 Import Open Sans font
import { Open_Sans, Poppins, Nunito } from 'next/font/google'

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})


export const metadata = {
  title: 'Dashboard App',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <PrimeReactProvider>

      <html lang="en" >
        <Head>
          <Script type="text/javascript" src="../public/assets/js/main.js" />
        </Head>
        <body className={`${openSans.className} ${poppins.className} ${nunito.className}`}>
          {children}



        </body>
      </html>
    </PrimeReactProvider>
  )
}
