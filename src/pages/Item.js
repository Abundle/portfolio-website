// Credits to https://github.com/rishavs/vanillajs-spa
// import Utils from '../js/Utils';
import Items from './gallery/items.json';
import * as DOM from '../js/DOMFunctions';
import { pageTrigger } from '../js';

let Item = {
    render: async (id) => { // TODO: check async necessity
        // let request = Utils.parseRequestURL();
        /*let resultArray = Items.filter((item) => {
            return item.id === Number.parseInt(id);
        });*/
        // let dataArray = Items.filter((item) => item.id === id + 1);
        let leftItem = Items[id];
        let item = Items[id - 1];
        // let item = resultArray[0];
        let rightItem = Items[id - 2];

        /* let post = await getItem(id);
        let request = Utils.parseRequestURL();
        let post = await getItem(request.id);*/

        return /*language=HTML*/ `
            <div class='gallery-${ item.id }'>
                <div class='back drop-down'><a href='/gallery' data-type='image-detail-go-back'></a></div>

                <div class='gallery-fullscreen-container'>
                    <div class='gallery-image-canvas'>
                        ${ item.id < Items.length ? `<img class='previous' src=${ require('../img/' + leftItem.image) } alt='image'>` : '' }

                        <img class='current' src=${ require('../img/' + item.image) } alt='image'>

                        ${ item.id > 1 ? `<img class='next' src=${ require('../img/' + rightItem.image) } alt='image'>` : '' }
                    </div>

                    <div class='gallery-arrow-container'>
                        ${ item.id < Items.length ? `
                            <div class='gallery-arrow left'>
                                <a href='/gallery/${ leftItem.id }' data-type='image-detail-go-previous'></a>
                            </div>
                        ` : '' }

                        ${ item.id > 1 ? `
                            <div class='gallery-arrow right'>
                                <a href='/gallery/${ rightItem.id }' data-type='image-detail-go-next'></a>
                            </div> 
                        ` : '' }
                    </div>

                    <div class='gallery-image-description'>
                        <div class='pointer'></div>

                        <div class='gallery-image-text'>
                            <h1>${ item.title }</h1>

                            <div class='separator'></div>

                            <p>
                                ${ item.content }<br>
                                <br>
                                ${ item.date }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        /*return /!*language=HTML*!/ `
            <section class='section'>
                <h1>Post Id: ${ item.id }</h1>
                <p>Post Title: ${ item.title }</p>
                <p>Post Content: ${ item.content }</p>
                <p>Item Image: ${ item.image }</p>
            </section>
        `;*/
        // return /*language=HTML*/ `<p>${ 1 }</p>`;
    },
    animate: async () => {
        // console.log('Item animated');

        document.querySelectorAll('[data-type*="image-detail-go-back"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="image-detail-go-next"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="image-detail-go-previous"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
    },
    load: async () => {
        // console.log('Item loaded');

        document.querySelectorAll('[data-type*="image-detail-go-back"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="image-detail-go-next"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="image-detail-go-previous"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });

        DOM.select('.canvas').addClass('fullscreen');
    }
};

export default Item;

/*
${ item.id > 1 && `
    <div class='gallery-arrow right' style='background-image: url(/src/img/${ rightItem.image })'>
        <a href='/gallery/${ rightItem.id }' data-type='next-image'></a>
    </div>
`}
 */
