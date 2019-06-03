# Web Components
An attempt to create a suitable web components system for use in large projects.

## Notes:
* Compile modules via webpack.
	- Handle default vs. override file choice here.
	- Output to module dist folder.
* Main module script.
	- `index.js` in module root.
	- Is not part of webpack compilation.
	- Using ES6 import:
		- Import compiled script from dist folder.
		- Import nested compnents.
		- Import any other run-time dependencies.
