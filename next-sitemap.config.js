const slugs = require('./data/slugs.js');

module.exports = {
  siteUrl: 'https://mahns.vercel.app/',
  generateRobotsTxt: true,
  sitemapSize: 10000,

  // 동적 수동 경로 추가
  additionalPaths: async () => {
    return slugs.default.map((slug) => ({
      loc: `/posts/${slug}`,
    }));
  },
};
