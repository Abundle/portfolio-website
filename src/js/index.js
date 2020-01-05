// Load webcomponents loader, which includes all the necessary polyfills
// import '@webcomponents/webcomponentsjs/webcomponents-loader';

// TODO: use await import?
// Local import
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Item from './pages/Item';
import items from './pages/gallery/items';
import Error404 from './pages/Error404';

import Utils from './Utils.js';
import { intervalGallery, intervalCarousel } from './PageAnimations';
import * as DOM from './DOMFunctions';

import '../scss/main.scss';

// TODO: also make the website work without JavaScript?
// TODO: create type='module' javascript tag in index.html + Dev-server with ES6 JavaScript?
//  + Check DRY & .babelrc
//  + Check lazy-loading images (https://www.sitepoint.com/five-techniques-lazy-load-images-website-performance/)
//  + Check https://stackoverflow.com/questions/52922150/disable-in-chrome-active-resource-loading-per-frame-limit
// TODO: create type='module' javascript tag in index.html
// TODO: Use Modernizr?
// TODO: Re-implement Google Maps
// TODO: Test site with Google Lighthouse
// TODO: Use custom enum or object for switch cases + use enums for boolean
// TODO: Check https://www.polymer-project.org/
// TODO: Check 3D navigation effects on mobile (check Minh Pham)
// TODO: Check Google Tag manager
// TODO: Check https://babeljs.io/docs/en/babel-plugin-transform-runtime

// Setup from https://dev.to/rishavs/making-a-single-page-app-in-ye-good-olde-js-es6-3eng

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : Home,
    '/work'         : Work,
    '/about'        : About,
    '/contact'      : Contact,
    '/gallery'      : Gallery,
    '/gallery/:id'  : Item,
};
// const transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

let isAnimating = false,
    newLocation,
    firstLoad = false;

    //animationEnd = 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',
    // transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd transitioned',
    // $root = $('html, body');

// Router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {};

// TODO: Check async variable
//  + Check https://www.ynonperek.com/2017/08/24/vanilla-single-page-router-architecture/
//  & https://medium.com/@bryanmanuele/how-i-implemented-my-own-spa-routing-system-in-vanilla-js-49942e3c4573
//  & https://medium.freecodecamp.org/do-we-still-need-javascript-frameworks-42576735949b
//  When navigating from Gallery to Home again and then press work/about/contact, the pseudo boxes appear too quickly
//  and page animation in general is too fast.
//  + Check https://webassembly.org
//  + Check AMP & https://hover-pointer-media-query.glitch.me & SEO (see mail)

