
class Footer extends HTMLElement {
    constructor() {
        super(); // Call super() first in constructor to inherit from parent class
    }

    connectedCallback() {
        /*let className = this.getAttribute('class');
        console.log(className);*/
        // this.setAttribute('class', className);

        this.innerHTML = `
            <footer>
                <p><b>Aidan Bundel</b> | Made with ❤️, SCSS & JavaScript. Works best in Chrome.</p>
            </footer>
        `;
    }

    disconnectedCallback() {
        // console.log('footer has been removed');
    }
}

// register new tag and associate it with the class
export default customElements.define('footer-element', Footer);
