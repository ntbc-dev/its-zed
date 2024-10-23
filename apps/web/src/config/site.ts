import { absoluteUrl } from '@/lib/utils'
import en from '@/i18n/locales/en.json'
import pt from '@/i18n/locales/pt.json'

export const siteConfig = {
  name: 'ITS Zambia',

  description: {
    en: en.site.description,
    pt: pt.site.description,
  },

  url: process.env.NEXT_PUBLIC_APP_URL,

  og: {
    image: absoluteUrl('/og.jpg'),

    size: {
      width: 1200,
      height: 630,
    },
  },

  app: {
    latestVersion: '3.0.1',
  },

  author: {
    name: 'National Technology Business Centre',
    site: 'https://ntbc.co.zm',
  },

  links: {
    twitter: {
      label: 'Twitter',
      username: '@ntbc-zamba',
      url: 'https://twitter.com/ntbc-zamba',
    },

    github: {
      label: 'GitHub',
      url: 'https://github.com/ntbz-dev',
    },
  },
} as const

export type SiteConfig = typeof siteConfig
