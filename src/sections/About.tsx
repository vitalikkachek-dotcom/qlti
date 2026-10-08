import { useLang } from '@/i18n'
import { useRevealGroup } from '@/hooks/useReveal'
import LedMatrix from '@/components/LedMatrix'

export default function About() {
  const { t } = useLang()
  const ref = useRevealGroup<HTMLElement>(100)

  return (
    <section id="about" ref={ref} className="hairline-b bg-[#0a0a12] py-28 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="reveal tech-label mb-5" data-idx="0">
            {t.about.label}
          </p>
          <h2 className="reveal font-mont text-4xl font-extrabold tracking-tight text-white md:text-5xl" data-idx="1">
            {t.about.title}
          </h2>
          <p className="reveal mt-8 text-[15px] leading-relaxed text-[#b9bdc9]" data-idx="2">
            {t.about.p1}
          </p>
          <p className="reveal mt-5 text-[15px] leading-relaxed text-[#8a8f9e]" data-idx="3">
            {t.about.p2}
          </p>

          <div className="reveal mt-10 hairline-t" data-idx="4">
            {[t.about.v1, t.about.v2, t.about.v3, t.about.v4].map((v, i) => (
              <div key={v} className="group flex items-center justify-between py-4 hairline-b">
                <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#c9ccd6] transition-colors group-hover:text-[#3834ff]">
                  {v}
                </span>
                <span className="font-mont text-xs font-bold text-[#5b6070]">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* framed LED wall visual */}
        <div className="reveal relative min-h-[380px] lg:min-h-full" data-idx="2">
          <div className="absolute inset-0 border border-[rgba(243,243,243,0.14)]">
            <LedMatrix className="h-full w-full" />
          </div>
          <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b border-l border-[#3834ff]" />
          <div className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-[#3834ff]" />
        </div>
      </div>
    </section>
  )
}
