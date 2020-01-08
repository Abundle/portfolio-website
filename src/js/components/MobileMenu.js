// Setup from https://developers.google.com/web/fundamentals/web-components/customelements
// & https://coryrylan.com/blog/introduction-to-web-components

class MobileMenu extends HTMLElement {
    constructor() {
        super(); // Call super() first in constructor to inherit from parent class

        /*this.addEventListener('click', (event) => { // Gets called twice, probably because of the checkbox button
            console.log(event);
            // DOM.select('.mobile-overlay').addClass('active');
        });*/
    }

    /*static get observedAttributes() {
        return ['value'];
    }

    get value() {
        return this._value;
    }*/

    connectedCallback() {
        let page = this.getAttribute('page');

        this.innerHTML = `
            <div class='menu-bar'>
                <input id='slide-sidebar' type='checkbox' role='button' />

                <label for='slide-sidebar'>
                    <span class='menu-container'>
                        <div class='bar1'></div>
                        <div class='bar2'></div>
                    </span>
                </label>

                <nav class='mobile-menu'>
                    ${ page === 'home'      ? `<li>HOME</li>`       : `<li><a href='/'>HOME</a></li>` }
                    ${ page === 'work'      ? `<li>WORK</li>`       : `<li><a href='/work'>WORK</a></li>` }
                    ${ page === 'about'     ? `<li>ABOUT</li>`      : `<li><a href='/about'>ABOUT</a></li>` }
                    ${ page === 'contact'   ? `<li>CONTACT</li>`    : `<li><a href='/contact'>CONTACT</a></li>` }
                    ${ page === 'gallery'   ? `<li>GALLERY</li>`    : `<li><a href='/gallery'>GALLERY</a></li>` }
                </nav>
            </div>
        `;
    }

    disconnectedCallback() {
        // console.log('mobile menu has been removed');
    }
}

// register new tag and associate it with the class
export default customElements.define('mobile-menu', MobileMenu);
