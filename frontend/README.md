## Installation

 1. install node
 2. `npm install`

## Running

 1. `npm run serve` serves our frontend site @ http://localhost:8080
 
## Design Patterns

 1. Directories that begin with a capital letter export default a component with the same name.
 2. Page components end with 'Page' (i.e. LoginPage or HomePage) and live in a 'routes' directory.
 3. Directories contain a 'index.jsx' to defines its exports.
 4. Imports from not in the CWD must import from an 'index.jsx'
 5. Try to only import from children and siblings (avoid parents but stay dry)
