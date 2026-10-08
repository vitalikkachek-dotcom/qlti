import React, { useState } from 'react';

export default function Contacts() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Стейт для хранения данных полей формы
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Функция отслеживания изменений в инпутах
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Функция отправки данных на ваш сервер Рег.ру
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
      } else {
        alert('Произошла ошибка на сервере при отправке.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось связаться с сервером.');
    } finally {
      setLoading(false);
    }
  };

  return (
    /* Добавлен адаптивный отступ pt-24 (для мобильных), чтобы каталог серий больше не наезжал */
    <section id="contacts" className="pt-24 md:pt-12 pb-12 w-full text-white">
      <div className="reveal" data-idx="2">
        {sent ? (
          <div className="flex h-full min-h-[200px] items-center border border-[#3834ff] p-6 justify-center">
            <p className="text-lg font-semibold text-white">Заявка отправлена. Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form className="space-y-8 max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-gray-700 p-3 rounded focus:outline-none focus:border-[#3834ff]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email или телефон</label>
                <input 
                  type="text" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-gray-700 p-3 rounded focus:outline-none focus:border-[#3834ff]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">О проекте</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border border-gray-700 p-3 rounded focus:outline-none focus:border-[#3834ff]"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#3834ff] text-white font-semibold py-4 rounded hover:bg-[#2a27cc] transition duration-200 disabled:opacity-50"
            >
              {loading ? 'Отправка...' : 'Отправить заявку'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
