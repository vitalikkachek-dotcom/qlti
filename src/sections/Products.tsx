import { useLang } from '@/i18n'
import { useRevealGroup } from '@/hooks/useReveal'

/** Code-drawn display-panel visual, unique per series */
function PanelVisual({ seed }: { seed: number }) {
  const cells: React.ReactElement[] = []
  const cols = 24
  const rows = 13
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const n =
        Math.sin(x * 0.55 + seed * 2.3) * 0.5 +
        Math.sin(y * 0.7 + seed * 1.1) * 0.3 +
        Math.sin((x + y) * 0.35 + seed) * 0.4
      const v = Math.max(0, Math.min(1, (n + 1.2) / 2.4))
      const hueShift = seed % 2 === 0 ? 0 : 30
      cells.push(
        <rect
          key={`${x}-${y}`}
          x={x * 10 + 2}
          y={y * 10 + 2}
          width={6.5}
          height={6.5}
          rx={1.2}
          fill={
            hueShift === 0
              ? `rgba(${40 + 60 * v},${30 + 40 * v},${140 + 115 * v},${0.25 + 0.75 * v})`
              : `rgba(${20 + 30 * v},${60 + 120 * v},${180 + 75 * v},${0.25 + 0.75 * v})`
          }
        />,
      )
    }
  }
  return (
    <svg viewBox={`0 0 ${cols * 10} ${rows * 10}`} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="100%" height="100%" fill="#07070d" />
      {cells}
      <rect x="0.5" y="0.5" width={cols * 10 - 1} height={rows * 10 - 1} fill="none" stroke="rgba(243,243,243,0.18)" strokeWidth="1" />
    </svg>
  )
}

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0">
    <circle cx="7" cy="7" r="6.25" stroke="#3834ff" strokeWidth="1.5" />
    <path d="M4.4 7.2l1.8 1.8 3.4-3.8" stroke="#3834ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Products() {
  const { t } = useLang()
  const ref = useRevealGroup<HTMLElement>(90)

  return (
    <section id="products" ref={ref} className="hairline-b py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="reveal tech-label mb-5" data-idx="0">
              {t.products.label}
            </p>
            <h2 className="reveal font-mont text-4xl font-extrabold tracking-tight text-white md:text-6xl" data-idx="1">
              {t.products.title}
            </h2>
          </div>
          <p className="reveal max-w-md text-[15px] leading-relaxed text-[#8a8f9e] md:justify-self-end" data-idx="2">
            {t.products.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16">
          {t.products.items.map((p, i) => (
            <article key={p.name} className="reveal group bg-[#050508] p-0" data-idx={i + 1}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <PanelVisual seed={i + 1} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="font-mont text-3xl font-extrabold tracking-tight text-white">{p.name}</div>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8f93ff]">{p.tag}</div>
                  </div>
                  <div className="hairline-l pl-4 text-right">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8f9e]">Pixel pitch</div>
                    <div className="font-mont text-sm font-bold text-white">{p.pitch}</div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[14px] leading-relaxed text-[#b9bdc9]">{p.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#8a8f9e]">
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <a
                    href="#contacts"
                    className="hover-tech inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-white group-hover:text-[#3834ff]"
                  >
                    {t.products.details}
                    <span className="inline-block h-px w-10 bg-current transition-all group-hover:w-16" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
