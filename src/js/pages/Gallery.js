import items from './gallery/items';
import * as DOM from '../DOMFunctions';
import { pageTrigger } from '../index';

const Gallery = {
    render : async () => {
        document.title = 'Aidan Bundel | Gallery';

        return /*language=HTML*/`
            <div class='gallery'>           
                <mobile-menu page='gallery'></mobile-menu>
            
                <div class='canvas-arrow-container closed'>
                    <div class='canvas-arrow flip'>
                        <a href='/' data-type='gallery-exit'>
                            <p>HOME</p>
                        </a>
                    </div>
                </div>
            
                <!--<div class='canvas-arrow-container closed'>
                    <div class='canvas-arrow flip'><a href='index.html' data-type='gallery-exit'></a></div>
                </div>-->
            
                <div class='mobile-canvas-arrow-container closed'>
                    <div class='mobile-canvas-arrow flip'>
                        <a href='/' data-type='gallery-exit'>
                            <p>HOME</p>
                        </a>
                    </div>
                </div>
            
                <section class='menu-box-container gallery-stacked'>
                    <div class='menu-box1 unstacked'>
                        <a href='/work' data-type='page-stack_1'>
                            <p>WORK</p>
                        </a>
                    </div>
                    <div class='menu-box2 unstacked'>
                        <a href='/about' data-type='page-stack_2'>
                            <p>ABOUT</p>
                        </a>
                    </div>
                    <div class='menu-box3 unstacked'>
                        <a href='/contact' data-type='page-stack_3'>
                            <p>CONTACT</p>
                        </a>
                    </div>
                </section>
            
                <section class='pseudo-menu-container stacked'>
                    <div class='pseudo-menu-box1 stacked stacked-outro'>
                        <p>WORK</p>
                    </div>
            
                    <div class='pseudo-menu-box2 stacked stacked-outro'>
                        <p>ABOUT</p>
                    </div>
            
                    <div class='pseudo-menu-box3 stacked stacked-outro'>
                        <p>CONTACT</p>
                    </div>ba
                </section>
            
                <div class='gallery-container'>
                    <div class='gallery-slides'>
                        ${ items.slice(0).reverse().map((item) => `
                            <div class='gallery-slide-${ item.id }'>
                                <a href='/gallery/${ item.id }' data-type='image-detail'>
                                    <img src=${ item.image } alt='image'>
                                    <!--<img src='src/img/placeholder.jpg' alt='image'>-->
                                </a>
                            </div>
                        `).join('\n ') }
                    </div>
                </div>
            
            </div>
        `;

        /*return /!*language=HTML*!/`
            <section class="section">
                <h1>Gallery</h1>
                <ul>
                    ${ items.map(item =>
            /!*language=HTML*!/`<li><a href="/gallery/${ item.id }">${ item.title }</a></li>`
        ).join('\n ')
            }
                </ul>
            </section>
        `;*/
    },
    animate: async () => {
        // console.log('Gallery animated');

        document.querySelectorAll('[data-type*="page-stack"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="gallery-exit"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="image-detail"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
    },
    load: async () => {
        // console.log('Gallery loaded');

        document.querySelectorAll('[data-type*="page-stack"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="gallery-exit"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="image-detail"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });

        DOM.select('.canvas').addClass('half-open');
        DOM.select('.mobile-canvas-transition').addClass('slide-up');
    }
};

export default Gallery;
