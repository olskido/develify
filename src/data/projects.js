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
    id: 'warbros',
    name: '$WARBROS',
    ticker: '$WARBROS',
    mintAddress: 'FfjLgazvJBApdq6Tyn2pRvZUkPqhtp4VyeVEJENypump',
    image: '/images/warbros-banner.png',
    heroImage: '/images/warbros-banner.png',
    athMc: '$403,000',
    currentMc: '$4,000',
    ath: '$403,000'
  },
  {
    id: 'book-of-memes',
    name: 'Book of Memes',
    ticker: '$BOM',
    mintAddress: 'FWuimB9mNPQCYKeKjtH11Wwqx5vKwVuz4FjVCAfNpump',
    image: '/images/book-of-memes-banner.png',
    heroImage: '/images/book-of-memes-banner.png',
    athMc: '$38,000',
    currentMc: '$1,500',
    ath: '$38,000'
  },
  {
    id: 'Unstable Donald Trump',
    name: '$USDT',
    ticker: '$USDT',
    mintAddress: 'GvfG2zmxZd5e5MGmorDKwwTR2zwd8Xm6ASEtEZ7Gpump',
    image: '/images/usdt.png',
    heroImage: '/images/usdt.png',
    athMc: '$72,000',
    currentMc: '$1,800',
  },
  {
    id: 'emojew',
    name: 'Distorted Jew',
    ticker: '$EMOJEW',
    mintAddress: '3iYPPzLQ6driv2JVhpD47nABfmf2Z9YL4hiqXG1Zpump',
    image: '/images/emojew.png',
    heroImage: '/images/emojew.png',
    athMc: '$68,000',
    currentMc: '$1,600',
    ath: '$68,000'
  },

  {
    id: 'patty',
    name: 'ST.PATTY DAY',
    ticker: '$PATTY',
    mintAddress: 'HDZHtKsEPbsRhcresr5taTGbrK6NfLZPpiYHRNdopump',
    image: '/images/patty.png',
    heroImage: '/images/patty.png',
    athMc: '$195,000',
    currentMc: '$1,900',
    ath: '$195,000'
  },
  {
    id: 'whalepin',
    name: 'WHALEPIPPIN',
    ticker: '$WHALEPIN',
    mintAddress: 'Gi9oeTWMY5NDrhfMm6DrFXk7z1Gj1nxsP9RB58uHpump',
    image: '/images/whalepippin.png',
    heroImage: '/images/whalepippin.png',
    athMc: '$64,000',
    currentMc: '$1,600',

  },

  {
    id: 'awif',
    name: 'DogwifAlien',
    ticker: '$AWIF',
    mintAddress: 'EogtR3RcBkt5xw8d8BcYTBHpEJzJqrChTzZdv2Zupump',
    image: '/images/awif.png',
    heroImage: '/images/awif.png',
    athMc: '$69,000',
    currentMc: '$1,700',
    ath: '$69,000'
  },
  {
    id: 'noval',
    name: 'NOVAL',
    ticker: '$NOVAL',
    mintAddress: 'E57jJNL9bz4w8RHe6tZGvgKXbqcHQBDKSus5QTwUpump',
    image: '/images/noval.png',
    heroImage: '/images/noval.png',
    athMc: '$20,000',
    currentMc: '$1,600',
  },
  {
    id: 'gbunny',
    name: 'The Golden Bunny',
    ticker: '$GBUNNY',
    mintAddress: 'DZtVLPvSj2qjwq6dToWEnKJeVWopb1Qer9ePVNoQpump',
    image: '/images/the-golden-bunny.png',
    heroImage: '/images/the-golden-bunny.png',
    athMc: '$32,000',
    currentMc: '$2,200'
  },
  {
    id: 'wpigeon',
    name: 'The White Pigeon',
    ticker: '$WPIGEON',
    mintAddress: 'GwMmiSLJ2ce5TY9bhTJCrbK8QNYgJETayDDaT3uJpump',
    image: '/images/wpigeon.png',
    heroImage: '/images/wpigeon.png',
    athMc: '$104,000',
    currentMc: '$1,700'
  }
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