let loadContent = async (url, bool, type) => {
    // Lazy load view element:
    let content = null || document.getElementById('main');
    let delay = 800; //600

    let request = Utils.parseRequestURL(url);
    let parsedURL = (request.resource ? '/' + request.resource : '/');
    let page;

    // Check if request.id exists
    if (request.id) { // TODO: check what happens with /gallery/3/hi
        // Check if request.id is in the range of items
        if (request.id <= items.length && request.id > 0) {
            parsedURL += '/:id';
            page = routes[parsedURL] ? routes[parsedURL] : Error404;
            // page = routes[parsedURL];
            // console.log(await page.render(request.id))
            content.innerHTML = await page.render(request.id);
        } else {
            page = Error404;
            content.innerHTML = await page.render();
        }
    } else {
        page = routes[parsedURL] ? routes[parsedURL] : Error404;
        content.innerHTML = await page.render();
    }

    // let id = request.id <= items.length ? (request.id ? '/:id' : '') : 'Error404';

    //let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '');

    // $('.content').hide().removeClass('active');
    // $('.greeting-container').css({ 'opacity': 0 });
    // $('.greeting-container').hide();

    switch(type) {
    case 'page-stack':
        // initMap();
        window.scrollTo(0, 0);

        DOM.select('.content').removeClass('active'); // TODO: Check CSS class active (maybe not always necessary in HTML?)
        // DOM.select('.content').hide().removeClass('active');
        DOM.select('.exit').removeClass('drop-down');
        // DOM.select('.menu-box-overlay').hide();

        setTimeout(() => {
            DOM.select('.content').addClass('active');
            DOM.select('.exit').addClass('drop-down');
            // DOM.select('.menu-box-overlay').show();
        }, 200);

        // Animate elements specific to page
        await page.animate();

        isAnimating = false;
        break;
    case 'page-exit': // TODO: Check if exit and gallery-exit can be combined
        DOM.select('.canvas').addClass('open');
        DOM.select('.canvas').removeClass('closed');

        DOM.select('.menu-box1').addClass('stack-box1');
        DOM.select('.menu-box2').addClass('stack-box2');
        DOM.select('.menu-box3').addClass('stack-box3');

        // $('.canvas').addClass('default');
        // $('.canvas').removeClass('closed');
        DOM.select('.mobile-canvas-transition').removeClass('slide-up');

        DOM.selectAll('[class *= "carousel-slide-"]').addClass('fade-out');
        DOM.select('.canvas-arrow').addClass('fade-out');

        // $('.carousel-container').hide().delay(500).fadeIn();

        for (let i = 3; i > 0; i--) {
            // console.log(i, delay += 100)
            setTimeout(() => {
                DOM.select('.menu-box' + i).removeClass('stack-box' + i);
            }, delay += 100);
        }

        /*for (let i = 1; i < 4; i++) {
            // console.log(i, delay)
            setTimeout(() => {
                DOM.select('.pseudo-menu-box' + i).addClass('stacked-outro');
            }, delay += 250);
        }*/

        document.querySelector('.menu-box3').addEventListener('transitionend', () => {
        // $('.menu-box3').one('transitionend', () => {
            DOM.select('.canvas-arrow').removeClass('fade-out');

            intervalCarousel(false);
        }, { once: true }); // Option from https://developers.google.com/web/updates/2016/10/addeventlistener-once

        await page.animate();

        isAnimating = false;
        break;
    case 'page-replace':
        // initMap();
        // window.scrollTo(0, 0);

        DOM.select('.content').removeClass('active');

        setTimeout(() => {
            DOM.select('.content').addClass('active');
        }, 200);

        await page.animate();

        isAnimating = false;
        break;
    case 'gallery-stack':
        window.scrollTo(0, 0);

        DOM.selectAll('[class *= "gallery-slide-"]').addClass('slide-out');

        intervalGallery('slide-out', false);

        await page.animate();

        isAnimating = false;
        break;
    case 'gallery-exit':
        // TODO: unique case; if the window is smaller than 1200px and larger than 900px, the gallery container blocks the home button
        DOM.select('.canvas').addClass('open');
        DOM.select('.canvas').removeClass('half-open');

        DOM.select('.greeting-container').addClass('fade-out');

        DOM.select('.menu-box1').addClass('stack-box1');
        DOM.select('.menu-box2').addClass('stack-box2');
        DOM.select('.menu-box3').addClass('stack-box3');

        DOM.select('.canvas-arrow-container').addClass('closed');
        DOM.select('.canvas-arrow').addClass('flip');

        DOM.select('.canvas').removeClass('half-open');
        DOM.select('.mobile-canvas-transition').removeClass('slide-up');

        setTimeout(() => {
            DOM.select('.greeting-container').removeClass('fade-out');
        }, 500);

        DOM.selectAll('[class *= "carousel-slide-"]').addClass('fade-out');

        for (let i = 3; i > 0; i--) {
            // console.log(i, delay += 100)
            setTimeout(() => {
                DOM.select('.menu-box' + i).removeClass('stack-box' + i);
            }, delay += 100);
        }

        setTimeout(() => {
            DOM.select('.canvas-arrow-container').removeClass('closed');
            DOM.select('.canvas-arrow').removeClass('flip');
        }, 300);

        document.querySelector('.menu-box3').addEventListener('transitionend', () => {
        // $('.menu-box3').one('transitionend', () => {
            intervalCarousel(false);
        }, { once: true });

        await page.animate();

        isAnimating = false;
        break;
    case 'image-detail':
        DOM.select('.back').removeClass('drop-down');
        //$('.gallery-image-description').removeClass('active');
        DOM.select('.gallery-image-description').addClass('hidden');
        DOM.select('.gallery-image-canvas').addClass('fade-out');
        DOM.selectAll('.gallery-arrow').addClass('fade-out');

        setTimeout(() => {
            DOM.select('.gallery-image-canvas').removeClass('fade-out');
            DOM.selectAll('.gallery-arrow').removeClass('fade-out');
        }, 100);

        setTimeout(() => {
            DOM.select('.gallery-image-description').removeClass('hidden');
        }, 400);

        setTimeout(() => {
            DOM.select('.back').addClass('drop-down');
        }, 600);

        await page.animate();

        isAnimating = false;
        break;
    case 'image-detail-go-back':
        DOM.selectAll('[class *= "gallery-slide-"]').addClass('slide-down');
        // DOM.select('.canvas-arrow-container').addClass('fade-out');

        DOM.select('.canvas').removeClass('fullscreen');
        DOM.select('.canvas').addClass('half-open');

        DOM.select('.canvas-arrow').addClass('fade-out');

        /*setTimeout(() => {
            DOM.select('.canvas-arrow-container').removeClass('fade-out');
        }, 750);*/

        //$('.canvas').one('transitionend', () => {
        setTimeout(() => {
            DOM.select('.canvas-arrow').removeClass('fade-out');

            intervalGallery('slide-down', false);
        }, 200);

        await page.animate();

        isAnimating = false;
        break;
    case 'image-detail-go':
        DOM.select('.gallery-image-text').addClass('fade-out');

        setTimeout(() => {
            DOM.select('.gallery-image-text').removeClass('fade-out');
        }, 100);

        await page.animate();

        setTimeout(() => {
            isAnimating = false;
        }, 500);
        break;
    default:
        await page.load(); // TODO: move this to another function so that 'await page.animate()' lines can be after the switch statement?

        // console.log('load content: ' + type);
        isAnimating = false;
    }

    if (url !== window.location && bool) {
        // Add the new page to the window.history
        // If the new page was triggered by a 'popstate' event, don't add it
        window.history.pushState({ path: url }, '', url);
    }
};

