import { scrollMenu } from '../utils/PageAnimations';
import { pageTrigger } from '../index';
import * as DOM from '../utils/DOMFunctions';

// Images
import aboutImage from '../../assets/img/about.jpg';
import meLandscapeImage from '../../assets/img/me_landscape.jpg';

const wordCarouselButton = () => {
    const words = [ // TODO: Check words
        'low poly art',
        'games',
        'cycling',
        'hanging out with friends',
        'Kurzgesagt',
        'making my homemade pesto',
        'eating my homemade pesto',
        'animals',
    ];
    let clicks = 0;

    document.getElementById('carousel-button').innerHTML = '<span>' + words[0] + ' 🔄' + '</span>';

    document.getElementById('carousel-button').addEventListener('click', (event) => {
        event.preventDefault();

        clicks++;

        if (clicks === words.length) {
            clicks = 0;
        }

        document.getElementById('carousel-button').innerHTML = '<span>' + words[clicks] + ' 🔄' + '</span>';
        // document.getElementById('carousel-button').innerHTML = words[clicks] + ' 🔄';
    });
};

const About = {
    render : async () => {
        document.title = 'Aidan Bundel | About';

        return `
            <div class='about'>
                <div class='exit drop-down'><a href='/' data-type='page-exit'></a></div>

                <mobile-menu page='about'></mobile-menu>

                <section class='menu-box-container stacked'>
                    <div class='menu-box1 stacked'>
                        <a href='/work' data-type='page-replace_-1'>
                            <p>WORK</p>
                        </a>
                    </div>

                    <div class='menu-box2 stacked clicked'>
                        <p>ABOUT</p>
                    </div>
                    <div class='menu-box-overlay'></div>

                    <div class='menu-box3 stacked'>
                        <a href='/contact' data-type='page-replace_1'>
                            <p>CONTACT</p>
                        </a>
                    </div>
                </section>

                <div class='canvas-container'>
                    <div class='content active'>
                        <img class='img-about-fullscreen' src=${ aboutImage } alt='image'>
                        <!--<img class='img-about-fullscreen' src='/src/img/about.jpg' alt='image'>-->

                        <h1>ABOUT</h1>

                        <div class='text-about'>
                            <p>My name is <b>Aidan Bundel</b> and I love <button id='carousel-button'></button>.<br>                          
                            <br>
                            I graduated in 2018 from <a href='https://www.tue.nl/en/' target='_blank'>Eindhoven 
                            University of Technology</a> (TU/e) with a Bachelor degree in <b>Industrial Design</b> in 
                            the Netherlands. I became quite passionate about digital design: graphic design, animating, 
                            web design and (web) programming. <br> 
                            Currently I am studying for a Master's degree in <b>Computing Science</b> at 
                            <a href='https://www.uu.nl/en' target='_blank'>Utrecht University</a>.
                            Besides my studies, I work as a Junior Test Engineer at a Geo-ICT company called
                            <a href='https://www.geodan.com/' target='_blank'>Geodan</a>.<br>
                            <br>
                            I grew up in a small village near Amsterdam. Not many people are familiar with this tiny
                            paradise called Landsmeer, therefore it's okay to say I am from Amsterdam.<br>
                            As a kid, I always wanted to become a truck driver. And a doctor. And a professional
                            LEGO builder. So here I am, pursuing a <b>career in design and computer science</b> to 
                            potentially create stuff for truck-driving patient-caring LEGO-loving people. Don't we all 
                            like how life can be so unpredictable?
                            <!--Software has many responsibilities and-->
                            <!--<br>
                            My interest towards <b>human-centred design</b> means I care about the interaction
                            between user and product. To me, sound design makes people feel comfortable when using a
                            product. Otherwise they will simply not like it.-->
                            </p>
                        </div>

                        <img class='img-about' src=${ meLandscapeImage } alt='image'>
                        <!--<img class='img-about' src='/src/img/me_landscape.jpg' alt='image'>-->

                        <footer-element></footer-element>
                    </div>
                </div>

            </div>
        `;
    },
    animate: async () => {
        // console.log('About animated');

        // window.scrollTo(0, 0);

        wordCarouselButton();

        window.removeEventListener('scroll', scrollMenu); // TODO: Check if this also needs to be done at 'load'

        // Add event listener for triggering transition from the actual page to the new one
        document.querySelectorAll('[data-type*="page-replace"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="page-exit"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
    },
    load: async () => {
        // console.log('About loaded');

        wordCarouselButton();

        window.removeEventListener('scroll', scrollMenu); // TODO: Check if this also needs to be done at 'load'

        // Add event listener for triggering transition from the actual page to the new one
        document.querySelectorAll('[data-type*="page-replace"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="page-exit"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });

        DOM.select('.canvas').removeClass('half-open');
        DOM.select('.canvas').addClass('closed');
        DOM.select('.mobile-canvas-transition').addClass('slide-up');
    }
};

export default About;
