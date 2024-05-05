import {
  carrent,
  jobit,
  tripguide,
  instagram,
  telegram,
  youtube,
  twitter,
  telegram1,
  instagram1,
  twitter1,
  discordBlack,
  facebook,
  backend,
  web,
  creator,
  mobile,
  gbpusd,
  gold,
  nzdjpy,
} from '../assets'

export const socialIcons = [
  {
    id: 1,
    img: instagram,
  },
  {
    id: 2,
    img: telegram,
  },
  {
    id: 3,
    img: youtube,
  },
  {
    id: 4,
    img: twitter,
  },
]

export const testimonials = [
  {
    id: 1,
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 2,
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 3,
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

export const socials = [
  {
    id: '0',
    title: 'Discord',
    iconUrl: discordBlack,
    url: '#',
  },
  {
    id: '1',
    title: 'Twitter',
    iconUrl: twitter1,
    url: '#',
  },
  {
    id: '2',
    title: 'Instagram',
    iconUrl: instagram1,
    url: '#',
  },
  {
    id: '3',
    title: 'Telegram',
    iconUrl: telegram1,
    url: '#',
  },
  {
    id: '4',
    title: 'Facebook',
    iconUrl: facebook,
    url: '#',
  },
]

export const projects = [
  {
    name: 'GBP USD',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: gbpusd,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'XAU USD',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: gold,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'NZD JPY',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nzdjpy,
    source_code_link: 'https://github.com/',
  },
]

export const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
]
