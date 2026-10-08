import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'ru' | 'en' | 'zh'

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
]

const dict = {
  ru: {
    nav: { products: 'Продукты', solutions: 'Решения', advantages: 'Преимущества', about: 'О компании', contacts: 'Контакты' },
    hero: {
      label: 'Quality Led Tech Integration',
      l1: 'Технологии света.',
      l2: 'Точность интеграции.',
      sub: 'QLTI — интегратор LED-решений полного цикла. Проектируем, поставляем, монтируем и обслуживаем светодиодные экраны для бизнеса, городов и событий.',
      cta1: 'Обсудить проект',
      cta2: 'Каталог серий',
      scroll: 'листайте вниз',
    },
    stats: [
      { n: '120+', t: 'реализованных проектов' },
      { n: '15', t: 'лет экспертизы команды' },
      { n: '40+', t: 'городов присутствия' },
      { n: '98%', t: 'SLA по сервисным заявкам' },
    ],
    marquee: ['MicroLED', 'COB', 'Fine Pitch', 'HDR', 'IP65', 'Калибровка', 'Резервирование', '24/7 Service', 'OEM / ODM', 'Turnkey'],
    products: {
      label: 'Продуктовые линейки',
      title: 'Серии экранов QLTI',
      sub: 'Четыре серии закрывают любой сценарий — от телестудии до стадионного фасада.',
      details: 'Подробнее',
      items: [
        { name: 'STELLA', tag: 'MicroLED · COB', pitch: 'P0.6 – P1.2', desc: 'Флагманская MicroLED-серия на COB-технологии: глубокий чёрный, HDR и полное фронтальное обслуживание для ТВ-студий, кинозалов и ситуационных центров.', feats: ['COB-упаковка', 'Двойное резервирование', 'Фронтальный сервис'] },
        { name: 'VECTOR', tag: 'Indoor Fine Pitch', pitch: 'P0.9 – P2.5', desc: 'Тонкопиксельные внутренние экраны для ритейла, шоурумов и корпоративных пространств. Бесшовный кабинет 16:9 — прямая замена LCD-видеостен.', feats: ['Кабинет 16:9', 'VESA / настенный монтаж', 'Энергосбережение'] },
        { name: 'NOVA', tag: 'Outdoor', pitch: 'P2.5 – P10', desc: 'Уличные экраны с защитой IP65 и яркостью до 10 000 нит. Фасады, медиафасады, стадионы и транспортные узлы — в любую погоду.', feats: ['IP65', 'До 10 000 нит', 'Автояркость'] },
        { name: 'ORBITA', tag: 'Rental & Stage', pitch: 'P2.6 – P4.8', desc: 'Арендные решения для концертов, выставок и событий. Быстросборные кабинеты, кривые и подвесные конфигурации любой геометрии.', feats: ['Быстрая сборка', 'Кривые конфигурации', 'Flight-case логистика'] },
      ],
    },
    solutions: {
      label: 'Отраслевые решения',
      title: 'Где работают наши экраны',
      items: [
        { name: 'Ритейл и DOOH', desc: 'Витрины, медиафасады и рекламные сети, которые останавливают трафик.' },
        { name: 'Диспетчерские и ЦОД', desc: 'Ситуационные центры 24/7 с резервированием сигнала и питания.' },
        { name: 'Спорт и арены', desc: 'Кубы, периметры и табло с сертификацией для спортивных объектов.' },
        { name: 'Корпоративные пространства', desc: 'Переговорные, лобби и конференц-залы формата all-in-one.' },
        { name: 'События и шоу', desc: 'Сценическая графика, XR-студии и туровые конфигурации.' },
        { name: 'Городская среда', desc: 'Транспортные узлы, навигация и городские медиаформаты.' },
      ],
    },
    advantages: {
      label: 'Почему QLTI',
      title: 'Инженерия, которой доверяют',
      items: [
        { t: 'Полный цикл', d: 'Аудит объекта, проектирование, поставка, монтаж, пусконаладка и контент-настройка — под одним договором.' },
        { t: 'COB-технология', d: 'Работаем с передовой упаковкой COB: защита пикселей, контраст и срок службы выше SMD-класса.' },
        { t: 'Резервирование', d: 'Дублирование блоков питания и приёмных карт — экран не гаснет даже при отказе компонента.' },
        { t: 'Фронтальный сервис', d: 'Обслуживание модулей с лицевой стороны — экран можно ставить вплотную к стене.' },
        { t: 'Калибровка и цвет', d: 'Покадровая калибровка яркости и цвета, точность ΔE < 2 на всей площади экрана.' },
        { t: 'Сервис 24/7', d: 'Собственная сервисная служба, склад ЗИП и SLA до 4 часов на реагирование.' },
      ],
    },
    about: {
      label: 'О компании',
      title: 'Quality Led Tech Integration',
      p1: 'QLTI — российский интегратор светодиодных решений. Мы объединяем мировые технологии MicroLED и COB с инженерной культурой полного цикла: от проектной документации до послегарантийного сервиса.',
      p2: 'Наша миссия — делать визуальные технологии надёжной инфраструктурой бизнеса: экран должен работать годами, а не до конца гарантии.',
      v1: 'Качество прежде всего',
      v2: 'Инновации и лидерство',
      v3: 'Прозрачность процессов',
      v4: 'Долгосрочное партнёрство',
    },
    contacts: {
      label: 'Контакты',
      title: 'Обсудим ваш проект?',
      sub: 'Оставьте заявку — инженер QLTI свяжется с вами в течение рабочего дня и подготовит предварительный расчёт.',
      name: 'Ваше имя',
      email: 'E-mail или телефон',
      msg: 'О проекте',
      send: 'Отправить заявку',
      sent: 'Заявка отправлена. Мы свяжемся с вами в ближайшее время.',
      addr: 'Москва, Россия',
      rights: '© 2026 QLTI — Quality Led Tech Integration. Все права защищены.',
    },
  },

  en: {
    nav: { products: 'Products', solutions: 'Solutions', advantages: 'Advantages', about: 'About', contacts: 'Contacts' },
    hero: {
      label: 'Quality Led Tech Integration',
      l1: 'Light technology.',
      l2: 'Integration precision.',
      sub: 'QLTI is a full-cycle LED solutions integrator. We design, supply, install and service LED displays for business, cities and events.',
      cta1: 'Discuss a project',
      cta2: 'Product series',
      scroll: 'scroll down',
    },
    stats: [
      { n: '120+', t: 'completed projects' },
      { n: '15', t: 'years of team expertise' },
      { n: '40+', t: 'cities of presence' },
      { n: '98%', t: 'service request SLA' },
    ],
    marquee: ['MicroLED', 'COB', 'Fine Pitch', 'HDR', 'IP65', 'Calibration', 'Redundancy', '24/7 Service', 'OEM / ODM', 'Turnkey'],
    products: {
      label: 'Product lines',
      title: 'QLTI display series',
      sub: 'Four series cover any scenario — from a TV studio to a stadium facade.',
      details: 'View details',
      items: [
        { name: 'STELLA', tag: 'MicroLED · COB', pitch: 'P0.6 – P1.2', desc: 'Flagship MicroLED series built on COB technology: deep blacks, HDR and full front maintenance for TV studios, cinemas and control rooms.', feats: ['COB packaging', 'Dual redundancy', 'Front service'] },
        { name: 'VECTOR', tag: 'Indoor Fine Pitch', pitch: 'P0.9 – P2.5', desc: 'Fine-pitch indoor displays for retail, showrooms and corporate spaces. Seamless 16:9 cabinet — a direct replacement for LCD video walls.', feats: ['16:9 cabinet', 'VESA / wall mount', 'Energy saving'] },
        { name: 'NOVA', tag: 'Outdoor', pitch: 'P2.5 – P10', desc: 'Outdoor displays with IP65 protection and up to 10,000 nits brightness. Facades, media facades, stadiums and transport hubs — in any weather.', feats: ['IP65', 'Up to 10,000 nits', 'Auto brightness'] },
        { name: 'ORBITA', tag: 'Rental & Stage', pitch: 'P2.6 – P4.8', desc: 'Rental solutions for concerts, exhibitions and events. Quick-lock cabinets, curved and hanging configurations of any geometry.', feats: ['Quick assembly', 'Curved configurations', 'Flight-case logistics'] },
      ],
    },
    solutions: {
      label: 'Industry solutions',
      title: 'Where our displays work',
      items: [
        { name: 'Retail & DOOH', desc: 'Storefronts, media facades and ad networks that stop the traffic.' },
        { name: 'Control rooms & NOCs', desc: '24/7 operation centers with signal and power redundancy.' },
        { name: 'Sports & arenas', desc: 'Cubes, perimeters and scoreboards certified for sports venues.' },
        { name: 'Corporate spaces', desc: 'Meeting rooms, lobbies and all-in-one conference halls.' },
        { name: 'Events & shows', desc: 'Stage graphics, XR studios and touring configurations.' },
        { name: 'Urban environment', desc: 'Transport hubs, wayfinding and city media formats.' },
      ],
    },
    advantages: {
      label: 'Why QLTI',
      title: 'Engineering you can trust',
      items: [
        { t: 'Full cycle', d: 'Site audit, design, supply, installation, commissioning and content setup — under a single contract.' },
        { t: 'COB technology', d: 'We work with advanced COB packaging: pixel protection, contrast and lifetime beyond SMD class.' },
        { t: 'Redundancy', d: 'Dual power supplies and receiver cards — the screen stays on even if a component fails.' },
        { t: 'Front service', d: 'Front-side module maintenance — the screen can be installed flush against the wall.' },
        { t: 'Calibration & color', d: 'Frame-by-frame brightness and color calibration, ΔE < 2 accuracy across the entire screen.' },
        { t: '24/7 service', d: 'In-house service team, spare parts stock and SLA down to 4-hour response.' },
      ],
    },
    about: {
      label: 'About us',
      title: 'Quality Led Tech Integration',
      p1: 'QLTI is a Russian LED solutions integrator. We combine world-class MicroLED and COB technologies with a full-cycle engineering culture: from design documentation to post-warranty service.',
      p2: 'Our mission is to make visual technology a reliable business infrastructure: a screen should work for years, not just until the warranty expires.',
      v1: 'Quality above all',
      v2: 'Innovation & leadership',
      v3: 'Process transparency',
      v4: 'Long-term partnership',
    },
    contacts: {
      label: 'Contacts',
      title: 'Let’s discuss your project',
      sub: 'Leave a request — a QLTI engineer will contact you within one business day and prepare a preliminary estimate.',
      name: 'Your name',
      email: 'E-mail or phone',
      msg: 'About the project',
      send: 'Send request',
      sent: 'Request sent. We will get back to you shortly.',
      addr: 'Moscow, Russia',
      rights: '© 2026 QLTI — Quality Led Tech Integration. All rights reserved.',
    },
  },

  zh: {
    nav: { products: '产品', solutions: '解决方案', advantages: '优势', about: '关于我们', contacts: '联系我们' },
    hero: {
      label: 'Quality Led Tech Integration',
      l1: '光之科技。',
      l2: '集成之精。',
      sub: 'QLTI 是全周期 LED 解决方案集成商。我们为企业、城市与活动提供 LED 显示屏的设计、供应、安装与运维服务。',
      cta1: '咨询项目',
      cta2: '产品系列',
      scroll: '向下滚动',
    },
    stats: [
      { n: '120+', t: '已完成项目' },
      { n: '15', t: '年团队经验' },
      { n: '40+', t: '覆盖城市' },
      { n: '98%', t: '服务SLA达成率' },
    ],
    marquee: ['MicroLED', 'COB', 'Fine Pitch', 'HDR', 'IP65', '逐点校正', '冗余备份', '24/7 服务', 'OEM / ODM', '交钥匙工程'],
    products: {
      label: '产品线',
      title: 'QLTI 显示屏系列',
      sub: '四大系列覆盖任意场景——从电视演播室到体育场外立面。',
      details: '查看详情',
      items: [
        { name: 'STELLA', tag: 'MicroLED · COB', pitch: 'P0.6 – P1.2', desc: '基于 COB 技术的旗舰 MicroLED 系列：深邃黑场、HDR 与完全前维护，适用于演播室、影院与指挥中心。', feats: ['COB 封装', '双重冗余', '前维护'] },
        { name: 'VECTOR', tag: '室内小间距', pitch: 'P0.9 – P2.5', desc: '面向零售、展厅与企业空间的室内小间距显示屏。16:9 无缝箱体，可直接替代 LCD 拼接墙。', feats: ['16:9 箱体', 'VESA / 壁挂', '节能设计'] },
        { name: 'NOVA', tag: '户外系列', pitch: 'P2.5 – P10', desc: 'IP65 防护、亮度高达 10,000 尼特的户外显示屏。建筑外立面、媒体幕墙、体育场与交通枢纽，全天候运行。', feats: ['IP65', '高达 10,000 尼特', '自动亮度'] },
        { name: 'ORBITA', tag: '租赁与舞台', pitch: 'P2.6 – P4.8', desc: '面向演唱会、展会与活动的租赁方案。快锁箱体，支持弧形与吊装等任意几何造型。', feats: ['快速拼装', '弧形配置', '航空箱物流'] },
      ],
    },
    solutions: {
      label: '行业解决方案',
      title: '我们的屏幕应用在哪里',
      items: [
        { name: '零售与 DOOH', desc: '橱窗、媒体幕墙与广告网络，让客流驻足。' },
        { name: '指挥调度中心', desc: '7×24 小时运行的指挥中心，信号与电源双重冗余。' },
        { name: '体育与场馆', desc: '斗型屏、围栏屏与记分屏，符合体育场馆认证要求。' },
        { name: '企业空间', desc: '会议室、大堂与一体机式会议厅。' },
        { name: '活动与演出', desc: '舞台视觉、XR 演播室与巡演配置。' },
        { name: '城市环境', desc: '交通枢纽、导视系统与城市媒体形式。' },
      ],
    },
    advantages: {
      label: '为什么选择 QLTI',
      title: '值得信赖的工程能力',
      items: [
        { t: '全周期服务', d: '现场勘察、设计、供货、安装、调试与内容配置——一份合同全包。' },
        { t: 'COB 技术', d: '采用先进 COB 封装：像素防护、对比度与寿命全面超越 SMD。' },
        { t: '冗余备份', d: '电源与接收卡双重冗余——单点故障屏幕也不熄灭。' },
        { t: '前维护', d: '模组正面维护——屏幕可贴墙安装。' },
        { t: '校正与色彩', d: '逐点亮度与色彩校正，整屏 ΔE < 2。' },
        { t: '24/7 服务', d: '自有服务团队、备件库与最快 4 小时响应 SLA。' },
      ],
    },
    about: {
      label: '关于我们',
      title: 'Quality Led Tech Integration',
      p1: 'QLTI 是俄罗斯 LED 解决方案集成商。我们将世界级的 MicroLED 与 COB 技术和全周期工程文化相结合：从设计文档到质保外服务。',
      p2: '我们的使命是让视觉技术成为企业可靠的基础设施：屏幕应常年稳定运行，而非仅仅撑过保修期。',
      v1: '质量至上',
      v2: '创新与领先',
      v3: '流程透明',
      v4: '长期合作',
    },
    contacts: {
      label: '联系我们',
      title: '谈谈您的项目？',
      sub: '提交需求——QLTI 工程师将在一个工作日内与您联系，并提供初步方案与报价。',
      name: '您的姓名',
      email: '邮箱或电话',
      msg: '项目简介',
      send: '提交需求',
      sent: '已提交。我们会尽快与您联系。',
      addr: '俄罗斯 · 莫斯科',
      rights: '© 2026 QLTI — Quality Led Tech Integration. 版权所有。',
    },
  },
} as const

export type Dict = (typeof dict)['ru']

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
}

const Ctx = createContext<LangCtx>({ lang: 'ru', setLang: () => {}, t: dict.ru })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('qlti-lang')
    return saved === 'en' || saved === 'zh' ? saved : 'ru'
  })
  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('qlti-lang', l)
    document.documentElement.lang = l
  }
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] as Dict }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
