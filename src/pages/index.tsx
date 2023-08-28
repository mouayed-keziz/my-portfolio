import Footer from '@/components/footer'
import Container from '@/components/layout/container'
import MeshBackground from '@/components/sections/_mesh_background'
import AboutMe from '@/components/sections/about_me'
import HeroHeader from '@/components/sections/hero'
import MySkills from '@/components/sections/my_skills'
import Navbar from '@/components/sections/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>

      <MeshBackground />
      <Navbar />
      <HeroHeader />
      <div className='h-48' />
      <AboutMe />
      <div className='h-32' />
      <MySkills />
      <div className='h-32' />
      <Footer />
    </>
  )
}

