import { useEffect, useState } from 'react'
import LedMatrix from '@/components/LedMatrix'
import { useLang } from '@/i18n'

export default function Hero() {
  const { t } = useLang()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section id="top" className="relative flex min-h-[100vh] items-end overflow-hidden">
      {/* LED wall backdrop */}
      <LedMatrix className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/20 to-[#050508]/60" />
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-60" />

      <div className={`relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-24 pt-40 md:px-10 ${mounted ? 'is-in' : ''}`}>
        <p className="line-mask mb-6">
          <span style={{ transitionDelay: '0ms' }} className="tech-label !text-[#8f93ff]">
            {t.hero.label} — qlti.ru
          </span>
        </p>
        <h1 className="font-mont font-extrabold leading-[1.02] tracking-tight text-white" style={{ fontSize: 'clamp(44px, 7.5vw, 110px)' }}>
          <span className="line-mask">
            <span style={{ transitionDelay: '120ms' }}>{t.hero.l1}</span>
          </span>
          <span className="line-mask">
            <span style={{ transitionDelay: '260ms' }} className="text-[#3834ff]">
              {t.hero.l2}
            </span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="line-mask max-w-xl">
            <span style={{ transitionDelay: '400ms' }} className="text-[15px] leading-relaxed text-[#b9bdc9] md:text-base">
              {t.hero.sub}
            </span>
          </p>
          <div className="line-mask">
            <span style={{ transitionDelay: '520ms' }} className="flex flex-wrap gap-4">
              <a href="#contacts" className="btn-primary px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em]">
                {t.hero.cta1}
              </a>
              <a href="#products" className="btn-ghost px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em]">
                {t.hero.cta2}
              </a>
            </span>
          </div>
        </div>

        {/* stats strip */}
        <div className="mt-20 grid grid-cols-2 hairline-t md:grid-cols-4">
          {t.stats.map((s, i) => (
            <div key={i} className={`py-6 pr-6 ${i > 0 ? 'md:hairline-l md:pl-8' : ''}`}>
              <div className="font-mont text-3xl font-extrabold text-white md:text-4xl">{s.n}</div>
              <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#8a8f9e]">{s.t}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 hidden items-center gap-3 md:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a8f9e]">{t.hero.scroll}</span>
        <span className="block h-px w-12 bg-[#3834ff]" />
      </div>
    </section>
  )
}
