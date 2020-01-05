
class Exit extends HTMLElement {
    constructor() {
        super(); // Call super() first in constructor to inherit from parent class
    }

    connectedCallback() {
        this.innerHTML = /*language=HTML*/ `
            <div class='exit drop-down'><a href='/' data-type='page-exit'></a></div>
        `;
    }

    disconnectedCallback() {
        // console.log('element has been removed');
    }
}

// register new tag and associate it with the class
export default customElements.define('exit-element', Exit);