let changePage = (url, bool, type) => {
    let delay = 0;

    isAnimating = true;

    // trigger page animation
    switch(type) {
    case 'page-stack':
        // console.log(document.querySelectorAll('[class *= "gallery-slide-"]'));
        DOM.selectAll('[class *= "gallery-slide-"]').addClass('fade-out');
        // debugger;
        DOM.select('.menu-box1').addClass('stack-box1');
        DOM.select('.menu-box2').addClass('stack-box2');
        DOM.select('.menu-box3').addClass('stack-box3');

        // TODO: Replacing transitionend with variable transitionEnd does not seem to work + Create function for for loop (#DRY)
        document.querySelector('.menu-box1').addEventListener('transitionend', () => {
            for (let i = 1; i < 4; i++) {
                // console.log(i, delay)
                setTimeout(() => {
                    DOM.select('.pseudo-menu-box' + i).removeClass('stacked-outro');
                }, delay += 250);
            }
        });

        /*$('.menu-box1').on('transitionend', () => {
            $('.pseudo-menu-box2').delay(250).queue(() => {
                DOM.select('.pseudo-menu-box2').removeClass('stacked-outro');
            });
            $('.pseudo-menu-box3').delay(500).queue(() => {
                DOM.select('.pseudo-menu-box3').removeClass('stacked-outro');
            });
        });*/

        intervalGallery('slide-out', true);
        intervalCarousel(true);

        DOM.select('.canvas').removeClass('half-open');
        DOM.select('.canvas').addClass('closed');
        DOM.select('.canvas-arrow').addClass('fade-out');
        // DOM.select('.canvas-arrow-container').addClass('fade-out');
        //$('.canvas-arrow-container').fadeOut(200);

        // $('.mobile-canvas-transition').addClass('slide-up');

        //$('.canvas').one('transitionend', () => { //, .mobile-canvas-transition
        // TODO: find different way to time this + Check .then function (console.log(event) returns undefined)
        setTimeout(() => {
            loadContent(url, bool, type).then((event) => {
                // console.log(event);
                newLocation = url;
            });
            /*loadContent(url, bool, type);
            newLocation = url;*/
        }, 1750);
        break;
    case 'page-exit':
        // window.removeEventListener('scroll', scrollMenu);
        DOM.select('.exit').removeClass('drop-down');

        for (let i = 1; i < 4; i++) {
            setTimeout(() => {
                DOM.select('.menu-box' + i).addClass('stacked-outro');
            }, delay += 200);
        }

        /*DOM.select('.menu-box1').addClass('stacked-outro');
        $('.menu-box2').delay(200).queue(() => {
            DOM.select('.menu-box2').addClass('stacked-outro');
        });
        $('.menu-box3').delay(400).queue(() => {
            DOM.select('.menu-box3').addClass('stacked-outro');
        });*/

        DOM.select('.menu-box-overlay').hide();

        DOM.select('.content').removeClass('active');

        DOM.selectAll('.sub-menu li').removeClass('slide');
        DOM.select('.sub-menu').removeClass('open');

        document.querySelector('.menu-box1').addEventListener('transitionend', () => {
        // $('.menu-box1').on(transitionEnd, () => {
            loadContent(url, bool, type).then(() => {
                newLocation = url;
            });
            /*loadContent(url, bool, type);
            newLocation = url;*/
        });
        break;
    case 'page-replace':
        DOM.selectAll('.sub-menu li').removeClass('slide');
        DOM.select('.sub-menu').removeClass('open');

        DOM.select('.content').removeClass('active');

        setTimeout(() => {
            loadContent(url, bool, type).then(() => {
                newLocation = url;
            });
            /*loadContent(url, bool, type);
            newLocation = url;*/
        }, 750);
        break;
        case 'gallery-stack':
        // unique case; if the window is smaller than 1200px and larger than 900px, the article should
        /*if (window.matchMedia('(max-width: 1200px)').matches && window.matchMedia('(min-width: 900px)').matches ) {
            // The viewport is less than, or equal to, 1200 pixels wide
        }*/

        // fade out otherwise it gets in the way with the menu boxes
        DOM.select('.greeting-container').addClass('fade-out');

        DOM.select('.menu-box1').addClass('stack-box1');
        DOM.select('.menu-box2').addClass('stack-box2');
        DOM.select('.menu-box3').addClass('stack-box3');

        document.querySelector('.menu-box1').addEventListener('transitionend', () => {
            for (let i = 1; i < 4; i++) {
                // console.log(i, delay)
                setTimeout(() => {
                    DOM.select('.pseudo-gallery-menu-box' + i).removeClass('unstacked-outro');
                }, delay += 250);
            }
        });
        /*$('.menu-box1').on('transitionend', () => {
            DOM.select('.pseudo-gallery-menu-box1').removeClass('unstacked-outro');
            $('.pseudo-gallery-menu-box2').delay(250).queue(() => {
                DOM.select('.pseudo-gallery-menu-box2').removeClass('unstacked-outro');
            });
            $('.pseudo-gallery-menu-box3').delay(500).queue(() => {
                DOM.select('.pseudo-gallery-menu-box3').removeClass('unstacked-outro');
            });
        });*/

        DOM.select('.canvas-arrow-container').addClass('closed');
        DOM.select('.canvas-arrow').addClass('flip');

        intervalCarousel(true, 100);

        DOM.select('.canvas').addClass('half-open');
        DOM.select('.mobile-canvas-transition').addClass('slide-up');

        //$('.pseudo-gallery-menu-box3').one('transitionend', () => { //, .mobile-canvas-transition'
        setTimeout(() => {
            loadContent(url, bool, type).then(() => {
                newLocation = url;
            });
            /*loadContent(url, bool, type);
            newLocation = url;*/
        }, 2000); // TODO: Time this differently
        break;
    case 'image-detail':
        DOM.select('.canvas').addClass('fullscreen');
        //$('.mobile-canvas-transition').removeClass('slide-up');

        intervalGallery('slide-down', true);

        //$('.canvas-arrow-container').fadeOut(200);
        DOM.select('.canvas-arrow').addClass('fade-out');
        // DOM.select('.canvas-arrow-container').addClass('fade-out');

        //$('.canvas').one('transitionend', () => {
        setTimeout(() => {
            loadContent(url, bool, type).then(() => {
                newLocation = url;
            });
            /*loadContent(url, bool, type);
            newLocation = url;*/
        }, 1000);
        break;
    case 'image-detail-go-back':
        DOM.select('.back').removeClass('drop-down');
        //$('.gallery-image-description').removeClass('active');
        DOM.select('.gallery-image-description').addClass('hidden');

        //$('.mobile-canvas-transition').addClass('slide-up');

        DOM.select('.gallery-image-canvas').addClass('fade-out');
        DOM.selectAll('.gallery-arrow').addClass('fade-out');
        /*$('.gallery-image-canvas').fadeOut();
        $('.gallery-arrow').fadeOut();*/

        document.querySelector('.gallery-image-description').addEventListener('transitionend', () => {
        // $('.gallery-image-description').one('transitionend', () => {
            loadContent(url, bool, type).then(() => {
                newLocation = url;
            });
            /*loadContent(url, bool, type);
            newLocation = url;*/
        }, { once: true });
        break;
    case 'image-detail-go-next':
        DOM.select('.gallery-image-text').addClass('fade-out');
        // $('.gallery-image-text').fadeOut(500);
        DOM.select('.current').addClass('slide-offscreen-left');
        DOM.select('.next').addClass('slide-onscreen');

        setTimeout(() => {
            loadContent(url, bool, 'image-detail-go').then(() => {
                newLocation = url;
            });
            /*loadContent(url, bool, type);
            newLocation = url;*/
        }, 1200);
        break;
    case 'image-detail-go-previous':
        DOM.select('.gallery-image-text').addClass('fade-out');
        // $('.gallery-image-text').fadeOut(500);
        //$('.current').removeClass('slide-offscreen-left');
        //$('.previous').removeClass('slide-onscreen');

        DOM.select('.current').addClass('slide-offscreen-right');
        DOM.select('.previous').addClass('slide-onscreen');

        setTimeout(() => {
            loadContent(url, bool, 'image-detail-go').then(() => {
                newLocation = url;
            });
            /*loadContent(url, bool, type);
            newLocation = url;*/
        }, 1200);
        break;
    case 'gallery-exit':
        intervalGallery('slide-out', true);

        setTimeout(() => { // TODO: Check if necessary
            DOM.select('.gallery-container').addClass('fade-out');
        }, 500);
        /*$('.gallery-container').delay(500).queue(() => {
            DOM.select('.gallery-container').addClass('fade-out');
        });*/

        for (let i = 1; i < 4; i++) {
            setTimeout(() => {
                DOM.select('.menu-box' + i).addClass('unstacked-outro');
            }, delay += 100);
        }
        /*DOM.select('.menu-box1').addClass('unstacked-outro');
        $('.menu-box2').delay(100).queue(() => {
            DOM.select('.menu-box2').addClass('unstacked-outro');
        });
        $('.menu-box3').delay(200).queue(() => {
            DOM.select('.menu-box3').addClass('unstacked-outro');
        });*/

        //$('.menu-box1, .gallery-container').one('transitionend', () => {
        setTimeout(() => {
            loadContent(url, bool, type).then(() => {
                newLocation = url;
            });
            /*loadContent(url, bool, type);
            newLocation = url;*/
        }, 1000); //550
        break;
    default:
        // console.log('change page: ' + type);
        window.location.href = url;

        loadContent(url, bool, type).then(() => {
            newLocation = url;
        });
        /*loadContent(url, bool, type);
        newLocation = url;*/
    }
};

