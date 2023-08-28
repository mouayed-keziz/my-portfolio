import Container from '@/components/layout/container'
import MeshBackground from '@/components/sections/_mesh_background'
import AboutMe from '@/components/sections/about_me'
import HeroHeader from '@/components/sections/hero'
import Navbar from '@/components/sections/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>

      <MeshBackground />
      <Navbar />
      <HeroHeader />
      <AboutMe />


    </>
  )
}

