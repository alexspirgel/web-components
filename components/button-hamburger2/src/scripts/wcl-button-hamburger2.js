// Import styles.
import styles from '@component/src/styles/wcl-button-hamburger2.scss';
// Import template.
import template from '@component/src/templates/wcl-button-hamburger2.html';

/**
 * Creates a new hamburger button.
 */

class WCLButtonHamburger2 extends HTMLElement {

	/**
	 * Get the attributes object which specifies the attribute names that should be used.
	 */

	static get attributes() {
		// Return the attribute object.
		return {
			active: 'active',
			transition: 'transition'
		};
	}

	/**
	 * Get the template for the component.
	 */

	static get template() {
		// Return the template from the class `template` property.
		return this.constructor.template;
	}

	/**
	 * Set the template for the component.
	 */

	static set template(template) {
		// Set the template on the class `template` property.
		this.constructor.template = template;
	}

	/**
	 * Generate a template element with optional styles.
	 */

	static generateTemplate(template, styles) {
		// Create template element.
		let templateElement = document.createElement('template');
		// If styles are passed.
		if (styles) {
			// Format styles within `<style>` tag.
			let styleTag = `<style>${styles}</style>`;
			// Add `<style>` tag to template element.
			templateElement.innerHTML += styleTag;
		}
		// Add template content to template element.
		templateElement.innerHTML += template;
		// Return the template element.
		return templateElement;
	}

	/**
	 * Get the active attribute.
	 */

	get active() {
		// Return true if the component element has the 'active' attribute.
		return this.hasAttribute(this.constructor.attributes.active);
	}

	/**
	 * Set the active attribute.
	 */

	set active(value) {
		// If a true value is passed.
		if (value) {
			// Add the active attribute to the component element.
			this.setAttribute(this.constructor.attributes.active, '');
		}
		// If a false value is passed.
		else {
			// Remove the active attribute from the component element.
			this.removeAttribute(this.constructor.attributes.active);
		}
	}

	/**
	 * Get the transition attribute.
	 */

	get transition() {
		// Return the value of the 'transition' attribute on the component element.
		return this.getAttribute(this.constructor.attributes.transition);
	}

	/**
	 * Set the transition attribute.
	 */

	set transition(value) {
		// If string is passed.
		if (typeof value === 'string') {
			// Add the transition attribute value to the component element.
			this.setAttribute(this.constructor.attributes.transition, value);
		}
		// If a false value is passed.
		else {
			// Remove the transition attribute from the component element.
			this.removeAttribute(this.constructor.attributes.transition);
		}
	}

	/**
	 * Get the button element.
	 * A work-around in place of using the button element class.
	 * The default button class does not support attachShadow.
	 * We place a button element within our custom element to get around this.
	 */

	get buttonElement() {
		// Return the button element.
		return this.shadowRoot.querySelector('button');
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

	/**
	 * Creates an instance of ButtonHamburger.
	 */

	constructor() {
		// Always call super() first in the constructor.
		// Required by the custom elements spec.
		super();

		// If the component template has not been generated.
		if (!this.constructor.template) {
			// Generate the component template.
			this.constructor.template = this.constructor.generateTemplate(template, styles);
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

}

// Export the class.
export default WCLButtonHamburger2;