export function getHost(): string {
    if (process.env.NODE_ENV === 'production') {
        // if you are hosting a http website use http instead of https
        return `https://something.com`;
    }

    return 'http://localhost:3000';
}
