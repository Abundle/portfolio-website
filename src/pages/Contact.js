import { scrollMenu } from '../js/PageAnimations';
import { pageTrigger } from '../js/index';
import * as DOM from '../js/DOMFunctions';

// TODO: Contact tekst: working on different diy projects in my spare time

let Contact = {
    render : async () => {
        document.title = 'Aidan Bundel | Contact';

        return /*language=HTML*/ `
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
                                This website was created with plain JavaScript, SASS and bundled with Webpack. Currently
                                I am spending my free time smashing some of the bugs that nestled around here 🚧 and 
                                having fun trying to program everything without frameworks 🤪.<br>
                                <br>
                                If you&#39;d like to get in touch to talk about work related stuff, any other stuff
                                or just say hi, no need to hesitate. I&#39;ll be waiting, patiently.<br>
                                </p>

                                <p class='contact-extra-info'>
                                    Currently based in <img src=${ require('../img/amsterdam_icon.svg') } id='amsterdam' alt='amsterdam'> Amsterdam.

                                    <!--Currently based in <img src='/src/img/eindhoven_icon.svg' id='eindhoven' alt='eindhoven'> Eindhoven,<br>
                                    originally from <img src='/src/img/amsterdam_icon.svg' id='amsterdam' alt='amsterdam'> Amsterdam.-->

                                    <!--Aidan's local time:<br>
                                    <span id='time'></span>
            
                                    <script type='text/javascript'>
                                        /*global moment*/
            
                                        var time = moment().tz('Europe/Amsterdam').format('h:mm a'),
                                            outputTime = 'It is now ' + time + ' in Eindhoven';
            
                                        document.getElementById('time').innerHTML = outputTime;
                                    </script>-->
                                </p>
                            </div>

                            <div class='text-contact'>
                                <div class='contact-icons'>
                                    <img src=${ require('../img/name_icon.svg') } alt='image'>
                                    <p>Aidan Bundel, developer</p>
                                </div>

                                <div class='contact-icons'>
                                    <img src=${ require('../img/mail_icon.svg') } alt='image'>
                                    <!--<p><a href='mailto:aid@anbundel.nl'>aid@nbundel.com</a></p>-->
                                    <p><a href='mailto:hi@aidanbundel.com'>hi@aidanbundel.com</a></p>
                                </div>

                                <div class='contact-icons'>
                                    <img src=${ require('../img/linkedin_icon.svg') } alt='image'>
                                    <!--<img src='/src/img/linkedin_icon.svg' alt='image'>-->
                                    <p><a href='https://www.linkedin.com/in/aidan-bundel-44b830137' target='_blank'>aidan-bundel</a>
                                    </p>
                                </div>
                                
                                <div class='contact-icons'>
                                    <img src=${ require('../img/github_icon.svg') } alt='image'>
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

        DOM.select('.canvas').removeClass('half-open');
        DOM.select('.canvas').addClass('closed');
        DOM.select('.mobile-canvas-transition').addClass('slide-up');
    }
};

export default Contact;