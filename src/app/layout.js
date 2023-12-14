import { Inter } from 'next/font/google'
import '../../public/assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Script from 'next/script';
import Footer from '@/components/layout/Footer';
import { Toaster } from 'react-hot-toast';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EOSCL',
  description: 'Event Ontario Softball Cricket League',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        {children}
        <Footer />

      </body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></Script>
    </html>
  )
}
