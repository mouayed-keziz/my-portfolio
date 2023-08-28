import Container from '@/components/layout/container'
import HeroHeader from '@/components/sections/hero'
import Navbar from '@/components/sections/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroHeader />


      <Image src="https://nuxt.com/assets/home/hero-gradient.svg" className="absolute top-0 right-0 hidden overflow-hidden select-none lg:block blur-lg" alt="" width={1269} height={724} />
      <Image src="https://nuxt.com/assets/home/hero-gradient-tablet.svg" alt="" className="absolute top-0 right-0 w-full hidden overflow-hidden select-none sm:block lg:hidden blur-md" width={924} height={653} />
      <Image src="https://nuxt.com/assets/home/hero-gradient-mobile.svg" className="absolute inset-x-0 top-0 w-full overflow-hidden object-cover select-none sm:hidden blur-md" alt="" width={375} height={494} />

    </>
  )
}

