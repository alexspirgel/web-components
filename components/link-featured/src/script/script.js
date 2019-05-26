// Import template.
import templateContent from '../template/template.html';

// Create template element.
let templateElement = document.createElement('template');
// Replace template element content with imported template.
templateElement.innerHTML = templateContent;

/**
 * Creates a new featured link.
 *
 * @class LinkFeatured
 */

class LinkFeatured extends HTMLElement {

	/**
	 * Get the href attribute.
	 */

	get href() {
		// Return the data-href value.
		return this.getAttribute('data-href');
	}

	/**
	 * Get the link element.
	 */

	get link() {
		// Return the link element.
		return this.shadowRoot.querySelector('.link');
	}

	/**
	 * Creates an instance of LinkFeatured.
	 */

	constructor() {
		// Always call super() first in the constructor.
		// It's required by the custom elements spec.
		super();
		// Attach the shadow root.
		let shadowRoot = this.attachShadow({mode: 'open'});
		// Add a clone of the template to the shadow root.
		shadowRoot.appendChild(templateElement.content.cloneNode(true));
		// If there is a data-href attribute value and a link element.
		if (this.href && this.link) {
			// Set the href attribute value of the link element.
			this.link.setAttribute('href', this.href);
		}
	}

}

// Define the custom element.
window.customElements.define('link-featured', LinkFeatured);