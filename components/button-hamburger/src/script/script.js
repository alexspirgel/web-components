// Import template.
import templateContent from '../template/template.html';

// Create template element.
let templateElement = document.createElement('template');
// Replace template element content with imported template.
templateElement.innerHTML = templateContent;

/**
 * Creates a new hamburger button.
 *
 * @class ButtonHamburger
 */

class ButtonHamburger extends HTMLElement {

	/**
	 * Get the name of the state attribute.
	 */

	static get activeAttribute() {
		// Return the attribute name.
		return 'active';
	}

	/**
	 * Get the button element.
	 * A work-around in place of using the button element class.
	 * The default button class does not support attachShadow.
	 * We place a button element within our custom element to get around this.
	 *
	 * @return {object}
	 */

	get buttonElement() {
		// Return the button element.
		return this.shadowRoot.querySelector('button');
	}

	/**
	 * Get/Set the active attribute.
	 */

	get active() {
		// Return true if the button element has the 'active' attribute.
		return this.buttonElement.hasAttribute(this.constructor.activeAttribute);
	}

	set active(value) {
		// If a true value is passed.
		if (value) {
			// Add the active attribute to the button element.
			this.buttonElement.setAttribute(this.constructor.activeAttribute, '');
		}
		// If a false value is passed.
		else {
			// Remove the active attribute from the button element.
			this.buttonElement.removeAttribute(this.constructor.activeAttribute);
		}
	}

	/**
	 * Creates an instance of ButtonHamburger.
	 */

	constructor() {
		// Always call super() first in the constructor.
		// It's required by the custom elements spec.
		super();
		// Attach the shadow root.
		let shadowRoot = this.attachShadow({mode: 'open'});
		// Add a clone of the template to the shadow root.
		shadowRoot.appendChild(templateElement.content.cloneNode(true));
		// Attach a click event listener to the button element.
		this.buttonElement.addEventListener('click', (event) => {
			// Toggle the hamburger button active attribute.
			this.toggleHamburger();
		});
	}

	/**
	 * Toggles the hamburger button active attribute.
	 */

	toggleHamburger () {
		// If this hamburger button is active.
		if (this.active) {
			// Remove the active attribute.
			this.active = false;
		}
		// If this hamburger button is inactive.
		else {
			// Add the active attribute.
			this.active = true;
		}
	}

}

// Define the custom element.
window.customElements.define('button-hamburger', ButtonHamburger);