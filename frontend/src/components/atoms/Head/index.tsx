import useCurrentUrl from '@/hooks/useCurrentPath';
import NextHead from 'next/head';
import { getHost } from '@/helper/getHost';

import type { HeadProps } from '@/types/head';

function Head({ title, description, ogImage, override = false, structuredData = '' }: HeadProps) {
    const currentUrl = useCurrentUrl();
    const htmlTitle = override ? title : `${title} — Foodtura`;

    return (
        <NextHead>
            <title>{htmlTitle}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />

            <link rel="canonical" href={currentUrl} />

            <meta property="og:image" content={`${getHost()}ogImage`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`Image with "${title}" text.`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@foodtura" />
            <meta name="twitter:creator" content="@foodtura" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content={`Image with "${title}" text.`} />

            <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

            {structuredData && <script type="application/ld+json">{structuredData}</script>}
        </NextHead>
    );
}

export default Head;
