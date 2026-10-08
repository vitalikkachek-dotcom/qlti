import { useLang } from '@/i18n'

export default function Marquee() {
  const { t } = useLang()
  const row = [...t.marquee, ...t.marquee]
  return (
    <div className="hairline-b hairline-t overflow-hidden py-4">
      <div className="marquee-track">
        {row.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 text-[12px] font-bold uppercase tracking-[0.3em] text-[#5b6070]">{word}</span>
            <span className="h-1.5 w-1.5 bg-[#3834ff]" />
          </span>
        ))}
      </div>
    </div>
  )
}
