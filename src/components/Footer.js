
class Footer extends HTMLElement {
    constructor() {
        super(); // Call super() first in constructor to inherit from parent class
    }

    connectedCallback() {
        /*let className = this.getAttribute('class');
        console.log(className);*/
        // this.setAttribute('class', className);

        this.innerHTML = /*language=HTML*/ `
            <footer>
                <p><b>Aidan Bundel</b> | Made with ❤️, SASS & JavaScript. Works best in Chrome.</p>
                <!--<p><b>Aidan Bundel</b> | Made with <img src={ require('../img/heart_icon.svg') } class='love' alt='love'>, SASS &amp; JavaScript</p>-->
                <!--<p><b>Aidan Bundel &#169;</b> | Made with <img src={ require('../img/heart_icon.svg') } class='love' alt='love'>, SASS &amp; JavaScript</p>-->
            </footer>
        `;
    }

    disconnectedCallback() {
        // console.log('footer has been removed');
    }
}

// register new tag and associate it with the class
export default customElements.define('footer-element', Footer);