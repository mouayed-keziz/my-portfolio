import { ThemeProvider } from '@/components/theme/provider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins, Roboto } from 'next/font/google'

const poppins = Roboto({ subsets: ['latin'], weight: ["500", "100", "700", "300", "900"], })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={poppins.className} >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
