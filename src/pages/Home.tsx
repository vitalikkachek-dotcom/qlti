import { useEffect, useState } from 'react'
import { LanguageProvider } from '@/i18n'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Marquee from '@/sections/Marquee'
import Products from '@/sections/Products'
import Solutions from '@/sections/Solutions'
import Advantages from '@/sections/Advantages'
import About from '@/sections/About'
import Contacts from '@/sections/Contacts'

function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setP(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return <div className="fixed left-0 top-0 z-[60] h-[2px] bg-[#3834ff]" style={{ width: `${p * 100}%` }} />
}

export default function Home() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Solutions />
        <Advantages />
        <About />
      </main>
      <Contacts />
    </LanguageProvider>
  )
}
