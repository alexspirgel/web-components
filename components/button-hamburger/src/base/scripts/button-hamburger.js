// Import style.
import style from '@style';
// Import template.
import template from '@template';

/**
 * Creates a new hamburger button.
 *
 * @class ButtonHamburger
 */

class ButtonHamburger extends HTMLElement {

	/**
	 * Get the template element for the component.
	 */

	static get template() {
		// Return the template element from the component class constructor.
		return this.constructor.template;
	}

	/**
	 * Generate a template element and attach it to the component class constructor.
	 */

	static generateTemplate(style, template) {
		// Create template element.
		this.constructor.template = document.createElement('template');
		// Format style.
		style = `<style>${style}</style>`;
		// Replace template element content with imported style and template.
		this.constructor.template.innerHTML = style + template;
	}

	/**
	 * Get the name of the active attribute.
	 */

	static get activeAttribute() {
		// Return the attribute name.
		return 'active';
	}

	/**
	 * Get the name of the active attribute.
	 */

	static get transitionAttribute() {
		// Return the attribute name.
		return 'transition';
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
		// Return true if the component element has the 'active' attribute.
		return this.hasAttribute(this.constructor.activeAttribute);
	}

	set active(value) {
		// If a true value is passed.
		if (value) {
			// Add the active attribute to the component element.
			this.setAttribute(this.constructor.activeAttribute, '');
		}
		// If a false value is passed.
		else {
			// Remove the active attribute from the component element.
			this.removeAttribute(this.constructor.activeAttribute);
		}
	}

	/**
	 * Get/Set the transition attribute.
	 */

	get transition() {
		// Return the value of the 'transition' attribute on the component element.
		return this.getAttribute(this.constructor.transitionAttribute);
	}

	set transition(value) {
		// If string is passed.
		if (typeof value === 'string') {
			// Add the transition attribute value to the component element.
			this.setAttribute(this.constructor.transitionAttribute, value);
		}
		// If a false value is passed.
		else {
			// Remove the transition attribute from the component element.
			this.removeAttribute(this.constructor.transitionAttribute);
		}
	}

	/**
	 * Creates an instance of ButtonHamburger.
	 */

	constructor() {
		// Always call super() first in the constructor.
		// It's required by the custom elements spec.
		super();

		// If the component template has not been generated.
		if (!this.constructor.template) {
			// Generate the component template.
			this.constructor.generateTemplate(style, template);
		}

		// Attach the shadow root.
		let shadowRoot = this.attachShadow({mode: 'open'});
		// Add a clone of the template to the shadow root.
		shadowRoot.appendChild(this.constructor.template.content.cloneNode(true));

		// Attach a click event listener to the button element.
		this.buttonElement.addEventListener('click', (event) => {
			// Toggle the active attribute.
			this.toggleHamburger();
		});
	}

	/**
	 * Toggles the active attribute.
	 */

	toggleHamburger () {
		// If the component is active.
		if (this.active) {
			// Remove the active attribute.
			this.active = false;
		}
		// If the component is inactive.
		else {
			// Add the active attribute.
			this.active = true;
		}
	}

}

// Define the custom element.
window.customElements.define('button-hamburger', ButtonHamburger);