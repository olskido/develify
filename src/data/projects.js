/**
 * Portfolio tokens — append objects to `projects`. Counts use `projects.length`.
 * Optional: mintAddress (live DexScreener chart), pumpFunUrl, xCommunityUrl.
 */

import { Currency } from "lucide-react"


/** Site-wide socials (dev) */
export const social = {
  twitter: 'https://x.com/Develifyqx',
  telegram: 'https://t.me/develify',
}

export const profile = {
  name: 'develify',
  title: 'Trying to be the best version of myself',
  bio: '',
  avatarUrl: '/images/develify-avatar.png',
  avgRoi: '42x',
  avgAth: '420K+',
  /** Bonded launches (shown in desktop stats row) */
  bondedCount: 8,
}

export const projects = [

  {
    id: 'BULL',
    name: 'BULL',
    ticker: '$BULL',
    mintAddress: '3dmNDj7pZBbnAJmqYEtkxFNxL1UdS5zZCuvzXutupump',
    image: '/images/bull.jpeg',
    heroImage: '/images/bull.jpeg',
    athMc: '$49,700',
    currentMc: '$6,760'
  },

  {
    id: 'TOPLESS',
    name: 'TOPLESS',
    ticker: '$TOPLESS',
    mintAddress: 'EuDGQRFvuDezFXsrPwA9XbeWj6PkgdVfKUuef7qBpump',
    image: '/images/topless.jpeg',
    heroImage: '/images/topless.jpeg',
    athMc: '$458,000',
    currentMc: '$4,450'
  },


  {
    id: 'Risk',
    name: 'RISK',
    ticker: '$RISK',
    mintAddress: 'EdyNYYCXxxh76LHx5Lyp24wkAbUjxk7UavwdT8PSpump',
    image: '/images/buscuit.jpeg',
    heroImage: '/images/buscuit.jpeg',
    athMc: '$40,400',
    currentMc: '$2,740'
  },

  {
    id: 'THEONE',
    name: 'THEONE',
    ticker: '$THEONE',
    mintAddress: 'FMsL3bkizj3523TtFhUgXNJPLF6jqv7cYv3jPnJApump',
    image: '/images/THEONE.PNG',
    heroImage: '/images/THEONE.PNG',
    athMc: '$195,000',
    currentMc: '$2,790'
  },

  {
    id: 'MAY',
    name: 'MAY',
    ticker: '$MAY',
    mintAddress: '8grnfSnKs23V6JbsriYUw2bWiaUJRZBxAAWFnLAHpump',
    image: '/images/may.png',
    heroImage: '/images/may.png',
    athMc: '$28,200',
    currentMc: '$2,600'
  },

  {
    id: 'TAF',
    name: 'TAF',
    ticker: '$TAF',
    mintAddress: '3rQQC24ZRELg1YM3NGCh7Scjosz5dJHCvWEUs4Nwpump',
    image: '/images/Taf.png',
    heroImage: '/images/Taf.png',
    athMc: '$41,800',
    currentMc: '$1,650'
  },

  {
    id: 'May4th',
    name: 'May4th',
    ticker: '$MAY4TH',
    mintAddress: '7wC7z6FbueVpDhb724xg7VHvsLwMPuQgwvHUfMbq5Z89',
    image: '/images/may4th.jpeg',
    heroImage: '/images/may4th.jpeg',
    athMc: '$283,000',
    currentMc: '$8,140'
  },

  {
    id: 'warbros',
    name: '$WARBROS',
    ticker: '$WARBROS',
    mintAddress: 'FfjLgazvJBApdq6Tyn2pRvZUkPqhtp4VyeVEJENypump',
    image: '/images/warbros-banner.png',
    heroImage: '/images/warbros-banner.png',
    athMc: '$425,000',
    currentMc: '$4,090',
    ath: '$425,000'
  },
  {
    id: 'book-of-memes',
    name: 'Book of Memes',
    ticker: '$BOM',
    mintAddress: 'FWuimB9mNPQCYKeKjtH11Wwqx5vKwVuz4FjVCAfNpump',
    image: '/images/book-of-memes-banner.png',
    heroImage: '/images/book-of-memes-banner.png',
    athMc: '$37,800',
    currentMc: '$1,590',
    ath: '$37,800'
  },
  {
    id: 'Unstable Donald Trump',
    name: '$USDT',
    ticker: '$USDT',
    mintAddress: 'GvfG2zmxZd5e5MGmorDKwwTR2zwd8Xm6ASEtEZ7Gpump',
    image: '/images/usdt.png',
    heroImage: '/images/usdt.png',
    athMc: '$72,300',
    currentMc: '$1,750',
  },
  {
    id: 'emojew',
    name: 'Distorted Jew',
    ticker: '$EMOJEW',
    mintAddress: '3iYPPzLQ6driv2JVhpD47nABfmf2Z9YL4hiqXG1Zpump',
    image: '/images/emojew.png',
    heroImage: '/images/emojew.png',
    athMc: '$67,900',
    currentMc: '$1,710',
    ath: '$67,900'
  },

  {
    id: 'patty',
    name: 'ST.PATTY DAY',
    ticker: '$PATTY',
    mintAddress: 'HDZHtKsEPbsRhcresr5taTGbrK6NfLZPpiYHRNdopump',
    image: '/images/patty.png',
    heroImage: '/images/patty.png',
    athMc: '$208,000',
    currentMc: '$1,980',
    ath: '$208,000'
  },
  {
    id: 'whalepin',
    name: 'WHALEPIPPIN',
    ticker: '$WHALEPIN',
    mintAddress: 'Gi9oeTWMY5NDrhfMm6DrFXk7z1Gj1nxsP9RB58uHpump',
    image: '/images/whalepippin.png',
    heroImage: '/images/whalepippin.png',
    athMc: '$63,700',
    currentMc: '$1,640',

  },

  {
    id: 'awif',
    name: 'DogwifAlien',
    ticker: '$AWIF',
    mintAddress: 'EogtR3RcBkt5xw8d8BcYTBHpEJzJqrChTzZdv2Zupump',
    image: '/images/awif.png',
    heroImage: '/images/awif.png',
    athMc: '$68,900',
    currentMc: '$1,640',
    ath: '$68,900'
  },
  {
    id: 'noval',
    name: 'NOVAL',
    ticker: '$NOVAL',
    mintAddress: 'E57jJNL9bz4w8RHe6tZGvgKXbqcHQBDKSus5QTwUpump',
    image: '/images/noval.png',
    heroImage: '/images/noval.png',
    athMc: '$19,500',
    currentMc: '$2,450',
  },
  {
    id: 'gbunny',
    name: 'The Golden Bunny',
    ticker: '$GBUNNY',
    mintAddress: 'DZtVLPvSj2qjwq6dToWEnKJeVWopb1Qer9ePVNoQpump',
    image: '/images/the-golden-bunny.png',
    heroImage: '/images/the-golden-bunny.png',
    athMc: '$32,400',
    currentMc: '$2,380'
  },
  {
    id: 'wpigeon',
    name: 'The White Pigeon',
    ticker: '$WPIGEON',
    mintAddress: 'GwMmiSLJ2ce5TY9bhTJCrbK8QNYgJETayDDaT3uJpump',
    image: '/images/wpigeon.png',
    heroImage: '/images/wpigeon.png',
    athMc: '$104,000',
    currentMc: '$1,640'
  },
  {
    id: 'wurbros',
    name: 'WUR BROS',
    ticker: '$WURBROS',
    mintAddress: '4z7BzyrvfaBoh5R6ad2gpwAayyPaSLizV7cPcfeqpump',
    image: '/images/wurbros.png',
    heroImage: '/images/wurbros.png',
    athMc: '$35,800',
    currentMc: '$1,500'
  }
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
