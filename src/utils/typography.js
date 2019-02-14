
import Typography from "typography"
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'



const typography = new Typography( {
 
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Muli","sans-serif"],
  bodyFontFamily: ["Didact Gothic", "sans-serif"],
overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  h1: {
    fontFamily: ['Muli', 'sans-serif'].join(','),
   textTransform:'uppercase',
  // fontWeight:700,
  fontSize:rhythm(1),
  
  },
  h2: {
    //   fontWeight:700,
  },
  '.title':
  { color: 'inherit',
  
  },
  blockquote: {
    ...adjustFontSizeTo('19px'),
    color: 'red',
    fontStyle: 'italic',
    paddingLeft: rhythm(13/16),
    marginLeft: rhythm(0),
    borderLeft: `${rhythm(3/16)} solid black`,
  },
  'blockquote > :last-child': {
    marginBottom: 0,
  },
  [MOBILE_MEDIA_QUERY]: {
      // Make baseFontSize on mobile 16px.
      html: {
        fontSize: `${16 / 16 * 100}%`,
      },
    },
})
})




// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
