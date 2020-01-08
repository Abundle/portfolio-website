import * as DOM from '../utils/DOMFunctions';

const Error404 = {
    render : async () => {
        return `
            <div class='error'>
                <h1 style='color: white'>404 Error</h1>
                <h1 style='color: white'>Whoops</h1>
            </div>
        `;
    },
    /*animate: async () => {
        console.log('Error404 animated');
    },*/
    load: async () => {
        // console.log('Error404 loaded');

        DOM.select('.canvas').css({ 'display': 'none' });
    }
};

export default Error404;
