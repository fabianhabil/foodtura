import StoreHome from '@/components/templates/Store/Home/Home';
import StoreLayout from '@/components/templates/Store/StoreLayout/StoreLayout';
import Head from '@/components/atoms/Head';

import type { HeadProps } from '@/types/head';

const Home = () => {
    const rsvpPageSEO: HeadProps = {
        title: 'RSVP - Foodtura',
        description:
            'RSVP - Foodtura. View menus for Rsvp and restaurants in Foodtura restaurants. See restaurant menus, reviews, ratings, phone numbers, addresses, hours, photos and maps.',
        ogImage: '/images/og/og_rsvppage.png',
        override: true
    };

    return (
        <>
            <Head {...rsvpPageSEO} />
            <StoreHome />
        </>
    );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <>
            <StoreLayout>{page}</StoreLayout>
        </>
    );
};

export default Home;
