import Container from '@/components/layout/container'
import Navbar from '@/components/sections/navbar'
import ThemeToggle from '@/components/theme/toggle'


export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <ThemeToggle />
      </Container>
    </>
  )
}
