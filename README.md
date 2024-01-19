# Persons - JavaScript Modules v2

## Purpose
Example of JavaScript ES modules. It displays a formatted list of persons, which it gets from an array.

- The HTML code calls `script.js`, which is the only JS file that interacts with the DOM
- `script.js` calls a function that generates the formatted list in the module `persons.mjs`
- `persons.mjs`:
    1. Loads the list of persons from `personsInfo.mjs`
    2. Contains a non-exportable function that formats each person's information, and that calls a utility function from `utils.mjs`
- `utils.js` contains a non-exportable function for error management

Thanks to this organisation, the code is reusable and only functions that can be used externally are made exportable, thus protecting the rest of the code.

## Version 2
Performance improvements
- The utility function `formatMoney()` is now substituted by the in-built method `toLocaleString()`
- Each person component is now created with `cloneNode()`

As a consequence, the values of First Contentful Paint, Largest Contentful Paint and Speed Index have improved by 20% in the Google Lighthouse test.

## Tools
JavaScript / CSS3 / HTML5

## Author:
Arturo Mora-Rioja