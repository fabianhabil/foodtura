/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.foodtura.com',
    priority: 0.6,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', disallow: '/secret/*' },
            { userAgent: '*', allow: '/' }
        ]
    },
    exclude: ['/_next', '/404'],
    transform: async (config, path) => {
        const defaultValue = (priority) => ({
            loc: path,
            changefreq: config.changefreq,
            priority: priority || config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? []
        });

        if (path === '/') {
            return defaultValue(1.0);
        }

        if (path === '/dashboard') {
            return defaultValue(0.9);
        }

        if (path === '/restaurant') {
            return defaultValue(0.9);
        }

        return defaultValue();
    }
};
