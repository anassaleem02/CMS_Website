import { Hero } from './models/hero.model';
import { Product, ProductCategory } from './models/product.model';
import { Testimonial } from './models/testimonial.model';
import { Feature } from './models/feature.model';
import { ServiceItem } from './models/service-item.model';
import { NavItem } from './models/nav-item.model';
import { SiteSettings } from './models/site-settings.model';

export const MOCK_HERO: Hero = {
  id: 1,
  headline: 'Power Your Future with Solar Energy',
  subheadline:
    'Premium solar inverters, lithium batteries & panels with 5-year warranty. Save energy, reduce bills, and embrace sustainable living.',
  primaryButtonText: 'Explore Products',
  primaryButtonUrl: '/products',
  secondaryButtonText: 'Get Free Quote',
  secondaryButtonUrl: '/contact',
  backgroundImageUrl: '/images/hero/solar_img.jpg',
  isActive: true,
  stats: [
    { id: 1, value: '500+', label: 'Happy Customers', displayOrder: 1 },
    { id: 2, value: '10MW+', label: 'Power Generated', displayOrder: 2 },
    { id: 3, value: '5 Years', label: 'Warranty', displayOrder: 3 },
    { id: 4, value: '98.5%', label: 'Efficiency', displayOrder: 4 },
  ],
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'S.O Series 1.6 KW Inverter',
    slug: 'so-series-1-6-kw',
    shortDescription: 'Compact 1600W pure sine wave inverter ideal for small homes and offices.',
    description:
      'The S.O Series 1.6 KW Inverter delivers reliable pure sine wave power output, perfect for powering essential home appliances. With its 12V input and 98.5% conversion efficiency, it ensures maximum energy utilization. The built-in MPPT charge controller optimizes solar panel performance, while advanced protection features guard against overload, short circuit, and lightning.',
    category: ProductCategory.Inverter,
    categoryName: 'Inverter',
    isFeatured: true,
    badgeLabel: 'Featured',
    isActive: true,
    displayOrder: 1,
    pdfBrochureUrl: '',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    images: [
      {
        id: 1,
        imageUrl: '/images/products/fms1.6.jpeg',
        altText: 'S.O Series 1.6 KW Inverter',
        isPrimary: true,
        displayOrder: 1,
      },
      {
        id: 2,
        imageUrl: '/images/products/inverter-1.6kw.png',
        altText: 'S.O Series 1.6 KW Inverter Features',
        isPrimary: false,
        displayOrder: 2,
      },
    ],
    specifications: [
      { id: 1, key: 'Power Output', value: '1600W', displayOrder: 1 },
      { id: 2, key: 'Input Voltage', value: '12V DC', displayOrder: 2 },
      { id: 3, key: 'Wave Form', value: 'Pure Sine Wave', displayOrder: 3 },
      { id: 4, key: 'Efficiency', value: '98.5%', displayOrder: 4 },
      { id: 5, key: 'Warranty', value: '5 Years', displayOrder: 5 },
      { id: 6, key: 'Charge Controller', value: 'MPPT Built-in', displayOrder: 6 },
      { id: 7, key: 'Protection', value: 'Overload, Short Circuit, Lightning', displayOrder: 7 },
    ],
    primaryImage: {
      id: 1,
      imageUrl: '/images/products/fms1.6.jpeg',
      altText: 'S.O Series 1.6 KW Inverter',
      isPrimary: true,
      displayOrder: 1,
    },
  },
  {
    id: 2,
    name: 'S.O Series 4 KW Inverter',
    slug: 'so-series-4-kw',
    shortDescription: '4000W hybrid inverter for medium-sized homes with 48V battery system.',
    description:
      'The S.O Series 4 KW Inverter is the perfect solution for medium-sized homes and small businesses. Operating on a 48V system, it delivers 4000W of pure sine wave power with exceptional reliability. The intelligent MPPT charge controller maximizes energy harvest from solar panels while the smart battery management system extends battery lifespan.',
    category: ProductCategory.Inverter,
    categoryName: 'Inverter',
    isFeatured: false,
    badgeLabel: 'Popular',
    isActive: true,
    displayOrder: 2,
    pdfBrochureUrl: '',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    images: [
      {
        id: 3,
        imageUrl: '/images/products/fms4.jpeg',
        altText: 'S.O Series 4 KW Inverter',
        isPrimary: true,
        displayOrder: 1,
      },
      {
        id: 4,
        imageUrl: '/images/products/inverter-4kw.png',
        altText: 'S.O Series 4 KW Inverter Features',
        isPrimary: false,
        displayOrder: 2,
      },
    ],
    specifications: [
      { id: 8, key: 'Power Output', value: '4000W', displayOrder: 1 },
      { id: 9, key: 'Input Voltage', value: '48V DC', displayOrder: 2 },
      { id: 10, key: 'Wave Form', value: 'Pure Sine Wave', displayOrder: 3 },
      { id: 11, key: 'Efficiency', value: '98.5%', displayOrder: 4 },
      { id: 12, key: 'Warranty', value: '5 Years', displayOrder: 5 },
      { id: 13, key: 'Charge Controller', value: 'MPPT Built-in', displayOrder: 6 },
      { id: 14, key: 'Battery Compatibility', value: 'Lithium / Lead Acid', displayOrder: 7 },
    ],
    primaryImage: {
      id: 3,
      imageUrl: '/images/products/fms4.jpeg',
      altText: 'S.O Series 4 KW Inverter',
      isPrimary: true,
      displayOrder: 1,
    },
  },
  {
    id: 3,
    name: 'S.O Series 6.2 KW Inverter',
    slug: 'so-series-6-2-kw',
    shortDescription: '6200W high-power hybrid inverter for large homes and commercial use.',
    description:
      'The S.O Series 6.2 KW Inverter is our flagship model, designed for large homes and commercial applications. With a massive 6200W output on a 48V system, it handles heavy loads including industrial ACs and machinery. The advanced MPPT technology and intelligent energy management system provide unmatched performance and reliability.',
    category: ProductCategory.Inverter,
    categoryName: 'Inverter',
    isFeatured: true,
    badgeLabel: 'Best Seller',
    isActive: true,
    displayOrder: 3,
    pdfBrochureUrl: '',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    images: [
      {
        id: 5,
        imageUrl: '/images/products/fms4.jpeg',
        altText: 'S.O Series 6.2 KW Inverter',
        isPrimary: true,
        displayOrder: 1,
      },
      {
        id: 6,
        imageUrl: '/images/products/inverter-6.2kw.png',
        altText: 'S.O Series 6.2 KW Inverter Features',
        isPrimary: false,
        displayOrder: 2,
      },
    ],
    specifications: [
      { id: 15, key: 'Power Output', value: '6200W', displayOrder: 1 },
      { id: 16, key: 'Input Voltage', value: '48V DC', displayOrder: 2 },
      { id: 17, key: 'Wave Form', value: 'Pure Sine Wave', displayOrder: 3 },
      { id: 18, key: 'Efficiency', value: '98.5%', displayOrder: 4 },
      { id: 19, key: 'Warranty', value: '5 Years', displayOrder: 5 },
      { id: 20, key: 'Max Solar Input', value: '6500W', displayOrder: 6 },
      { id: 21, key: 'Battery Compatibility', value: 'Lithium / Lead Acid', displayOrder: 7 },
    ],
    primaryImage: {
      id: 5,
      imageUrl: '/images/products/fms4.jpeg',
      altText: 'S.O Series 6.2 KW Inverter',
      isPrimary: true,
      displayOrder: 1,
    },
  },
  {
    id: 4,
    name: 'S.O Lithium Battery 51.2V 105Ah',
    slug: 'so-lithium-battery-51-2v-105ah',
    shortDescription: 'LiFePO4 lithium battery 51.2V 105Ah with built-in BMS for solar systems.',
    description:
      'The S.O Lithium Battery 51.2V 105Ah uses advanced LiFePO4 chemistry for maximum safety and longevity. With over 6000 charge cycles and a built-in Battery Management System (BMS), it provides reliable energy storage for your solar system. The compact design and lightweight construction make installation easy.',
    category: ProductCategory.Battery,
    categoryName: 'Battery',
    isFeatured: false,
    badgeLabel: undefined,
    isActive: true,
    displayOrder: 4,
    pdfBrochureUrl: '',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    images: [
      {
        id: 7,
        imageUrl: '/images/products/lithium-battery-105ah.jpeg',
        altText: 'S.O Lithium Battery 51.2V 105Ah',
        isPrimary: true,
        displayOrder: 1,
      },
      {
        id: 8,
        imageUrl: '/images/products/battery-105ah.png',
        altText: 'S.O Lithium Battery 105Ah Features',
        isPrimary: false,
        displayOrder: 2,
      },
    ],
    specifications: [
      { id: 22, key: 'Capacity', value: '105Ah', displayOrder: 1 },
      { id: 23, key: 'Voltage', value: '51.2V', displayOrder: 2 },
      { id: 24, key: 'Chemistry', value: 'LiFePO4', displayOrder: 3 },
      { id: 25, key: 'Cycle Life', value: '6000+ Cycles', displayOrder: 4 },
      { id: 26, key: 'Warranty', value: '5 Years', displayOrder: 5 },
      { id: 27, key: 'BMS', value: 'Built-in', displayOrder: 6 },
      { id: 28, key: 'Depth of Discharge', value: '95%', displayOrder: 7 },
    ],
    primaryImage: {
      id: 7,
      imageUrl: '/images/products/lithium-battery-105ah.jpeg',
      altText: 'S.O Lithium Battery 51.2V 105Ah',
      isPrimary: true,
      displayOrder: 1,
    },
  },
  {
    id: 5,
    name: 'S.O Lithium Battery 51.2V 280Ah',
    slug: 'so-lithium-battery-51-2v-280ah',
    shortDescription: 'High-capacity 280Ah LiFePO4 battery for large solar installations.',
    description:
      'The S.O Lithium Battery 51.2V 280Ah is our highest capacity battery, designed for large solar installations and commercial applications. The LiFePO4 chemistry ensures maximum safety, stable performance, and an exceptional cycle life of over 6000 cycles. The integrated BMS provides complete protection for your investment.',
    category: ProductCategory.Battery,
    categoryName: 'Battery',
    isFeatured: true,
    badgeLabel: 'High Capacity',
    isActive: true,
    displayOrder: 5,
    pdfBrochureUrl: '',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    images: [
      {
        id: 9,
        imageUrl: '/images/products/lithium-280ah.jpeg',
        altText: 'S.O Lithium Battery 51.2V 280Ah',
        isPrimary: true,
        displayOrder: 1,
      },
      {
        id: 10,
        imageUrl: '/images/products/battery-280ah.png',
        altText: 'S.O Lithium Battery 280Ah Features',
        isPrimary: false,
        displayOrder: 2,
      },
    ],
    specifications: [
      { id: 29, key: 'Capacity', value: '280Ah', displayOrder: 1 },
      { id: 30, key: 'Voltage', value: '51.2V', displayOrder: 2 },
      { id: 31, key: 'Chemistry', value: 'LiFePO4', displayOrder: 3 },
      { id: 32, key: 'Cycle Life', value: '6000+ Cycles', displayOrder: 4 },
      { id: 33, key: 'Warranty', value: '5 Years', displayOrder: 5 },
      { id: 34, key: 'BMS', value: 'Built-in', displayOrder: 6 },
      { id: 35, key: 'Depth of Discharge', value: '95%', displayOrder: 7 },
    ],
    primaryImage: {
      id: 9,
      imageUrl: '/images/products/lithium-280ah.jpeg',
      altText: 'S.O Lithium Battery 51.2V 280Ah',
      isPrimary: true,
      displayOrder: 1,
    },
  },
  {
    id: 6,
    name: 'S.O Mono Solar Panel 585W',
    slug: 'so-mono-solar-panel-585w',
    shortDescription: '585W mono PERC solar panel with 21.5% efficiency and 25-year warranty.',
    description:
      'The S.O Mono Solar Panel 585W features premium monocrystalline PERC cells for maximum energy conversion efficiency of 21.5%. With a 25-year power output warranty and superior performance in low-light conditions, it is the ideal choice for residential and commercial solar installations. The anti-reflective coating and tempered glass construction ensure durability in all weather conditions.',
    category: ProductCategory.SolarPanel,
    categoryName: 'Solar Panel',
    isFeatured: false,
    badgeLabel: 'New',
    isActive: true,
    displayOrder: 6,
    pdfBrochureUrl: '',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    images: [
      {
        id: 11,
        imageUrl: '/images/products/solar-panel.png',
        altText: 'S.O Mono Solar Panel 585W',
        isPrimary: true,
        displayOrder: 1,
      },
    ],
    specifications: [
      { id: 36, key: 'Power Output', value: '585W', displayOrder: 1 },
      { id: 37, key: 'Cell Type', value: 'Mono PERC', displayOrder: 2 },
      { id: 38, key: 'Efficiency', value: '21.5%', displayOrder: 3 },
      { id: 39, key: 'Warranty', value: '25 Years Power Output', displayOrder: 4 },
      { id: 40, key: 'Product Warranty', value: '12 Years', displayOrder: 5 },
      { id: 41, key: 'Operating Temp', value: '-40°C to +85°C', displayOrder: 6 },
      { id: 42, key: 'Frame', value: 'Anodized Aluminum', displayOrder: 7 },
    ],
    primaryImage: {
      id: 11,
      imageUrl: '/images/products/solar-panel.png',
      altText: 'S.O Mono Solar Panel 585W',
      isPrimary: true,
      displayOrder: 1,
    },
  },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    customerName: 'Ahmed Khan',
    customerTitle: 'Homeowner, DHA Karachi',
    customerImageUrl: '/images/testimonials/customer-1.jpg',
    review:
      "Switching to solar was the best decision for our home. The system handles all our appliances including AC effortlessly. FM's Power team was professional from consultation to installation. We've seen significant reduction in electricity bills, and the 5-year warranty gives us complete peace of mind.",
    rating: 5,
    isActive: true,
    displayOrder: 1,
  },
  {
    id: 2,
    customerName: 'Muhammad Farooq',
    customerTitle: 'Factory Owner, SITE Area',
    customerImageUrl: '/images/testimonials/customer-2.jpg',
    review:
      "Our manufacturing unit needed reliable power, and FM's Power delivered beyond expectations. The 6.2KW inverter system handles our heavy machinery effortlessly. The installation team was professional, and the after-sales support has been exceptional. Highly recommended for industrial applications!",
    rating: 5,
    isActive: true,
    displayOrder: 2,
  },
  {
    id: 3,
    customerName: 'Farhan Rizvi',
    customerTitle: 'Homeowner, Gulshan-e-Iqbal',
    customerImageUrl: '/images/testimonials/customer-3.jpg',
    review:
      "Living in Karachi with frequent load shedding, the FM's Power system has been a game-changer. The lithium battery backup keeps our home running smoothly during outages. The team explained everything clearly and completed installation in just one day. Excellent service!",
    rating: 5,
    isActive: true,
    displayOrder: 3,
  },
  {
    id: 4,
    customerName: 'Dr. Hassan Ali',
    customerTitle: 'Medical Clinic Owner, Clifton',
    customerImageUrl: '/images/testimonials/customer-4.jpg',
    review:
      "A medical clinic cannot afford power interruptions. FM's Power understood our requirements perfectly and installed a system that handles our medical equipment and air conditioning seamlessly. The pure sine wave output keeps sensitive equipment safe. Outstanding investment!",
    rating: 5,
    isActive: true,
    displayOrder: 4,
  },
  {
    id: 5,
    customerName: 'Imran Sheikh',
    customerTitle: 'Shop Owner, Saddar',
    customerImageUrl: '/images/testimonials/customer-5.jpg',
    review:
      "I run an electronics shop and needed reliable power backup. FM's Power provided the perfect solution with their hybrid inverter system. The 5-year warranty gives peace of mind, and their team is always just a phone call away for any queries. Very satisfied with the purchase!",
    rating: 5,
    isActive: true,
    displayOrder: 5,
  },
];

