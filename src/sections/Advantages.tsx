import { useLang } from '@/i18n'
import { useRevealGroup } from '@/hooks/useReveal'

const nums = ['01', '02', '03', '04', '05', '06']

export default function Advantages() {
  const { t } = useLang()
  const ref = useRevealGroup<HTMLElement>(80)

  return (
    <section id="advantages" ref={ref} className="hairline-b py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-16">
          <p className="reveal tech-label mb-5" data-idx="0">
            {t.advantages.label}
          </p>
          <h2 className="reveal max-w-3xl font-mont text-4xl font-extrabold tracking-tight text-white md:text-6xl" data-idx="1">
            {t.advantages.title}
          </h2>
        </div>

        <div className="grid gap-px bg-[rgba(243,243,243,0.09)] md:grid-cols-2 lg:grid-cols-3">
          {t.advantages.items.map((a, i) => (
            <div key={a.t} className="reveal group relative bg-[#050508] p-8 md:p-10" data-idx={i + 2}>
              <div className="flex items-start justify-between">
                <span className="font-mont text-sm font-extrabold tracking-[0.2em] text-[#3834ff]">{nums[i]}</span>
                <span className="h-2 w-2 bg-[rgba(243,243,243,0.15)] transition-colors duration-300 group-hover:bg-[#3834ff]" />
              </div>
              <h3 className="mt-10 font-mont text-xl font-bold text-white">{a.t}</h3>
              <p className="mt-4 text-[13.5px] leading-relaxed text-[#8a8f9e]">{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
