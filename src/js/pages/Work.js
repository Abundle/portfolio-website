import { scrollMenu } from '../utils/PageAnimations';
import { pageTrigger } from '../index';
import * as DOM from '../utils/DOMFunctions';
import {TweenMax, CSSPlugin, ScrollToPlugin, gsap} from 'gsap/all';
// import { TweenMax } from 'gsap/all';
// import { TweenMax } from 'gsap/TweenMaxBase';

// Custom elements
import '../components/Exit';

// Icons
import websiteIcon from '../../assets/img/website_icon.svg';
import clientIcon from '../../assets/img/client_icon.svg';
import linkIcon from '../../assets/img/link_icon.svg';

// Images
import fruitPunchLogoImage from '../../assets/img/fruitpunch_corporate_identity.jpg';
import fruitPunchFlyerImage from '../../assets/img/fruitpunch_flyer.jpg';
import fruitPunchContactCardsImage from '../../assets/img/fruitpunch_contact_cards.jpg';
import fruitPunchWebsiteImage from '../../assets/img/fruitpunch_website.jpg';
import fruitPunchTshirtImage from '../../assets/img/fruitpunch_tshirt.jpg';
import autarcoInfographicImage from '../../assets/img/autarco_infographic.jpg';
import autarcoWebsiteImage from '../../assets/img/autarco_website.jpg';
import autarcoFlyerImage from '../../assets/img/autarco_partner_brochure.jpg';
import linqSideImage from '../../assets/img/linq_side.jpg';
import webAppImage from '../../assets/img/web_app.jpg';
import webAppInterfaceImage from '../../assets/img/virtue_webapp_interface.png';
import sdmeTeamImage from '../../assets/img/sdme_team.jpg';
import virtueWebsiteImage from '../../assets/img/virtue_website_mockups.jpg';
import virtueLogoImage from '../../assets/img/virtue_corporate_identity.png';
import virtueContactCardsImage from '../../assets/img/virtue_contact_cards.jpg';
import virtueBannerMockupsImage from '../../assets/img/virtue_banners_mockups.jpg';
import aidenHandImage from '../../assets/img/aiden_hand.jpg'
import aidenPhoneMockupImage from '../../assets/img/aiden_phone_mockup.jpg'
import aidenMeImage from '../../assets/img/aiden_me.jpg';
import aidenDemoDayImage from '../../assets/img/aiden_demo_day.jpg';
import aidenConceptUI1Image from '../../assets/img/aiden_concept_ui.jpg';
import aidenConceptUI2Image from '../../assets/img/aiden_concept_ui.png';
import iipBear2Image from '../../assets/img/iip_bear2.jpg';
import iipElectronicsImage from '../../assets/img/iip_electronics.jpg';
import iipInterfaceImage from '../../assets/img/iip_interface.jpg';
import iipBear1Image from '../../assets/img/iip_bear1.jpg';
import radiomentaImage from '../../assets/img/radiomenta.jpg';

// Video
import radiomentaVideo from '../../assets/video/radiomenta_video.mp4';

// Docs
import aidenPoster from '../../assets/docs/aiden_poster.pdf';

// Without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollToPlugin);

// TODO: Check <time> tags usage etc.
// TODO: Stop videos automatically when you navigate the slider

const menuClick = () => {
    const elements = document.querySelectorAll('li');

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', (event) => {
            const element = event.target,
                // Get index numbered from top to bottom
                index = Array.from(element.parentElement.children).indexOf(element),
                linkIndex = element.id.split('-')[1],
                link = document.getElementById('link' + linkIndex),
                // link = $('#link' + linkIndex),

                menuBoxHeight = document.querySelector('.menu-box1').clientHeight,
                // menuBoxHeight = DOM.select('.menu-box1')[0].clientHeight,
                menuBoxCenterY = menuBoxHeight / 2 + 20,
                listElementHeight = 50;

            document.documentElement.scrollTop = link.offsetTop;
            // window.scrollTo(link.offsetTop, 0);

            window.removeEventListener('scroll', scrollMenu);

            /*$root.animate({
                scrollTop: link.offsetTop
                // scrollTop: link.offset().top
            }, 400);*/

            window.setTimeout(() => {
                TweenMax.to(document.querySelector('.sub-menu-container'), 0.1, {
                    top: menuBoxCenterY - (listElementHeight * index),
                });
            }, 400);

            window.setTimeout(() => {
                window.addEventListener('scroll', scrollMenu);
            }, 900);
        });
    }
};

