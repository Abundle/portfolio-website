// Credits to https://medium.com/@saginadir/native-function-chaining-in-javascript-what-we-can-learn-from-jquery-3b42d5d4a0d
// & https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/
// hasClass, addClass, etc. from & https://toddmotto.com/javascript-hasclass-addclass-removeclass-toggleclass/

export const DOM = (element) => ({
    css: (styles) => {
    // css: (attribute, value) => {
        for (let property in styles) {
            if (element instanceof NodeList) {
            // if (element instanceof NodeList) {
                // For multiple elements selected with `querySelectorAll`:
                for (let item of element) {
                    item.style.setProperty(property, styles[property]);
                    // item.style[property] = styles[property];
                }
            } else if (element.style) {
            // } else if (element.style) {
                // For one element selected with `getElementById` or `querySelector`
                element.style.setProperty(property, styles[property]);
                // element.style[property] = styles[property];
                // console.log(getComputedStyle(element)['transform']);
            } /*else { // TODO: Check case
                for (let item of element) {
                    console.log(element, item)
                }
            }*/
            /*if (styles.hasOwnProperty(property)) {
                element.style[property] = styles[property];
            }*/
            // element.style[property] = styles[property];
        }
        // element.style[attribute] = value;
        return DOM(element);
    },
    hide: () => {
        // console.log(element.style.display)
        return DOM(element).css({ display: 'none' });
    },
    /*show: () => {
        return DOM(element).css({ display: 'block' });
    },*/
    hasClass: (className) => {
        if (element.classList) {
            return element.classList.contains(className);
        } else {
            // TODO: Check how this works exactly
            let regex = new RegExp('(^| )' + className + '( |$)', 'gi');
            // let regex = new RegExp(' ' + className + ' ');
            return regex.test(' ' + element.className + ' ');
        }

        /*if (element !== null) {
            if (element.classList) {
                return element.classList.contains(className);
            } else {
                let regex = new RegExp('(^| )' + className + '( |$)', 'gi');
                // let regex = new RegExp(' ' + className + ' ');
                return regex.test(' ' + element.className + ' ');
            }
        }*/
    },
    removeClass: (className) => { // TODO: check if this can be less verbose
        if (element !== null) {
            if (element instanceof NodeList) {
            // if (element instanceof NodeList) {
                // For multiple elements selected with `querySelectorAll`:
                for (let item of element) {
                    if (DOM(item).hasClass(className)) {
                        item.classList.remove(className);
                    }
                }
            } else if (DOM(element).hasClass(className)) {
                if (element.classList) {
                    // For one element selected with `getElementById` or `querySelector`
                    element.classList.remove(className);
                } else {
                    let regex = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');
                    element.className = element.className.replace(regex, ' ');
                }
            } else { // TODO: Check case
                // console.log(element, className);
            }
        }
        /*if (element !== null) {
            if (element instanceof NodeList) {
                // For multiple elements selected with `querySelectorAll`:
                for (let item of element) {
                    if (DOM(item).hasClass(className)) {
                        item.classList.remove(className);
                    }
                }
                // return DOM(element);
            } else {
            // } else if (DOM(element).hasClass(className)) {
                // For one element selected with `getElementById` or `querySelector`
                if (element.classList) {
                // if (DOM(element).hasClass(className)) {
                    element.classList.remove(className);
                } else {
                    let regex = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');
                    element.className = element.className.replace(regex, ' ');
                    // return DOM(element).className = element.className.replace(regex, ' ');
                }
                // return DOM(element);
            }
        }*/
        /*if (element !== null) {
            if (element.classList) {
                // return DOM(element).classList.remove(className);
                element.classList.remove(className);
                return DOM(element);
            } else {
                let regex = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');
                // return DOM(element).className = element.className.replace(regex, ' ');
                element.className = element.className.replace(regex, ' ');
                return DOM(element);
            }
        }*/
    },
    addClass: (className) => {
        if (element !== null && !DOM(element).hasClass(className)) {
            if (element instanceof NodeList) {
                // For multiple elements selected with `querySelectorAll`:
                for (let item of element) {
                    if (!DOM(item).hasClass(className)) {
                        item.classList.add(className);
                    }
                }
            }
            if (element.classList) {
            // if (element.classList) {
                // For one element selected with `getElementById` or `querySelector`
                element.classList.add(className);
            }
            else {
                element.className += ' ' + className;
            }
        }
        /*if (element !== null) {
        // if (element !== null && element.classList) {
            if (element instanceof NodeList) {
                // For multiple elements selected with `querySelectorAll`:
                for (let item of element) {
                    if (!DOM(item).hasClass(className)) {
                        item.classList.add(className);
                    }
                }
                // return DOM(element);
            } else {
                // For one element selected with `getElementById` or `querySelector`
                if (!DOM(element).hasClass(className)) {
                    element.classList.add(className);
                } else {
                    element.className += ' ' + className;
                }
                // return DOM(element);
            }
            return DOM(element);
        }*/
        /*if (element !== null) {
            if (element instanceof NodeList) {
                // For multiple elements selected with `querySelectorAll`:
                for (let item of element) {
                    item.classList.add(className);
                }
            } else {
                // For one element selected with `getElementById` or `querySelector`
                element.classList.add(className);
                return DOM(element);
            }

            /!*if (element.classList) {
                // return DOM(element).classList.add(className);
                element.classList.add(className);
                return DOM(element);
            } else {
                // return DOM(element).className += ' ' + className;
                element.className += ' ' + className;
                return DOM(element);
            }*!/
        }*/

    },
    /*toggleClass: (className) => {
        // console.log(className)
        if (element.classList) {
            element.classList.toggle(className);
        } else {
            let classes = element.className.split(' ');
            let existingIndex = classes.indexOf(className);

            if (existingIndex >= 0)
                classes.splice(existingIndex, 1);
            else
                classes.push(className);

            element.className = classes.join(' ');
        }
    },*/
    toggleSiblings: (className) => {
        for (let sibling of element.parentNode.children) {
            DOM(sibling).removeClass(className);
            // sibling.classList.remove('className');
        }
        DOM(element).addClass(className);
        // element.classList.add('className');
    },
    index: () => {
        return [...element.parentNode.children].indexOf(element);
        // or
        // return [...elm.parentNode.children].findIndex(c => c == elm)
    }
});

export const select = (element) => DOM(document.querySelector(element));

// export const selectId = (element) => DOM(document.getElementById(element));

export const selectAll = (element) => DOM(document.querySelectorAll(element));