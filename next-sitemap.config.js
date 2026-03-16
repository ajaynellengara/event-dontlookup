/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://dontlookup.events',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/server-sitemap.xml'], // if applicable
  // ...other options
};
