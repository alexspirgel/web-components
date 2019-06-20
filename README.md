# Web Components
An attempt to create a suitable web components system for use in large projects.

## Notes
* Compile modules via webpack.
	- Handle default vs. override file choice here.
	- Output to module dist folder.
* Main module script.
	- `index.js` in module root.
	- Is not part of webpack compilation.
	- Using ES6 import:
		- Import compiled script from dist folder.
		- Import nested components.
		- Import any other run-time dependencies.

## Figuring It Out
Ideally we want to be able to `npm install` a module and automatically get it's dependencies, versioning causes problems though. Because of how node installs modules, if 2 components require different versions of another component, we cannot be certain of the location of a specific version of that module (https://medium.com/learnwithrahul/understanding-npm-dependency-resolution-84a24180901b). This clashes with the ES6 import setup.

Potential solution:
* Set all component dependencies as any version `"my_component": "x"`. Each component will have `v1.x`, `v2.x`, etc. that the module lives within.  

Do we want these components to live in the `node_modules` folder? Wouldn't it be nice if all the modules were in their own `components` folder, but all their non-module dependencies still lived in `node_modules`? It would feel weird doing most of the work on a website editing code within the `node_modules` folder.

Need to look into:
* Do updates to a node module remove other files (custom overrides) in that folder even if they are npm ignored?

Multiple custom instances of the same component? This can be handled by all instances living in the components folder referencing as much as they want/need from the node_modules base during compilation.

I want to ES6 import as much as possible. If more than one component requires the same large script that would mean it would be compiled into each component, duplicating it. I would love for the components to be able to share the same dependencies.


## Proposed Structure
* components
	- my-accordion
		- dist
			- my-accordion.js
		- src
			- scripts
				- index.js
			- styles
				- index.css
			- templates
				- index.html
			- my-accordion.js
* node_modules
	- @wcl/wcl-accordion
		- dist
			- wcl-accordion.js
		- src
			- scripts
				- index.js
			- styles
				- index.css
			- templates
				- index.html
			- wcl-accordion.js
* shared-resources
	- styles
	- scripts
