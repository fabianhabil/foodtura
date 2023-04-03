import type { SidebarButtonType } from '@/components/atoms/Sidebar/Button/SidebarButton';
import { StoreContext } from '@/contexts/StoreContext/StoreContext';
import PathRouteList from '@/helper/pathRouteList';
import { useContext } from 'react';
import { SlHome } from 'react-icons/sl';
import { MdFavoriteBorder, MdMenuBook, MdRsvp } from 'react-icons/md';
import { useRouter } from 'next/router';

const SidebarButtonList = () => {
    const { color } = useContext(StoreContext)!;
    const router = useRouter();
    const pathList = PathRouteList();

    const list: SidebarButtonType[] = [
        {
            title: 'Home',
            icon: (
                <SlHome
                    style={{
                        color: color.third,
                        verticalAlign: 'middle'
                    }}
                    size={'28px'}
                />
            ),
            active: pathList.length === 2 || pathList.length === 3,
            onClick: () => {
                router.push(`/restaurant/${pathList[1]}`);
            },
            render: pathList.length <= 2
        },
        {
            title: 'Favorite',
            icon: (
                <MdFavoriteBorder
                    style={{
                        color: color.third,
                        verticalAlign: 'middle'
                    }}
                    size={'32px'}
                />
            ),
            active: pathList[3] === 'favorite',
            onClick: () => {
                router.push(
                    `/restaurant/${pathList[1]}/${pathList[2]}/favorite`
                );
            },
            render: pathList.length > 2
        },
        {
            title: 'Menu',
            icon: (
                <MdMenuBook
                    style={{
                        color: color.third,
                        verticalAlign: 'middle'
                    }}
                    size={'32px'}
                />
            ),
            active: pathList[3] === 'menu',
            onClick: () => {
                router.push(`/restaurant/${pathList[1]}/${pathList[2]}/menu`);
            },
            render: pathList.length > 2
        },
        {
            title: 'Reservation',
            icon: (
                <MdRsvp
                    style={{
                        color: color.third,
                        verticalAlign: 'middle'
                    }}
                    size={'32px'}
                />
            ),
            active: pathList[3] === 'rsvp',
            onClick: () => {
                router.push(`/restaurant/${pathList[1]}/${pathList[2]}/rsvp`);
            },
            render: pathList.length > 2
        }
    ];

    return list;
};

export default SidebarButtonList;
