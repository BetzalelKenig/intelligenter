/**validation & serialization service*/

/**
 *
 * @param url
 * @returns
 */

const exstractDomain = (url: string) => {
    let hostname;
    if (!url) return '';
    //find & remove protocol (http, ftp, etc.) and get hostname
    if (url.indexOf('//') > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }
    // Todo: remove www from domain
    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];
    return hostname.toLowerCase();
};

export default exstractDomain;
