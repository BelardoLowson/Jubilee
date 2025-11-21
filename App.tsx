import { ImageWithFallback } from './components/figma/ImageWithFallback';
import heroImage from 'figma:asset/509192f37ae886758198e41ec968ff0da290da4a.png';
import contentImage from 'figma:asset/ac4fdfe1b570793fcfce3d98aa7c1c245325b5aa.png';
import { motion } from 'motion/react';
import { Heart, MapPin, Clock, Phone, Calendar, Sparkles, CheckCircle, XCircle, Flower2 } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // URL Google Apps Script (замените на ваш URL после настройки)
  const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

  const handleSubmit = async (willAttend: boolean) => {
    if (!name.trim()) {
      alert('Пожалуйста, укажите ваше ФИО');
      return;
    }

    setIsSubmitting(true);

    try {
      // Отправка данных в Google Таблицу
      const formData = new FormData();
      formData.append('name', name);
      formData.append('willAttend', willAttend ? 'Приду' : 'Не приду');
      formData.append('timestamp', new Date().toLocaleString('ru-RU'));

      const scriptResponse = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Необходимо для Google Apps Script
      });

      // Устанавливаем состояние после отправки
      setResponse(willAttend ? 'yes' : 'no');
      setSubmitted(true);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      // Все равно показываем подтверждение пользователю
      setResponse(willAttend ? 'yes' : 'no');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 py-8 px-4 overflow-x-hidden relative">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-36 h-36 bg-blue-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      <div className="max-w-[1200px] mx-auto relative">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-purple-100/30 to-blue-100/50" />

            <div className="relative px-8 py-12 md:px-12 md:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Hero Text */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span className="tracking-wider uppercase">Юбилей Лилии</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent text-2xl md:text-3xl font-semibold italic"
                  >
                    <i>Дорогие мои друзья, родные и близкие!</i>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{ fontSize: '17px' }}
                  >
                    У меня есть прекрасный повод провести несколько незабываемых часов в кругу
                    самых близких и дорогих мне людей.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="space-y-3 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white"
                      >
                        <Calendar className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <p className="opacity-70">06 декабря 2025 года</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white"
                      >
                        <Clock className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <p className="opacity-70">Начало в 17:00 • сбор гостей с 16:00</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 shadow-lg"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-start gap-3"
                    >
                      <Heart className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                      <p style={{ fontSize: '15px' }}>
                        Буду очень рада видеть Вас на торжестве по случаю моего юбилейного Дня Рождения!
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Hero Photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-[32px] blur-2xl opacity-50" />
                    <ImageWithFallback
                      src={heroImage}
                      alt="Лилия юбилей"
                      className="relative w-full rounded-[32px] shadow-2xl border-4 border-white"
                    />
                  </motion.div>

                  {/* Floating particles */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full"
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute top-1/4 -right-2 w-4 h-4 bg-blue-400 rounded-full"
                    animate={{
                      x: [0, 10, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
            {/* Content Text */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/20 p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <h2 className="mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-xl md:text-2xl font-semibold italic">
                  Приглашение
                </h2>

                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{ fontSize: '15px' }}
                  >
                    Любимые мои,
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: '15px' }}
                  >
                    Этот вечер я хочу разделить с теми, кто дарит мне поддержку, тепло и вдохновение.
                    Пусть наш праздник будет наполнен светом, улыбками, воспоминаниями и приятными сюрпризами.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    style={{ fontSize: '15px' }}
                  >
                    Возьмите с собой хорошее настроение и желание радоваться жизни вместе со мной.
                    Ваше присутствие сделает этот день по-настоящему особенным.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    style={{ fontSize: '15px' }}
                    className="pt-2"
                  >
                    До скорой встречи! С любовью, Лилия.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-[400px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-[32px] blur-2xl opacity-40" />
                <ImageWithFallback
                  src={contentImage}
                  alt="Портрет Лилии"
                  className="relative w-full rounded-[32px] shadow-2xl border-4 border-white"
                />

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-3 -right-3 w-8 h-8 bg-pink-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Details Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/20 p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center text-xl md:text-2xl font-semibold"
            >
              Детали мероприятия
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 shadow-lg transition-colors"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex-shrink-0"
                >
                  <Calendar className="w-6 h-6" />
                </motion.div>
                <div>
                  <p className="opacity-70 mb-1" style={{ fontSize: '13px' }}>
                    Дата и время
                  </p>
                  <p style={{ fontSize: '15px' }}>06 декабря 2025 г., начало в 17:00 (сбор гостей в 16:00)</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 shadow-lg transition-colors"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white flex-shrink-0"
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
                <div>
                  <p className="opacity-70 mb-1" style={{ fontSize: '13px' }}>
                    Место
                  </p>
                  <p style={{ fontSize: '15px' }}>Банкетный зал «CRYSTALL HAII»</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 shadow-lg transition-colors"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex-shrink-0"
                >
                  <MapPin className="w-6 h-6" />
                </motion.div>
                <div>
                  <p className="opacity-70 mb-1" style={{ fontSize: '13px' }}>
                    Адрес
                  </p>
                  <p style={{ fontSize: '15px' }}>г. Якутск, ул. Кулаковского, 4</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 shadow-lg transition-colors"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex-shrink-0"
                >
                  <Phone className="w-6 h-6" />
                </motion.div>
                <div>
                  <p className="opacity-70 mb-1" style={{ fontSize: '13px' }}>
                    Телефон
                  </p>
                  <p style={{ fontSize: '15px' }}>+7 914 280-77-87</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* RSVP Form */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/20 p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-200/30 to-blue-200/30 rounded-full blur-3xl" />

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-center text-xl md:text-2xl font-semibold relative"
            >
              Подтверждение присутствия
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center text-gray-600 mb-8"
              style={{ fontSize: '15px' }}
            >
              Пожалуйста, сообщите о своём решении
            </motion.p>

            {!submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="max-w-md mx-auto space-y-6 relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите ваше ФИО"
                    className="w-full px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-white/40 shadow-lg focus:outline-none focus:border-pink-300 transition-all"
                    style={{ fontSize: '15px' }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSubmit(true)}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CheckCircle className="w-6 h-6" />
                    </motion.div>
                    <span className="tracking-wide">Приду</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSubmit(false)}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-xl hover:shadow-2xl transition-all"
                  >
                    <XCircle className="w-6 h-6" />
                    <span className="tracking-wide">Не приду</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="max-w-md mx-auto relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className={`p-8 rounded-2xl ${
                    response === 'yes'
                      ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200'
                      : 'bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-200'
                  } shadow-xl text-center relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 ${
                      response === 'yes'
                        ? 'bg-gradient-to-br from-green-200/30 to-emerald-200/30'
                        : 'bg-gradient-to-br from-gray-200/30 to-slate-200/30'
                    } blur-3xl`}
                  />

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', delay: 0.3 }}
                    className="relative"
                  >
                    {response === 'yes' ? (
                      <div className="flex justify-center mb-4">
                        <div className="p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                          <CheckCircle className="w-12 h-12" />
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center mb-4">
                        <div className="p-4 rounded-full bg-gradient-to-br from-gray-500 to-slate-500 text-white">
                          <XCircle className="w-12 h-12" />
                        </div>
                      </div>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative"
                  >
                    <p className="mb-2" style={{ fontSize: '16px' }}>
                      {name}
                    </p>
                    <p
                      className={response === 'yes' ? 'text-green-700' : 'text-gray-600'}
                      style={{ fontSize: '15px' }}
                    >
                      {response === 'yes'
                        ? 'Спасибо! Будем рады видеть вас на празднике!'
                        : 'Жаль, что вы не сможете прийти. Будем скучать!'}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setResponse(null);
                      }}
                      className="mt-6 px-6 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all"
                      style={{ fontSize: '14px' }}
                    >
                      Изменить ответ
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </motion.section>

        {/* Dress Code Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/20 p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-rose-200/30 via-pink-200/30 to-amber-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-purple-100/40 to-blue-100/40 rounded-full blur-3xl" />

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent text-center text-xl md:text-2xl font-semibold relative"
            >
              Дресс-код
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center text-gray-700 mb-4 relative"
              style={{ fontSize: '15px' }}
            >
              Для меня главное ваше присутствие! Но буду рада, если вы поддержите дресс-код моего юбилея
              в выбранной цветовой гамме.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center text-gray-600 mb-8 relative"
              style={{ fontSize: '14px' }}
            >
              Предпочтительные оттенки:
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
              {/* Белый */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-white to-slate-100 border border-slate-200/60 shadow-md"
              >
                <div className="p-3 rounded-full bg-white shadow">
                  <Flower2 className="w-6 h-6 text-slate-500" />
                </div>
                <div>
                  <p className="font-medium text-slate-700" style={{ fontSize: '15px' }}>
                    Белый
                  </p>
                  <p className="text-slate-500" style={{ fontSize: '13px' }}>
                    Нежный, светлый, воздушный образ.
                  </p>
                </div>
              </motion.div>

              {/* Бежевый */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/70 shadow-md"
              >
                <div className="p-3 rounded-full bg-amber-50 shadow">
                  <Flower2 className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-amber-800" style={{ fontSize: '15px' }}>
                    Бежевый
                  </p>
                  <p className="text-amber-700/80" style={{ fontSize: '13px' }}>
                    Тёплые натуральные нюдовые оттенки.
                  </p>
                </div>
              </motion.div>

              {/* Молочный */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-slate-50 border border-amber-100/80 shadow-md"
              >
                <div className="p-3 rounded-full bg-amber-50 shadow">
                  <Flower2 className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="font-medium text-amber-800" style={{ fontSize: '15px' }}>
                    Молочный
                  </p>
                  <p className="text-amber-700/80" style={{ fontSize: '13px' }}>
                    Мягкий кремовый, сливочные оттенки.
                  </p>
                </div>
              </motion.div>

              {/* Розовый */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-100 border border-rose-200 shadow-md"
              >
                <div className="p-3 rounded-full bg-rose-50 shadow">
                  <Flower2 className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <p className="font-medium text-rose-700" style={{ fontSize: '15px' }}>
                    Розовый
                  </p>
                  <p className="text-rose-600/90" style={{ fontSize: '13px' }}>
                    От нежно-розового до пудрового.
                  </p>
                </div>
              </motion.div>

              {/* Пастельные тона */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 border border-purple-100/70 shadow-md sm:col-span-2 lg:col-span-2"
              >
                <div className="p-3 rounded-full bg-white/80 shadow">
                  <Flower2 className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <p className="font-medium text-purple-700" style={{ fontSize: '15px' }}>
                    Пастельные тона
                  </p>
                  <p className="text-purple-600/90" style={{ fontSize: '13px' }}>
                    Нежные, мягкие оттенки: пудровый, лавандовый, светло-голубой и другие
                    романтичные пастели.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center text-gray-600 relative"
              style={{ fontSize: '14px' }}
            >
              Небольшие цветочные аксессуары — брошь, заколка, украшения или принт на одежде —
              будут особенно уместны и создадут атмосферу нежного праздника.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-8 py-6"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-gray-600"
            style={{ fontSize: '14px' }}
          >
            Если у Вас изменятся планы, пожалуйста, дайте знать до 29 ноября.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
