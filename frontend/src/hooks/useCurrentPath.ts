import { getHost } from '@/helper/getHost';
import { useRouter } from 'next/router';

export default function useCurrentPath() {
    const { pathname } = useRouter();

    return `${getHost()}${pathname}`;
}