export const MOCK_FEATURES: Feature[] = [
  {
    id: 1,
    title: 'High Efficiency',
    description:
      '98.5% conversion efficiency for maximum energy savings. Our inverters waste less power and deliver more to your home.',
    icon: 'zap',
    isActive: true,
    displayOrder: 1,
  },
  {
    id: 2,
    title: 'Smart Monitoring',
    description:
      'Real-time monitoring with mobile app control. Track energy generation, consumption, and battery status from anywhere.',
    icon: 'smartphone',
    isActive: true,
    displayOrder: 2,
  },
  {
    id: 3,
    title: 'Advanced Protection',
    description:
      'Lightning protection, overload protection, short circuit protection, and over-temperature shutdown for complete safety.',
    icon: 'shield',
    isActive: true,
    displayOrder: 3,
  },
  {
    id: 4,
    title: 'MPPT Technology',
    description:
      'Multi-point power tracking automatically adjusts to get the maximum power from your solar panels in all conditions.',
    icon: 'trending-up',
    isActive: true,
    displayOrder: 4,
  },
  {
    id: 5,
    title: 'Remote Management',
    description:
      'Control and configure your solar system remotely via smartphone app. Set schedules, check alerts, and optimize performance.',
    icon: 'wifi',
    isActive: true,
    displayOrder: 5,
  },
  {
    id: 6,
    title: 'Modular Design',
    description:
      'Start small and expand as your needs grow. Our modular system design allows easy capacity upgrades without full replacement.',
    icon: 'layers',
    isActive: true,
    displayOrder: 6,
  },
];

