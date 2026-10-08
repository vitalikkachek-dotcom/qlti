import { useEffect, useState } from 'react'
import { LANGS, useLang, type Lang } from '@/i18n'

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    ['#products', t.nav.products],
    ['#solutions', t.nav.solutions],
    ['#advantages', t.nav.advantages],
    ['#about', t.nav.about],
    ['#contacts', t.nav.contacts],
  ] as const

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 hairline-b backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'bg-[#050508]/85' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
        {/* logo */}
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-mont text-xl font-800 tracking-tight text-white" style={{ fontWeight: 800 }}>
            QLTI
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.28em] text-[#8a8f9e] sm:block">
            Quality Led Tech Integration
          </span>
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="hover-tech text-[12px] font-semibold uppercase tracking-[0.18em] text-[#c9ccd6] hover:text-[#3834ff]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {/* language switcher */}
          <div className="flex items-center gap-1 hairline-l pl-5">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code as Lang)}
                className={`hover-tech px-2 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${
                  lang === l.code ? 'text-[#3834ff]' : 'text-[#8a8f9e] hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* mobile burger */}
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <span className={`h-px w-6 bg-white transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-white transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="hairline-t bg-[#050508] px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c9ccd6]"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