export let pageTrigger = (event) => {
    event.preventDefault();

    // detect which page has been selected
    let newPage = event.currentTarget.getAttribute('href'),
        index = event.currentTarget.getAttribute('data-type').split('_'),
        elements = document.querySelectorAll('.menu-box' + index[1] + ', .mobile-canvas'),
        type = index[0],
        distance = index[1] * 100; // calculate distance for highlighted element

    // console.log(type);

    // if the page is not already being animated - trigger animation
    if (!isAnimating) {
        switch(type) {
        case 'page-stack':
            // TODO: Create CSS class that gets added all the menu boxes except the one that has been clicked? or use CSS selector 'not'
            //  + Check var test = document.querySelectorAll('input[value][type="checkbox"]:not([value=""])');
            // if the page is not already being animated - trigger animation

            /*let nodeList = document.querySelectorAll('.unstacked > div');
            console.log(Array.from(nodeList).filter((item) => {
                console.log(item)
            }));*/
            // $('.unstacked > div').not(elements).css({ 'background-color': '#282828', 'border-color': '#282828' });

            // console.log('.pseudo-menu-box' + index[1])
            DOM.select('.pseudo-menu-box' + index[1]).addClass('clicked');
            changePage(newPage, true, type);
            break;
        case 'page-replace':
            DOM.selectAll('.stacked').addClass('no-hover');
            DOM.selectAll('[class*="menu-box"]').removeClass('clicked');
            DOM.select('.menu-box-overlay').css({
                transform: 'translate3d(0, ' + distance + '%, 0)'
            });

            changePage(newPage, true, type);
            break;
        default:
            changePage(newPage, true, type);
        }
    }

    firstLoad = true;
};


