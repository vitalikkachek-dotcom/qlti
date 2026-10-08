import { useLang } from '@/i18n'
import { useRevealGroup } from '@/hooks/useReveal'

const icons = [
  // retail
  <path key="0" d="M10 18h44M14 18v32h36V18M22 50V34h12v16M14 26h36" strokeLinecap="round" strokeLinejoin="round" />,
  // control room
  <path key="1" d="M8 14h48v30H8zM8 29h48M32 29v15M20 50h24M26 44l-3 6M38 44l3 6" strokeLinecap="round" strokeLinejoin="round" />,
  // sports
  <path key="2" d="M32 8a24 24 0 100 48 24 24 0 000-48zM32 8v48M8 32h48M14 15c6 5 6 29 0 34M50 15c-6 5-6 29 0 34" strokeLinecap="round" strokeLinejoin="round" />,
  // corporate
  <path key="3" d="M12 52V20l20-12 20 12v32M12 52h40M26 52V38h12v14M26 26h4M34 26h4M26 32h4M34 32h4" strokeLinecap="round" strokeLinejoin="round" />,
  // events
  <path key="4" d="M32 8l5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2zM14 50h36M20 56h24" strokeLinecap="round" strokeLinejoin="round" />,
  // city
  <path key="5" d="M10 56V24l10-6v38M20 56V12l12 6v38M32 56V28l10-4v32M42 56V18l12 8v30M8 56h48" strokeLinecap="round" strokeLinejoin="round" />,
]

export default function Solutions() {
  const { t } = useLang()
  const ref = useRevealGroup<HTMLElement>(80)

  return (
    <section id="solutions" ref={ref} className="hairline-b bg-[#0a0a12] py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="reveal tech-label mb-5" data-idx="0">
          {t.solutions.label}
        </p>
        <h2 className="reveal mb-16 max-w-3xl font-mont text-4xl font-extrabold tracking-tight text-white md:text-6xl" data-idx="1">
          {t.solutions.title}
        </h2>

        <div className="grid gap-px bg-[rgba(243,243,243,0.09)] sm:grid-cols-2 lg:grid-cols-3">
          {t.solutions.items.map((s, i) => (
            <div key={s.name} className="reveal group bg-[#0a0a12] p-8 hover-tech hover:bg-[#0d0d1a]" data-idx={i + 2}>
              <svg
                viewBox="0 0 64 64"
                className="h-14 w-14 stroke-[#8a8f9e] transition-colors duration-300 group-hover:stroke-[#3834ff]"
                fill="none"
                strokeWidth="2"
              >
                {icons[i]}
              </svg>
              <h3 className="mt-6 font-mont text-lg font-bold text-white">{s.name}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[#8a8f9e]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
