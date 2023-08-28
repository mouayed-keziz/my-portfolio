import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Container from '@/components/layout/container'
import { useTheme } from 'next-themes'
import ThemeToggle from '@/components/theme/toggle'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { setTheme } = useTheme()
  return (
    <>
      <Container>
        <ThemeToggle />
      </Container>
    </>
  )
}