export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Free Consultation',
    description:
      'Get expert advice on the best solar solution for your home or business. Our engineers analyze your energy needs and recommend the optimal system.',
    icon: 'message-circle',
    isActive: true,
    displayOrder: 1,
  },
  {
    id: 2,
    title: 'Professional Installation',
    description:
      'Our certified installation team ensures your solar system is set up correctly and safely. We handle everything from mounting to final commissioning.',
    icon: 'tool',
    isActive: true,
    displayOrder: 2,
  },
  {
    id: 3,
    title: '5-Year Warranty',
    description:
      'All our products come with a comprehensive 5-year warranty. We stand behind the quality of our inverters and batteries with full coverage.',
    icon: 'shield',
    isActive: true,
    displayOrder: 3,
  },
  {
    id: 4,
    title: 'Performance Monitoring',
    description:
      'Real-time system monitoring and performance alerts keep you informed. Track energy production, consumption, and savings through our mobile app.',
    icon: 'activity',
    isActive: true,
    displayOrder: 4,
  },
  {
    id: 5,
    title: 'Maintenance & Support',
    description:
      'Ongoing technical support and scheduled maintenance keep your system running at peak performance. Our team is just a call away.',
    icon: 'settings',
    isActive: true,
    displayOrder: 5,
  },
  {
    id: 6,
    title: 'Complete Solar Solution',
    description:
      'From consultation to installation and beyond, we provide end-to-end solar energy solutions tailored to your specific requirements.',
    icon: 'sun',
    isActive: true,
    displayOrder: 6,
  },
];

