import { scrollMenu } from '../js/PageAnimations';
import Items from './gallery/items.json';
import { pageTrigger } from '../js/index';

// Custom elements
import '../components/MobileMenu';
import '../components/Footer';
// import MobileMenu from '../components/MobileMenu';

let Home = {
    render : async () => {
        let items = Items;
        let id = items.length - 1;

        document.title = 'Aidan Bundel | Developer';

        // console.log('/src/img/' + items[id].image);

        return /*language=HTML*/ `
            <div class='index'>
                <mobile-menu page='home'></mobile-menu>

                <div class='canvas-arrow-container'>
                    <div class='canvas-arrow'>
                        <a href='/gallery' data-type='gallery-stack'>
                            <p>GALLERY</p>
                        </a>
                    </div>
                </div>
                <!--            <div class='mobile-canvas-arrow'><a href='/gallery' data-type='gallery-stack'></a></div>-->

                <section class='greeting-container'>
                    <div class='greeting-text'>
                        <p>Hi there! Aidan here,</p>
                        <p>welcome to my portfolio.</p>
                        <!--<p style='font-size: 15px;'>🚧 still smashing some bugs 🚧</p>-->
                    </div>
                </section>

                <section class='menu-box-container unstacked'>
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

                    <div class='mobile-canvas'>
                        <div class='mobile-canvas-arrow-container'>
                            <div class='mobile-canvas-arrow'>
                                <a href='/gallery' data-type='gallery-stack'>
                                    <p>GALLERY</p>
                                </a>
                            </div>
                        </div>

                        <div class='mobile-carousel-container'>
                            <img class='carousel-slide-2' src=${ require('../img/' + items[id].image) } alt='image'>
                            <img class='carousel-slide-2' src=${ require('../img/' + items[id - 3].image) } alt='image'>
                            <img class='carousel-slide-3' src=${ require('../img/' + items[id - 6].image) } alt='image'>
                            <!--<img class='carousel-slide-4' src='' alt='image'>-->
                        </div>
                        
                        <footer-element class='mobile-canvas-footer'></footer-element>
                    </div>
                </section>

                <footer-element class='index-footer'></footer-element>

                <div class='carousel-container'>
                    <div class='carousel-slides-container'>
                        <div class='carousel-slide-1'>
                            <img class='carousel-slide-1' src=${ require('../img/' + items[id].image) } alt='image'>

                            <!-- don't remove just yet
                            <div class='img-overlay'>
                                <p>Hello World</p>
                            </div>-->
                        </div>

                        <div class='carousel-slide-2'>
                            <img src=${ require('../img/' + items[id - 3].image) } alt='image'>
                        </div>

                        <div class='carousel-slide-3'>
                            <img src=${ require('../img/' + items[id - 6].image) } alt='image'>
                        </div>

                        <!--<div class='carousel-slide-4'>
                            <img src=' alt='image'>
                        </div>-->
                    </div>
                </div>

                <section class='pseudo-menu-container stacked'>
                    <div class='pseudo-menu-box1 stacked stacked-outro'>
                        <p>WORK</p>
                    </div>

                    <div class='pseudo-menu-box2 stacked stacked-outro'>
                        <p>ABOUT</p>
                    </div>

                    <div class='pseudo-menu-box3 stacked stacked-outro'>
                        <p>CONTACT</p>
                    </div>
                </section>

                <section class='pseudo-menu-box-gallery gallery-stacked'>
                    <div class='pseudo-gallery-menu-box1 unstacked unstacked-outro'>
                        <a href=''>
                            <p>WORK</p>
                        </a>
                    </div>
                    <div class='pseudo-gallery-menu-box2 unstacked unstacked-outro'>
                        <a href=''>
                            <p>ABOUT</p>
                        </a>
                    </div>
                    <div class='pseudo-gallery-menu-box3 unstacked unstacked-outro'>
                        <a href=''>
                            <p>CONTACT</p>
                        </a>
                    </div>
                </section>
            </div>
        `;
    },
    animate: async () => {
        // console.log('Home animated');

        window.removeEventListener('scroll', scrollMenu);

        // Add event listener for triggering transition from the actual page to the new one
        document.querySelectorAll('[data-type*="page-stack"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="gallery-stack"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
    },
    load: async () => {
        // console.log('Home loaded');

        // Add event listener for triggering transition from the actual page to the new one
        document.querySelectorAll('[data-type*="page-stack"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="gallery-stack"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
    }
};

export default Home;
