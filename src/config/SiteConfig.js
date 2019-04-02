module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: "Alan Tod - Forest is art", // Navigation and Site Title
  siteTitleAlt: "Alan Tod - Forest is art", // Alternative Site title for SEO
  siteUrl: 'https://alantod.com', // Domain of your site. No trailing slash!
  siteEmail: 'contact@alantod.com',
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logoGris.png', // Used for SEO and manifest
  siteDescription: 'Alan Tod - Forest is art',
  siteTel:'',
  author:'Olivier Genevest',
   authorUrl:'https://oliviergenevest.info/contacts',
   publisher:'Alan Tod',
    shareImage: '/images/alan-tod-icon.png', // Open Graph Default Share Image. 1200x1200 is recommended
  //siteFBAppID: '123456789', // Facebook App ID
  facebookPageUrl:'https://www.facebook.com/Alan-Tod-660829114058650/',
  instagramPageUrl:'https://www.instagram.com/alan.tod',
  //userTwitter: '@emma', // Twitter Username
  // og: Meta Tags
  ogSiteName: 'Alan Tod - Forest is art', // Facebook Site Name
  ogLanguage: 'en_EN',
  googleAnalyticsID: '',
  
  // Date format used in your project header
  // More information here: https://date-fns.org/v1.29.0/docs/format
  dateFormat: 'DD.MM.YYYY',
  // Manifest and Progress color
  themeColor: '#4a4a4a',
  backgroundColor: '#7F868A',
   

  locales: {
    en: {
      path: 'en',
      locale: 'English',
      default: true
    },
    fr: {
      path: 'fr',
      locale: 'Français'
    }
  },

};
