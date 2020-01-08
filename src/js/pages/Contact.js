import moment from 'moment-timezone';

import { scrollMenu } from '../utils/PageAnimations';
import { pageTrigger } from '../index';
import * as DOM from '../utils/DOMFunctions';

// Icons
import amsterdamIcon from '../../assets/img/amsterdam_icon.svg';
import nameIcon from '../../assets/img/name_icon.svg';
import mailIcon from '../../assets/img/mail_icon.svg';
import linkedInIcon from '../../assets/img/linkedin_icon.svg';
import gitHubIcon from '../../assets/img/github_icon.svg';

const time = moment.tz('Europe/Amsterdam').format('h:mm A');
const outputTime = `It is now ${ time } in <img src=${ amsterdamIcon } id='amsterdam' alt='amsterdam'> Amsterdam.`;

const Contact = {
    render : async () => {
        document.title = 'Aidan Bundel | Contact';

        return `
            <div class='contact'>
                <div class='exit drop-down'><a href='/' data-type='page-exit'></a></div>

                <mobile-menu page='contact'></mobile-menu>

                <section class='menu-box-container stacked'>
                    <div class='menu-box1 stacked'>
                        <a href='/work' data-type='page-replace_-2'>
                            <p>WORK</p>
                        </a>
                    </div>

                    <div class='menu-box2 stacked'>
                        <a href='/about' data-type='page-replace_-1'>
                            <p>ABOUT</p>
                        </a>
                    </div>

                    <div class='menu-box3 stacked clicked'>
                        <p>CONTACT</p>
                    </div>
                    <div class='menu-box-overlay'></div>
                </section>

                <div class='canvas-container'>
                    <div class='content active'>
                        <h1>CONTACT</h1>

                        <div class='section-contact'>
                            <div class='text-contact'>
                                <p>
                                Currently I am studying for a Master's degree in Computing Science at Utrecht University.
                                In my free time I like to work on pet projects, such as 
                                <a href='https://sandbox.aidanbundel.com/' target='_blank'>this one</a>.<br>
                                <br>
                                If you&#39;d like to get in touch to talk about work related stuff, any other stuff
                                or just say hi, no need to hesitate. I&#39;ll be waiting, patiently.<br>
                                </p>

                                <p class='contact-extra-info'>
                                    Aidan's local time:<br>
                                    <span id='my-time'></span><br>
                                    <br>
                                    This website was created with JavaScript, stylised with SCSS and bundled with Webpack.<br>
                                </p>
                            </div>

                            <div class='text-contact'>
                                <div class='contact-icons'>
                                    <img src=${ nameIcon } alt='image'>
                                    <p>Aidan Bundel, developer</p>
                                </div>

                                <div class='contact-icons'>
                                    <img src=${ mailIcon } alt='image'>
                                    <!--<p><a href='mailto:aid@anbundel.nl'>aid@nbundel.com</a></p>-->
                                    <p><a href='mailto:hi@aidanbundel.com'>hi@aidanbundel.com</a></p>
                                </div>

                                <div class='contact-icons'>
                                    <img src=${ linkedInIcon } alt='image'>
                                    <!--<img src='/src/img/linkedin_icon.svg' alt='image'>-->
                                    <p><a href='https://www.linkedin.com/in/aidan-bundel-44b830137' target='_blank'>aidan-bundel</a>
                                    </p>
                                </div>
                                
                                <div class='contact-icons'>
                                    <img src=${ gitHubIcon } alt='image'>
                                    <!--<img src='/src/img/linkedin_icon.svg' alt='image'>-->
                                    <p><a href='https://github.com/Abundle' target='_blank'>Abundle</a>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <!--<div id='map'></div>-->
                    </div>
                </div>
            </div>
        `;
    },
    animate: async () => {
        // console.log('Contact animated');

        // window.scrollTo(0, 0);

        window.removeEventListener('scroll', scrollMenu);

        // Add event listener for triggering transition from the actual page to the new one
        document.querySelectorAll('[data-type*="page-replace"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="page-exit"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });

        document.getElementById('my-time').innerHTML = outputTime;
    },
    load: async () => { // TODO: Check bottom canvas sliding in
        // console.log('Contact loaded');

        window.removeEventListener('scroll', scrollMenu);

        // Add event listener for triggering transition from the actual page to the new one
        document.querySelectorAll('[data-type*="page-replace"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="page-exit"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });

        document.getElementById('my-time').innerHTML = outputTime;

        DOM.select('.canvas').removeClass('half-open');
        DOM.select('.canvas').addClass('closed');
        DOM.select('.mobile-canvas-transition').addClass('slide-up');
    }
};

export default Contact;
