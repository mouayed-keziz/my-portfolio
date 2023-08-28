import Container from '@/components/layout/container'
import { ThemeProvider } from '@/components/theme/provider'
import '@/styles/globals.css'
import { Settings } from 'lucide-react'
import type { AppProps } from 'next/app'
import { Poppins, Roboto, JetBrains_Mono } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto({ subsets: ['latin'], weight: ["500", "100", "700", "300", "900"], })
const poppins = Poppins({ subsets: ['latin'], weight: ["500", "600", "700", "800", "900"], })
const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'], weight: ["500", "600", "700", "800"], })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{"WEBDEV - KEZIZ Mouayed"}</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className={jetbrains_mono.className} >
          <div className='bg-gradient-to-r from-green-400 to-teal-400 text-center text-black'>
            <Container>
              this website is under construction
            </Container>
          </div>

          <Component {...pageProps} />
        </div>
      </ThemeProvider >
    </>
  )
}
