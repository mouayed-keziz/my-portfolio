import { ThemeProvider } from '@/components/theme/provider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins, Roboto } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto({ subsets: ['latin'], weight: ["500", "100", "700", "300", "900"], })
const poppins = Poppins({ subsets: ['latin'], weight: ["500", "600", "700", "800", "900"], })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{"<> keziz mouayed </>"}</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className={poppins.className} >
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}
