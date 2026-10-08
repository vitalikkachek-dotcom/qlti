import { useState } from 'react'
import { LANGS, useLang, type Lang } from '@/i18n'
import { useRevealGroup } from '@/hooks/useReveal'

export default function Contacts() {
  const { lang, setLang, t } = useLang()
  const ref = useRevealGroup<HTMLElement>(90)
  
  // Состояния для отправки, загрузки и ошибок
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Состояние для сбора данных из полей формы
  const [formData, setFormData] = useState({
    name: '',
    phone: '', // Оставляем поле в стейте, чтобы бэкенд не ругался
    email: '', // Сюда будет попадать строка из инпута "E-mail или телефон"
    message: ''
  })

  // Обработчик ввода текста
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  };

  // Функция отправки данных формы на бэкенд
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Отправляем JSON-данные на send.php
      const response = await fetch('send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.status === 'success') {
        setSent(true)
        // Очищаем форму после успешной отправки
        setFormData({ name: '', phone: '', email: '', message: '' })
      } else {
        setError(result.message || 'Ошибка при отправке.')
      }
    } catch (err) {
      setError('Не удалось связаться с сервером.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer id="contacts" ref={ref} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-50" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-40">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="reveal tech-label mb-5" data-idx="0">
              {t.contacts.label}
            </p>
            <h2 className="reveal font-mont text-4xl font-extrabold tracking-tight text-white md:text-6xl" data-idx="1">
              {t.contacts.title}
            </h2>
            <p className="reveal mt-6 max-w-md text-[15px] leading-relaxed text-[#8a8f9e]" data-idx="2">
              {t.contacts.sub}
            </p>

            <div className="reveal mt-12 space-y-4" data-idx="3">
              <a href="mailto:info@qlti.ru" className="hover-tech block font-mont text-2xl font-bold text-white hover:text-[#3834ff] md:text-3xl">
                info@qlti.ru
              </a>
              <a href="tel:+74950000000" className="hover-tech block font-mont text-xl font-semibold text-[#c9ccd6] hover:text-[#3834ff]">
                +7 (495) 000-00-00
              </a>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#8a8f9e]">{t.contacts.addr}</p>
            </div>
          </div>

          {/* form */}
          <div className="reveal" data-idx="2">
            {sent ? (
              <div className="flex h-full min-h-[280px] items-center border border-[#3834ff] p-10">
                <p className="text-lg font-semibold text-white">{t.contacts.sent}</p>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                {[
                  { id: 'name', ph: t.contacts.name, type: 'text' },
                  { id: 'email', ph: t.contacts.email, type: 'text' }, // Возвращено исходное поле "E-mail или телефон"
                ].map((f) => (
                  <div key={f.id}>
                    <input
                      id={f.id}
                      required
                      type={f.type}
                      placeholder={f.ph}
                      value={formData[f.id as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-[rgba(243,243,243,0.2)] bg-transparent py-4 text-[15px] text-white placeholder:text-[#5b6070] focus:border-[#3834ff] focus:outline-none"
                    />
                  </div>
                ))}
                <div>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder={t.contacts.msg}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none border-0 border-b border-[rgba(243,243,243,0.2)] bg-transparent py-4 text-[15px] text-white placeholder:text-[#5b6070] focus:border-[#3834ff] focus:outline-none"
                  />
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary px-10 py-4 text-[12px] font-bold uppercase tracking-[0.22em] disabled:opacity-50"
                >
                  {loading ? (lang === 'ru' ? 'Отправка...' : 'Sending...') : t.contacts.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative hairline-t">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-10">
          <span className="font-mont text-lg font-extrabold tracking-tight text-white">QLTI</span>
          <p className="text-[11px] font-medium tracking-[0.08em] text-[#5b6070]">{t.contacts.rights}</p>
          <div className="flex gap-1">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code as Lang)}
                className={`hover-tech px-2 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${
                  lang === l.code ? 'text-[#3834ff]' : 'text-[#5b6070] hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
