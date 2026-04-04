/**
 * Portfolio tokens — append objects to `projects`. Counts use `projects.length`.
 * Optional: mintAddress (live DexScreener chart), pumpFunUrl, xCommunityUrl.
 */


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
    addressShort: 'FfjLgazvJBApdq6Tyn2pRvZUkPqhtp4VyeVEJENypump',
    image: '/images/warbros-banner.png',
    heroImage: '/images/warbros-banner.png',
  },
  {
    id: 'book-of-memes',
    name: 'Book of Memes',
    ticker: '$BOM',
    addressShort: 'FWuimB9mNPQCYKeKjtH11Wwqx5vKwVuz4FjVCAfNpump',
    image: '/images/book-of-memes-banner.png',
    heroImage: '/images/book-of-memes-banner.png',
  },
  {
    id: 'Unstable Donald Trump',
    name: '$USDT',
    ticker: '$USDT',
    addressShort: 'GvfG2zmxZd5e5MGmorDKwwTR2zwd8Xm6ASEtEZ7Gpump',
    image: '/images/usdt.png',
    heroImage: '/images/usdt.png',
  },
  {
    id: 'emojew',
    name: 'Distorted Jew',
    ticker: '$EMOJEW',
    addressShort: '3iYPPzLQ6driv2JVhpD47nABfmf2Z9YL4hiqXG1Zpump',
    image: '/images/emojew.png',
    heroImage: '/images/emojew.png',
  },

  {
    id: 'patty',
    name: 'ST.PATTY DAY',
    ticker: '$PATTY',
    addressShort: 'HDZHtKsEPbsRhcresr5taTGbrK6NfLZPpiYHRNdopump',
    image: '/images/patty.png',
    heroImage: '/images/patty.png',
  },
  {
    id: 'whalepin',
    name: 'WHALEPIPPIN',
    ticker: '$WHALEPIN',
    addressShort: 'Gi9oeTWMY5NDrhfMm6DrFXk7z1Gj1nxsP9RB58uHpump',
    image: '/images/whalepippin.png',
    heroImage: '/images/whalepippin.png',
  },

  {
    id: 'awif',
    name: 'DogwifAlien',
    ticker: '$AWIF',
    addressShort: 'EogtR3RcBkt5xw8d8BcYTBHpEJzJqrChTzZdv2Zupump',
    image: '/images/awif.png',
    heroImage: '/images/awif.png',
  },
  {
    id: 'noval',
    name: 'NOVAL',
    ticker: '$NOVAL',
    addressShort: 'E57jJNL9bz4w8RHe6tZGvgKXbqcHQBDKSus5QTwUpump',
    image: '/images/noval.png',
    heroImage: '/images/noval.png',
  },
  {
    id: 'gbunny',
    name: 'The Golden Bunny',
    ticker: '$GBUNNY',
    addressShort: 'DZtVLPvSj2qjwq6dToWEnKJeVWopb1Qer9ePVNoQpump',
    image: '/images/the-golden-bunny.png',
    heroImage: '/images/the-golden-bunny.png',
  },
  {
    id: 'wpigeon',
    name: 'The White Pigeon',
    ticker: '$WPIGEON',
    addressShort: 'GwMmiSLJ2ce5TY9bhTJCrbK8QNYgJETayDDaT3uJpump',
    image: '/images/wpigeon.png',
    heroImage: '/images/wpigeon.png',
  }
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
