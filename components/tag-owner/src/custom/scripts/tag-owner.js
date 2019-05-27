console.log('this is the custom script');
// Import style.
import style from '@styles';
// Import template.
import template from '@templates';

/**
 * Creates a new owner tag.
 *
 * @class TagOwner
 */

class TagOwner extends HTMLElement {

	/**
	 * Get the link attribute name.
	 */

	static get linkAttributeName() {
		// Return the link attribute name.
		return 'link';
	}

	/**
	 * Get the link element selector.
	 */

	static get linkElementClass() {
		// Return the link element selector.
		return 'tag-owner__link';
	}

	/**
	 * Get the default owner image.
	 */

	static get ownerImageDefaultSRC() {
		// Return the default owner image source.
		return 'components/tag-owner/base/assets/default-owner.svg';
	}

	/**
	 *
	 */

	static get template() {
		//
		return this.constructor.template;
	}

	/**
	 *
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
	 * Get the <style> element.
	 */

	get styleElement() {
		// Return the <style> element.
		return this.shadowRoot.querySelector('style');
	}

	/**
	 * Get the link attribute.
	 */

	get link() {
		// Return the link attribute value.
		return this.getAttribute(this.constructor.linkAttributeName);
	}

	/**
	 * Set the link attribute.
	 */

	set link(value) {
		// Set the link attribute value.
		this.setAttribute(this.constructor.linkAttributeName, value);
		// If a value is passed.
		if (value) {
			// Add a link element.
			this.addLinkElement();
			// Set the link element href attribute.
			this.setLinkElementHref(this.link);
		}
		// If no value is passed.
		else {
			// Remove the link element.
			this.removeLinkElement();
		}
	}

	/**
	 * Get the link element.
	 */

	get linkElement() {
		// Return the link element.
		return this.shadowRoot.querySelector('.' + this.constructor.linkElementClass);
	}

	/**
	 * Creates an instance of TagOwner.
	 */

	constructor() {
		// Always call super() first in the constructor.
		// It's required by the custom elements spec.
		super();

		//
		if (!this.constructor.template) {
			//
			this.constructor.generateTemplate(style, template);
		}

		// Attach the shadow root.
		let shadowRoot = this.attachShadow({mode: 'open'});
		// Add a clone of the template to the shadow root.
		shadowRoot.appendChild(this.constructor.template.content.cloneNode(true));

		//
		this.link = this.link;
	}

	/**
	 *
	 */

	addLinkElement() {
		// If a link element does not already exist.
		if (!this.linkElement) {
			// Initialize the storedStyle variable.
			let storedStyle;
			// If there is a <style> element.
			if (this.styleElement) {
				// Store the <style> element inner HTML.
				storedStyle = this.styleElement.innerHTML;
				// Remove the style element.
				this.styleElement.remove();
			}
			// Wrap inner HTML with an <a> element.
			this.shadowRoot.innerHTML = `<a class="${this.constructor.linkElementClass}">${this.shadowRoot.innerHTML}</a>`;
			// If there are stored style.
			if (storedStyle) {
				// Prepend style to inner HTML with a <style> element.
				this.shadowRoot.innerHTML = `<style>${storedStyle}</style>${this.shadowRoot.innerHTML}`;
			}
		}
		// If a link element already exists.
		else {
			// Do not add a duplicate link element.
		}
	}

	/**
	 *
	 */

	removeLinkElement() {
		// If a link element exists.
		if (this.linkElement) {
			// Get link element inner HTML.
			let linkElementInnerHTML = this.linkElement.innerHTML;
			// Remove the link element.
			this.linkElement.remove();
			// Add the inner HTML back to the shadow root.
			this.shadowRoot.innerHTML = linkElementInnerHTML;
		}
		// If a link element does not exist.
		else {
			// There is no link element to remove.
		}
	}

	/**
	 *
	 */

	setLinkElementHref(value) {
		// If a link element exists.
		if (this.linkElement) {
			// Set the href attribute of the link element.
			this.linkElement.setAttribute('href', value);
		}
	}

}

// Define the custom element.
window.customElements.define('tag-owner', TagOwner);