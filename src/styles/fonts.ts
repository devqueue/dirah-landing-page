import localFont from 'next/font/local'

export const allRoundGothic = localFont({
  src: [
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-book.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-bookoblique.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-text.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-textoblique.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-mediumoblique.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-demi.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-demioblique.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-boldoblique.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-thick.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-thickoblique.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-lig.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-ligoblique.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-xlig.otf',
      weight: '950',
      style: 'normal',
    },
    {
      path: '../../public/fonts/allroundgothic/allroundgothic-xligoblique.otf',
      weight: '950',
      style: 'italic',
    },
  ],
  variable: '--font-all-round-gothic',
  display: 'swap',
})

export const geSsTwo = localFont({
  src: [
    {
      path: '../../public/fonts/GE_SS_Two/GE_SS_Two_Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GE_SS_Two/GE_SS_Two_Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GE_SS_Two/GE_SS_Two_Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-ge-ss-two',
  display: 'swap',
})


// Arabic variants
export const adelleSansAra = localFont({
  src: [
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_ARA_Th.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_ARA_Lt.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_ARA_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_ARA_Sb.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_ARA_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_ARA_Eb.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_ARA_Hv.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_ARA_Ut.otf',
      weight: '950',
      style: 'normal',
    },
  ],
  variable: '--font-adelle-sans-ara',
  display: 'swap',
})

// Latin variants (Regular)
export const adelleSans = localFont({
  src: [
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Thin_Italic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Light_Italic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Semibold_Italic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Bold_Italic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Heavy.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Heavy_Italic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Extrabold.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Extrabold_Italic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-adelle-sans',
  display: 'swap',
})

// Latin variants (Condensed)
export const adelleSansCnd = localFont({
  src: [
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Thin_Italic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Light_Italic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Semibold_Italic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Bold_Italic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Heavy.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Heavy_Italic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Extrabold.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Adelle_Sans_ARA/Adelle_Sans_Cnd_Extrabold_Italic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-adelle-sans-condensed',
  display: 'swap',
})
