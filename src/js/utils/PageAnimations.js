import * as DOM from './DOMFunctions';
import { TweenMax, CSSPlugin, gsap } from 'gsap/all';
// import { TweenMax } from 'gsap/all';

// Without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
gsap.registerPlugin(CSSPlugin);

export const scrollMenu = () => {  // TODO: rewrite function using Observer API
    const menuBox = document.querySelector('.menu-box1'),
        menuBoxHeight = menuBox.clientHeight,
        // menuBoxHeight = menuBox.height(),
        menuBoxCenterY = menuBoxHeight / 2 + 20,
        listElementHeight = 50; //$('.sub-menu li').height()

    const headerOne = document.getElementById('link1').offsetTop + 80, //50
        headerTwo = document.getElementById('link2').offsetTop + 80,
        headerThree = document.getElementById('link3').offsetTop + 80,
        headerFour = document.getElementById('link4').offsetTop + 80,
        headerFive = document.getElementById('link5').offsetTop + 80,
        headerSix = document.getElementById('link6').offsetTop + 80;

    const element = document.getElementsByClassName('sub-menu-container'),
        duration = 0.1;

    if (window.scrollY > 0 && window.scrollY < headerSix) {
        TweenMax.to(element, duration, {
            top: menuBoxCenterY
        });
    } else if (window.scrollY > headerSix && window.scrollY < headerFive) {
        TweenMax.to(element, duration, {
            top: menuBoxCenterY - listElementHeight
        });
    } else if (window.scrollY > headerFive && window.scrollY < headerFour) {
        TweenMax.to(element, duration, {
            top: menuBoxCenterY - (listElementHeight * 2)
        });
    } else if (window.scrollY > headerFour && window.scrollY < headerThree) {
        TweenMax.to(element, duration, {
            top: menuBoxCenterY - (listElementHeight * 3)
        });
    } else if (window.scrollY > headerThree && window.scrollY < headerTwo) {
        TweenMax.to(element, duration, {
            top: menuBoxCenterY - (listElementHeight * 4)
        });
    } else if (window.scrollY > headerTwo && window.scrollY < headerOne) {
        TweenMax.to(element, duration, {
            top: menuBoxCenterY - (listElementHeight * 5)
        });
    }
};

export const intervalMenuBoxes = (classElement) => {
    let count = 0;

    const interval = window.setInterval(() => {
        DOM.select('.menu-box' + count).addClass(classElement);
        count += 1;
        //console.log(count);

        if (count === 4) {
            window.clearInterval(interval);
        }
    }, 250);
};

export const intervalGallery = (className, bool) => {
    let slides = 28,
        columns,
        endOfLoop;

    if (window.matchMedia('(max-width: 1200px)').matches) {
        // The viewport is less than, or equal to, 1200 pixels wide
        columns = 1;
    } else if (window.matchMedia('(max-width: 1500px)').matches) {
        // The viewport is less than, or equal to, 1500 pixels wide
        columns = 2;
    } else { // The viewport is greater than 1500 pixels wide
        columns = 3;
    }

    endOfLoop = slides - (columns - 1); // end of the loop depends on the step size
    for (let i = 0; i < 3; i++) { // iterate through rows
        for (let j = i + 1; j <= endOfLoop + i; j+=columns) { // iterate through columns
            // console.log(i, j);
            setTimeout(() => {
                bool ? DOM.select('.gallery-slide-' + j).addClass(className)
                    : DOM.select('.gallery-slide-' + j).removeClass(className);
                // DOM.select('.gallery-slide-' + j).toggleClass(classname, bool);
                // $('.gallery-slide-' + j).toggleClass(classname, bool);
            }, 100 * i + 50 * (j / columns));

            /*$('.gallery-slide-' + j).show().delay(100 * i + 50 * (j / columns)).queue(() => {
                $('.gallery-slide-' + j).toggleClass(classname, bool);
                $('.gallery-slide-' + j).dequeue();
            });*/
            //console.log(i, '.gallery-slide-' + j);
        }
    }
};

export const intervalCarousel = (bool) => {
    let count = 1;

    const interval = window.setInterval(() => {
        bool ? DOM.selectAll('.carousel-slide-' + count).addClass('fade-out')
            : DOM.selectAll('.carousel-slide-' + count).removeClass('fade-out');
        // DOM.selectAll('.carousel-slide-' + count).toggleClass('fade-out', bool);
        // $('.carousel-slide-' + count).toggleClass('fade-out', bool);
        count += 1;

        // console.log(count);

        if (count === 5) {
            window.clearInterval(interval);

            // isAnimating = false;
        }
    }, 100);
};

// export { scrollMenu, intervalMenuBoxes, intervalGallery, intervalCarousel };
