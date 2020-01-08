// Credits to https://github.com/rishavs/vanillajs-spa

const Utils = {
    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------
    // parseRequestURL : (url = '/') => {
    parseRequestURL: (url = location.pathname) => {
        // url = location.pathname || '/';
        // let url = location.hash.slice(1).toLowerCase() || '/';
        const r = url.split('/');
        const request = {
            resource    : null,
            id          : null
        };
        request.resource    = r[1];
        request.id          = r[2];

        return request;
    },
    // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    sleep: (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
};

export default Utils;