/*$('.welcome-canvas').hide();
$('.welcome-message').hide();*/

// let content = null || document.getElementById('main');

// Listen on hash change?
/*window.addEventListener('hashchange', () => {
    console.log('hash');
});*/

// Listen on page load:
window.addEventListener('load', (event) => {
    // console.log(window.location.pathname);
    // TODO: Check location.pathname variable & .then function
    loadContent(location.pathname, true, 'load').then((test) => {
        // console.log(event);
    });


    /*loadContent(url, bool, type);
    newLocation = url;*/
    // loadContent(location.pathname, true, 'load');
});

window.addEventListener('popstate', (event) => { // TODO: Reimplement this function
    // window.onpopstate = (event) => {
    // await page.load();

    /*
    let page = routes[location.pathname];

    await page.load();

    Of

    router(location.pathname);

    > Returns page variable;

    await page.load();
     */

    // console.log(event, location.pathname);
});

/*document.addEventListener('DOMContentLoaded', (event) => {
    // console.log(event);

    loadContent(location.pathname, true, 'load').then((test) => {
        // console.log(test);

        document.querySelector('.menu-container').addEventListener('click', () => {
            DOM.select('.mobile-overlay').toggleClass('active');
        });
    });

});*/

/*
window.onpopstate = (event) => {
    firstLoad = true; // TODO: Check this variable, does not seem right

    console.log(event.state);

    if (firstLoad) {
        // Safari emits a popstate event on page load - check if firstLoad is true
        // before animating if it's false - the page has just been loaded
        //let currentPage = window.location.pathname.split('/').pop(),
        let currentPage = newLocation, //window.location.href
            //newPageArray = window.location.pathname.split('/'),
            // this is the url of the page to be loaded
            //newPage = newPageArray[newPageArray.length - 1];
            newPage = window.location.pathname.split('/').pop();

        console.log(newPage + ' ' + currentPage);

        if (!isAnimating && newPage !== currentPage) { // newLocation !== newPage, not always the case?

            if (currentPage === 'index.html') {

                if (newPage === 'work.html' || newPage === 'about.html' || newPage === 'contact.html') {
                    console.log('stack');
                    changePage(newPage, false, 'stack');
                } else if (newPage === 'gallery.html') {
                    console.log('gallery-stack');
                    changePage(newPage, false, 'gallery-stack');
                } else {
                    console.log('popstate error 1');
                }
            } else if (currentPage === 'work.html' || currentPage === 'about.html' || currentPage === 'contact.html') {
                if (newPage === 'work.html' || newPage === 'about.html' || newPage === 'contact.html') {
                    console.log('replace');
                    changePage(newPage, false, 'replace');
                } else if (newPage === 'index.html') {
                    console.log('exit');
                    changePage(newPage, false, 'exit');
                } else {
                    console.log('popstate error 2');
                    changePage(newPage, false, 'hello');
                }
            } else if (currentPage === 'gallery.html' || currentPage === '../gallery.html') {
                if (newPage === 'index.html') {
                    console.log('gallery-exit');
                    changePage(newPage, false, 'gallery-exit');
                } else if (newPage.includes('_')) {
                    console.log('image-detail');
                    changePage(newPage, false, 'image-detail');
                } else {
                    console.log('popstate error 3');
                }
            } else if (currentPage !== undefined && newPage === 'gallery.html') {
                console.log('go-back', currentPage);
                changePage(newPage, false, 'back');
            } else { // work/about/contact to gallery scenario
                console.log('popstate transition does not exist, trigger instant page change');
                changePage(newPage, false, 'hello');
            }
        }
    }
    firstLoad = true;
    //});
};*/