const Work = {
    render : async () => {
        document.title = 'Aidan Bundel | Work';

        return `
            <div class='work'>
                <exit-element></exit-element>
                <!--<div class='exit drop-down'><a href='/' data-type='page-exit'></a></div>-->

                <mobile-menu page='work'></mobile-menu>

                <section class='menu-box-container stacked'>
                    <nav class='sub-menu open'>
                        <div class='sub-menu-container'>
                            <li id='submenu-6' class='slide'>FruitPunch AI</li>
                            <li id='submenu-5' class='slide'>VIRTUe</li>
                            <li id='submenu-4' class='slide'>Autarco</li>
                            <li id='submenu-3' class='slide'>Aiden</li>
                            <li id='submenu-2' class='slide'>Lullabear</li>
                            <li id='submenu-1' class='slide'>Radiomenta</li>
                        </div>
                    </nav>

                    <div class='menu-box-overlay'></div>
                    <div class='menu-box1 stacked clicked'>
                        <p>WORK</p>
                    </div>

                    <div class='menu-box2 stacked'>
                        <a href='/about' data-type='page-replace_1'>
                            <p>ABOUT</p>
                        </a>
                    </div>

                    <div class='menu-box3 stacked'>
                        <a href='/contact' data-type='page-replace_2'>
                            <p>CONTACT</p>
                        </a>
                    </div>
                </section>

                <div class='canvas-container'>
                    <div class='content active'>
                    
                    <section class='section-work'>
                            <div class='visuals-work'>
                                <h2 id='link6'>Student Team FruitPunch AI</h2>

                                <h3>Artificial Intelligence in E-sports</h3>
                                
                                <div class='slideshow'>
                                    <div class='controls'>
                                        <label class='checked' for=slider6></label>
                                        <label for=slider6></label>
                                        <label for=slider6></label>
                                        <label for=slider6></label>
                                        <label for=slider6></label>
                                    </div>

                                    <div class='overflow'>
                                        <div class='slider6 inner'>
                                            <label class='slider6 slide' for=slide1>
                                                <input checked='checked' type=radio id=slide1 />
                                                <img src=${ fruitPunchLogoImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>FruitPunch AI corporate identity</p>
                                                </div>
                                            </label>  
                                                                                      
                                            <label class='slider6 slide' for=slide2>
                                                <input type=radio id=slide2 />
                                                <img src=${ fruitPunchFlyerImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>FruitPunch AI flyer</p>
                                                </div>
                                            </label>

                                            <label class='slider6 slide' for=slide3>
                                                <input type=radio id=slide3 />
                                                <img src=${ fruitPunchContactCardsImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>FruitPunch AI contact cards</p>
                                                </div>
                                            </label>
                                            
                                            <label class='slider6 slide' for=slide4>
                                                <input type=radio id=slide4 />
                                                <img src=${ fruitPunchWebsiteImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>FruitPunch AI website</p>
                                                </div>
                                            </label>
                                            
                                            <label class='slider6 slide' for=slide5>
                                                <input type=radio id=slide5 />
                                                <img src=${ fruitPunchTshirtImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>FruitPunch AI event T-shirt</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class='metadata-work'>
                                    <time>January 2019 - Now</time>
                                    <p>
                                        Graphic Design &#9642; Web Design<br>
                                        <a href='https://fruitpunch.ai/' target='_blank'>
                                            <img src=${ websiteIcon } alt='link icon'> FruitPunch AI website
                                        </a>

                                        <!--<br />

                                        <a href='docs/brochure_autarco.pdf' target='_blank'>
                                            <img src=require('../img/link_icon.svg') } alt='link icon'> Autarco brochure
                                        </a>-->
                                    </p>
                                </div>
                            </div>

                            <div class='text-work'>
                                <p>FruitPunch AI is a relatively new <a href='https://www.tue.nl/en/tue-campus/meeting-working-together/student-teams/' target='_blank'>
                                student team</a> at Eindhoven University of Technology.
                                The aim to educate people by presenting them with cutting-edge technology of applied AI 
                                through masterclasses, weekly AI Code sessions and an AI-esports competition to apply AI 
                                for Good. This platform of sharing knowledge further contributes to the university education.<br>
                                <br>
                                For the team redesigned the <b>logo</b> and set up the basis for the <b>branding</b>. 
                                Currently my work is focused on creating <b>promotional material</b> for events and workshops. 
                                </p>
                            </div>
                        </section>
                        
                        <section class='section-work'>
                            <div class='visuals-work'>
                                <h2 id='link5'>Student Team VIRTUe</h2>

                                <h3>Building a sustainable home for an international competition</h3>

                                <div class='slideshow'>
                                    <div class='controls'>
                                        <label class='checked' for=slider5></label>
                                        <label for=slider5></label>
                                        <label for=slider5></label>
                                        <label for=slider5></label>
                                        <label for=slider5></label>
                                        <label for=slider5></label>
                                        <label for=slider5></label>
                                        <label for=slider5></label>
                                        <label for=slider5></label>
                                    </div>

                                    <div class='overflow'>
                                        <div class='slider5 inner'>
                                            <label class='slider5 slide' for=slide1>
                                                <input checked='checked' type=radio id=slide1 />
                                                <img src=${ linqSideImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>House LINQ</p>
                                                </div>
                                            </label>

                                            <label class='slider5 slide' for=slide2>
                                                <input type=radio id=slide2 />
                                                <img src=${ webAppImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Web app</p>
                                                </div>
                                            </label>
                                            
                                            <label class='slider5 slide' for=slide3>
                                                <input type=radio id=slide3 />
                                                <img src=${ webAppInterfaceImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Web app interface concept</p>
                                                </div>
                                            </label>

                                            <label class='slider5 slide' for=slide4>
                                                <input type=radio id=slide4 />
                                                <img src=${ sdmeTeamImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>This is how I look while cheering</p>
                                                </div>
                                            </label>
                                            
                                            <label class='slider5 slide' for=slide5>
                                                <input type=radio id=slide5 />
                                                <img src=${ virtueWebsiteImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>VIRTUe website design</p>
                                                </div>
                                            </label>
                                            
                                            <label class='slider5 slide' for=slide6>
                                                <input type=radio id=slide6 />
                                                <img src=${ virtueLogoImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>VIRTUe corporate identity</p>
                                                </div>
                                            </label>

                                            <label class='slider5 slide' for=slide7>
                                                <input type=radio id=slide7 />
                                                <img src=${ virtueContactCardsImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Contact cards design</p>
                                                </div>
                                            </label>

                                            <label class='slider5 slide' for=slide8>
                                                <input type=radio id=slide8 />
                                                <img src=${ virtueBannerMockupsImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Rollup banners design</p>
                                                </div>
                                            </label>

                                            <label class='slider5 slide' for=slide9>
                                                <input type=radio id=slide9 />

                                                <iframe
                                                src='https://www.youtube-nocookie.com/embed/HQrPapE-F9M' 
                                                frameborder='0'
                                                allow='encrypted-media;' 
                                                allowfullscreen>     
                                                </iframe>

                                                <!--<iframe
                                                src='https://www.youtube-nocookie.com/embed/F8mTVBn1Zn4' 
                                                frameborder='0'
                                                allow='encrypted-media;' 
                                                allowfullscreen>     
                                                </iframe>-->
                                                <!--<video controls>
                                                    <source src={ require('../vid/virtue_logo_video.mp4') } type='video/mp4'>
                                                    Your browser does not support the video tag.
                                                </video>-->

                                                <div class='img-description'>
                                                    <p>Introduction video about house LINQ</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class='metadata-work'>
                                    <time>September 2015 - December 2018</time>
                                    <p>
                                        Extra-curricular &#9642; Graphic Design &#9642; Web & App Design<br>
                                        <a href='https://teamvirtue.nl/' target='_blank'>
                                            <img src=${ websiteIcon } alt='link icon'> VIRTUe website
                                        </a>

                                        <br />

                                        <a href='https://teamvirtue.nl/webapp/' target='_blank'>
                                            <img src=${ websiteIcon } alt='link icon'> Web app for LINQ
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div class='text-work'>
                                <p>What started as a project from my university's <b>Honors Academy</b>, resulted in an official 
                                new student team, called VIRTUe. For three years I have worked with a large 
                                multi-disciplinary team to compete in the <b>Solar Decathlon Middle East 2018 edition (SDME)</b> 
                                in Dubai. This is an international competition where 16 university teams from all over the 
                                world designed, operated and built a sustainable home and competed against each other on 
                                ten sub-categories. For this we designed and built LINQ, one of the apartments from an 
                                apartment complex that stimulates sustainable and social living. You can read more about
                                it on <a href='https://teamvirtue.nl/linq/' target='_blank'>VIRTUe's website</a>, if you're interested.<br>
                                <br>
                                I was part of the communication sub-team of VIRTUe. I was responsible for all the graphic 
                                and logo designs, the website and a web interface for the home. Eventually we won <b>2nd 
                                place</b> for the subcategory Communication, overall winning the <b>6th place</b>. From the very 
                                beginning I had been involved with this project. Since then I gained a lot of experience 
                                in working in large team with different backgrounds.<br>
                                <br>
                                A new team was recruited and is now competing in the <a href='https://sde21.eu/' target='_blank'>Solar 
                                Decathlon Europe</a> set in Wuppertal.
                                </p>
                            </div>
                        </section>
                        
                        <section class='section-work'>
                            <div class='visuals-work'>
                                <h2 id='link4'>Autarco</h2>

                                <h3>Graphic design for a company specialised in solar PV technology</h3>

                                <div class='slideshow'>
                                    <div class='controls'>
                                        <label class='checked' for=slider4></label>
                                        <label for=slider4></label>
                                        <label for=slider4></label>
                                    </div>

                                    <div class='overflow'>
                                        <div class='slider4 inner'>
                                            <label class='slider4 slide' for=slide1>
                                                <input checked='checked' type=radio id=slide1 />
                                                <img src=${ autarcoInfographicImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Autarco solar system infographic from brochure</p>
                                                </div>
                                            </label>

                                            <label class='slider4 slide' for=slide2>
                                                <input type=radio id=slide2 />
                                                <img src=${ autarcoWebsiteImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Autarco website</p>
                                                </div>
                                            </label>
                                            
                                            <label class='slider4 slide' for=slide3>
                                                <input type=radio id=slide3 />
                                                <img src=${ autarcoFlyerImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Autarco flyer</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class='metadata-work'>
                                    <time>January 2018 - October 2019</time>
                                    <p>
                                        Work &#9642; Graphic Design<br>
                                        <a href='https://autarco.com/' target='_blank'>
                                            <img src=${ websiteIcon } alt='link icon'> Autarco website
                                        </a>

                                        <!--<br />

                                        <a href='docs/brochure_autarco.pdf' target='_blank'>
                                            <img src=require('../img/link_icon.svg') } alt='link icon'> Autarco brochure
                                        </a>-->
                                    </p>
                                </div>
                            </div>

                            <div class='text-work'>
                                <p>Autarco is a Dutch company located in Eindhoven that deliver complete solar PV (Photovoltaic)
                                    systems. I started working at Autarco in January 2018 on redesigning the visual identity
                                    an branding of the company. Based on new branding guidelines me and a colleague had set up,
                                    we designed several <b>promotion materials</b> related to solar PV technologies, such as
                                    brochures and datasheets.<br/>
                                    <br />
                                </p>
                            </div>
                        </section>
                                                
                        <section class='section-work'>
                            <div class='visuals-work'>
                                <h2 id='link3'>Aiden</h2>

                                <h3>Final Bachelor Project</h3>

                                <div class='slideshow'>
                                    <div class='controls'>
                                        <label class='checked' for=slider3></label>
                                        <label for=slider3></label>
                                        <label for=slider3></label>
                                        <label for=slider3></label>
                                        <label for=slider3></label>
                                        <label for=slider3></label>
                                    </div>

                                    <div class='overflow'>
                                        <div class='slider3 inner'>
                                            <label class='slider3 slide' for=slide1>
                                                <input checked='checked' type=radio id=slide1 />
                                                <img src=${ aidenHandImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Phone dock prototype</p>
                                                </div>
                                            </label>

                                            <label class='slider3 slide' for=slide2>
                                                <input type=radio id=slide2 />
                                                <img src=${ aidenPhoneMockupImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Digital assistant prototype</p>
                                                </div>
                                            </label>

                                            <label class='slider3 slide' for=slide3>
                                                <input type=radio id=slide3 />
                                                <img src=${ aidenMeImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Me testing the prototype</p>
                                                </div>
                                            </label>

                                            <label class='slider3 slide' for=slide4>
                                                <input type=radio id=slide4 />
                                                <img src=${ aidenDemoDayImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Demo Day set-up</p>
                                                </div>
                                            </label>
                                            
                                            <label class='slider3 slide' for=slide5>
                                                <input type=radio id=slide5 />
                                                <img src=${ aidenConceptUI2Image } alt='image'>

                                                <div class='img-description'>
                                                    <p>Aiden concept UI: assistant enabled in chats</p>
                                                </div>
                                            </label>
                                            
                                            <label class='slider3 slide' for=slide6>
                                                <input type=radio id=slide6 />
                                                <img src=${ aidenConceptUI1Image } alt='image'>

                                                <div class='img-description'>
                                                    <p>Aiden concept UI: assistant summary</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class='metadata-work'>
                                    <time>January 2018 - July 2018</time>
                                    <p>
                                        Final Bachelor Project &#9642; Interaction Design &#9642; Personal Assistent<br>

                                        <a href='https://www.hervitas.nl/' target='_blank'>
                                            <img src=${ clientIcon } alt='client icon'> Client: Hervitas
                                        </a>

                                        </br>

                                        <a href='http://aiden.aidanbundel.com/' target='_blank'>
                                            <img src=${ websiteIcon } alt='link icon'> Aiden assistant demo
                                        </a>
                                        
                                        <br/>

                                        <a href=${ aidenPoster } target='_blank'>
                                            <img src=${ linkIcon } alt='link icon'> Aiden infographic poster
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div class='text-work'>
                                <p>For my final Bachelor project, I researched the <b>distractive effects of smartphones</b> and designed Aiden, a tool that
                                aims to reduce these effects.<br>
                                <br>
                                Overuse of smartphones can result in a number of different physical and psychological problems. Examples
                                are reduced concentration, divided attention and increased fear of missing out. By conducting user tests,
                                such as questionnaires and expert interviews and studying existing methods to reduce phone use I gained
                                more insight in how to design an effective product. My final design consisted of a physical and digital
                                component, both using a different approach. Aiden aims to make a phone less distracting by reducing
                                message notifications and keeping it out of sight whenever possible. A <b>digital assistant</b> is able to act on behalf
                                of the user and respond to certain messages for you. For minimal distraction, the phone can be put in a
                                <b>physical phone dock</b>. The assistant will then be automatically activated. This 
                                project also posed interesting questions such as: how much control are we willing to give
                                away to AI? How much data are we willing to share?
                                </p>
                            </div>
                        </section>
                        
                        <section class='section-work'>
                            <div class='visuals-work'>
                                <h2 id='link2'>Lullabear</h2>
                                <h3>Intelligent bear for soothing sleeping babies</h3>

                                <div class='slideshow'>
                                    <div class='controls'>
                                        <label class='checked' for=slider2></label>
                                        <label for=slider2></label>
                                        <label for=slider2></label>
                                        <label for=slider2></label>
                                    </div>

                                    <div class='overflow'>
                                        <div class='slider2 inner'>
                                            <label class='slider2 slide' for=slide1>
                                                <input checked='checked' type=radio name=slider id=slide1 />
                                                <img src=${ iipBear2Image } alt='image'>

                                                <div class='img-description'>
                                                    <p>Lullabear final prototype</p>
                                                </div>
                                            </label>

                                            <!--<label class='slider4 slide' for=slide2>
                                                <input type=radio name=slider id=slide2 />
                                                <img src={ require('../img/iip_bear2_top.jpg') } alt='image'>

                                                <div class='img-description'>
                                                    <p>Lullabear final prototype</p>
                                                </div>
                                            </label>-->
                                            
                                            <label class='slider2 slide' for=slide2>
                                                <input type=radio name=slider id=slide2 />
                                                <img src=${ iipElectronicsImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Lullabear electronics case</p>
                                                </div>
                                            </label>
                                            
                                            <label class='slider2 slide' for=slide3>
                                                <input type=radio name=slider id=slide3 />
                                                <img src=${ iipInterfaceImage } alt='image'>

                                                <div class='img-description'>
                                                    <p>Lullabear interface</p>
                                                </div>
                                            </label>
                                            
                                            <label class='slider2 slide' for=slide4>
                                                <input type=radio name=slider id=slide4 />
                                                <img src=${ iipBear1Image } alt='image'>

                                                <div class='img-description'>
                                                    <p>Lullabear first prototype</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class='metadata-work'>
                                    <time>February 2016 - June 2016</time>
                                    <p>
                                        Course &#9642; Machine Learning<br>
                                        <!--<a href={ require('../docs/iip_report.pdf') } target='_blank'>
                                            <img src={ require('../img/link_icon.svg') } alt='link icon'> Report
                                        </a>-->
                                    </p>
                                </div>
                            </div>

                            <div class='text-work'>
                                <p>During a eight-week course called Interactive Intelligent Products I worked together 
                                with a group and created a prototype called the Lullabear. The Lullabear uses a 
                                <b>supervised machine learning algorithm</b> to identify different emotional states of a baby. 
                                It can then take preemptive actions to soothe the baby back to sleep, hence reducing the 
                                need of parent interventions. Thus it attempts to provide both the baby and the parents 
                                with a <b>less disrupted sleep</b>. The product is a combination of hardware modules inside a 
                                teddy bear that together evaluate the baby’s sleep, take actions to soothe the baby and 
                                display the monitored information to an interface. 
                                </p>
                            </div>
                        </section>

                        <section class='section-work'>
                            <div class='visuals-work'>
                                <h2 id='link1'>Radiomenta</h2>
                                <h3>Music player for elderly with dementia</h3>

                                <div class='slideshow'>
                                    <div class='controls'>
                                        <label class='checked' for=slider1></label>
                                        <label for=slider1></label>
                                    </div>

                                    <div class='overflow'>
                                        <div class='slider1 inner'>
                                            <label class='slider1 slide' for=slide1>
                                                <input checked='checked' type=radio name=slider id=slide2 />
                                                <img src=${ radiomentaImage } alt='image'>
                                                <!--<img src='/src/img/radiomenta.JPG' alt='image'>-->

                                                <div class='img-description'>
                                                    <p>Radiomenta prototypes</p>
                                                </div>
                                            </label>

                                            <label class='slider1 slide' for=slide1>
                                                <input type=radio name=slider id=slide2 />
                                                <video width='100%' controls>
                                                    <source src=${ radiomentaVideo } type='video/mp4'>
                                                    <!--<source src='/src/vid/radiomenta_video.mp4' type='video/mp4'>-->
                                                    Your browser does not support the video tag.
                                                </video>

                                                <div class='img-description'>
                                                    <p>Radiomenta project video (no sound)</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class='metadata-work'>
                                    <time>February 2016 - June 2016</time>
                                    <p>
                                        Research Project &#9642; Social Inclusion &#9642; Animation<br>
                                        <a href='https://www.vitalisgroep.nl/' target='_blank'>
                                            <img src=${ clientIcon } alt='client icon'> Client: Vitalis
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div class='text-work'>
                                <p>Elderly with dementia, are often excluded from society. This isolation is for a great 
                                deal caused by the disease itself, which, together with memory loss, leads to the feeling 
                                of loss of control and personal identity. This loss of independency can lead to problems 
                                such as anxiety, depression and even aggression. <br>
                                <br>The outcome of the <b>research project</b> in my second year proposes a suggestion for solving 
                                this issue. By first testing which visual and auditory stimuli elderly are familiar with, 
                                this new knowledge was translated to a <b>conceptual product</b>. The idea of this concept 
                                is a music player that looks similar to an old radio. It can play <b>personalised music</b> 
                                by using fingerprint recognition when dialing the buttons So without help from caretaker 
                                they are able to play their favourite music. Consequently, a new way of gaining feelings 
                                of independence and positively affect the well-being is created.
                                </p>
                            </div>
                        </section>
                        
                        <footer-element></footer-element>
                    </div>
                </div>
            </div>
        `;
    },
    animate: async () => { // TODO: Put all element animation here? Combine animate & load functions with a boolean
        // console.log('Work animated');

        // window.scrollTo(0, 0);

        window.addEventListener('scroll', scrollMenu);

        DOM.selectAll('.sub-menu, .sub-menu li').css({ 'opacity': 0 });
        DOM.select('.sub-menu').removeClass('open');
        DOM.selectAll('.sub-menu li').removeClass('slide');

        menuClick();

        // Add event listener for triggering transition from the actual page to the new one
        document.querySelectorAll('[data-type*="page-replace"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="page-exit"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });

        document.querySelectorAll('.controls label').forEach((element) => {
            element.addEventListener('click', (event) => {
                const index = DOM.DOM(event.currentTarget).index() + 1, // TODO: fix DOM.DOM names?
                    // let index = $(event.currentTarget).index() + 1,
                    // event.currentTarget.getAttribute('data-type').split('_'),
                    slider = event.currentTarget.getAttribute('for'),
                    //slidesWidth = $('.' + slider + '.slide').width(),
                    slidesHeight = document.querySelector('.' + slider + '.slide').clientHeight;
                // slidesHeight = $('.' + slider + '.slide').height();

                DOM.DOM(event.currentTarget).toggleSiblings('checked');

                //window.removeEventListener('resize', resizeSlideShow);

                // TweenMax.to(document.querySelector('.text-work'), 1, {css:{top:'100px', backgroundColor:'#ff0000', fontSize:'12px'}, delay:0.5});

                TweenMax.to(document.querySelector('.' + slider + '.inner'), 0.5, {
                    y: -slidesHeight * index + slidesHeight,
                });

                setTimeout(() => {
                    window.addEventListener('resize', () => { // TODO: when to remove this listener?
                        const breakpointLarge = window.matchMedia('(max-width: 1500px)'),
                            breakpointMedium = window.matchMedia('(max-width: 900px)'),
                            breakpointMobile = window.matchMedia('(max-width: 500px)');

                        if (breakpointMobile.matches) {
                            DOM.select('.' + slider + '.inner').css({ 'margin-top': -200 * index + 200 + 'px' });
                        } else if (breakpointMedium.matches) {
                            // window width is at most 1200px
                            DOM.select('.' + slider + '.inner').css({ 'margin-top': -52 * index + 52 + 'vw' });
                        } else if (breakpointLarge.matches) {
                            DOM.select('.' + slider + '.inner').css({ 'margin-top': -36 * index + 36 + 'vw' });
                        } else {
                            DOM.select('.' + slider + '.inner').css({ 'margin-top': -26 * index + 26 + 'vw' });
                        }
                    });
                }, 750);
            });
        });

        window.setTimeout(() => {
            DOM.selectAll('.sub-menu, .sub-menu li').css({ 'opacity': 1 });
            DOM.select('.sub-menu').addClass('open');
            DOM.selectAll('.sub-menu li').addClass('slide');
        }, 500);
    },
    load: async () => {
        // console.log('Work loaded');

        window.addEventListener('scroll', scrollMenu);

        DOM.select('.canvas').removeClass('half-open');
        DOM.select('.canvas').addClass('closed');
        DOM.select('.mobile-canvas-transition').addClass('slide-up');

        menuClick();

        // Add event listener for triggering transition from the actual page to the new one
        document.querySelectorAll('[data-type*="page-replace"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });
        document.querySelectorAll('[data-type*="page-exit"]').forEach((element) => {
            element.addEventListener('click', (event) => pageTrigger(event));
        });

        document.querySelectorAll('.controls label').forEach((element) => {
            element.addEventListener('click', (event) => {
                let index = DOM.DOM(event.currentTarget).index() + 1, // TODO: fix DOM.DOM names
                    // let index = $(event.currentTarget).index() + 1,
                    // event.currentTarget.getAttribute('data-type').split('_'),
                    slider = event.currentTarget.getAttribute('for'),
                    //slidesWidth = $('.' + slider + '.slide').width(),
                    slidesHeight = document.querySelector('.' + slider + '.slide').clientHeight,
                    // slidesHeight = $('.' + slider + '.slide').height();
                    radioButton = event.currentTarget;

                DOM.DOM(radioButton).toggleSiblings('checked');

                //window.removeEventListener('resize', resizeSlideShow);

                // TweenMax.to(document.querySelector('.text-work'), 1, {css:{top:'100px', backgroundColor:'#ff0000', fontSize:'12px'}, delay:0.5});

                TweenMax.to(document.querySelector('.' + slider + '.inner'), 0.5, {
                    y: -slidesHeight * index + slidesHeight,
                });

                window.addEventListener('resize', () => { // TODO: when to remove this listener?
                    DOM.DOM(radioButton.parentNode.children[0]).addClass('checked');
                    DOM.DOM(radioButton).removeClass('checked');
                    TweenMax.to(document.querySelector('.' + slider + '.inner'), 0.5, {
                        y: 0,
                    });
                });

                /*setTimeout(() => {
                    window.addEventListener('resize', () => { // TODO: reimplement this listener?
                        const breakpointLarge = window.matchMedia('(max-width: 1500px)'),
                            breakpointMedium = window.matchMedia('(max-width: 900px)'),
                            breakpointMobile = window.matchMedia('(max-width: 500px)');

                        if (breakpointMobile.matches) {
                            DOM.select('.' + slider + '.inner').css({ 'margin-top': -200 * index + 200 + 'px' });
                        } else if (breakpointMedium.matches) {
                            // window width is at most 1200px
                            DOM.select('.' + slider + '.inner').css({ 'margin-top': -52 * index + 52 + 'vw' });
                        } else if (breakpointLarge.matches) {
                            DOM.select('.' + slider + '.inner').css({ 'margin-top': -36 * index + 36 + 'vw' });
                        } else {

                    });
                }, 750);*/
            });
        });
    }
};

export default Work;