export const MOCK_NAV_ITEMS: NavItem[] = [
  { id: 1, label: 'Home', url: '/', isActive: true, openInNewTab: false, displayOrder: 1 },
  { id: 2, label: 'Products', url: '/products', isActive: true, openInNewTab: false, displayOrder: 2 },
  { id: 3, label: 'About', url: '/about', isActive: true, openInNewTab: false, displayOrder: 3 },
  { id: 4, label: 'Contact', url: '/contact', isActive: true, openInNewTab: false, displayOrder: 4 },
];


export const MOCK_SETTINGS: SiteSettings = {
  id: 1,
  siteName: "FM's Power",
  tagLine: 'Solar Energy',
  logoUrl: '/images/logo/fmslogo.png',
  faviconUrl: '/images/logo/favicon.svg',
  phone: '0322-2550299',
  email: 'thefmstrading@gmail.com',
  whatsApp: '+923222550299',
  address: 'Shop G31-G50, Ground Floor, Al-Najeebi Electronic Bazar, Agha Khan Road 3, Near Star City Mall, Saddar, Karachi',
  facebookUrl: 'https://facebook.com',
  instagramUrl: 'https://instagram.com',
  youtubeUrl: 'https://youtube.com',
  businessHours: 'Mon-Sat: 9:00 AM - 8:00 PM',
};
