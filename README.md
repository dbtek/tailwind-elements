# Tailwind Elements

DOM elements built with [Tailwind CSS](https://tailwindcss.com) using [bel](/schama/bel). Work in progress.

### Install
```
$ npm i tailwind-elements
// or
$ yarn add tailwind-elements
```

## Elements

Use elements by importing them accordingly like `require('tailwind-elements/$element')`.

### header(title, subtitle)
Simple title with optional subtitle.

### input(attributes)
Form input element.  

**Params**
- attributes.type: {String} Input type.  
- attributes.name: {String} Input name.  
- attributes.placeholder: {String} Input placeholder.  
- attributes.value: Input value.  
- attributes.onChange: {Function} Input value change listener.  
- attributes.required: {Boolean} Whether input is required or not.  
- attributes.className: {String} Additional css classes.  

### textarea(attributes)
Form textarea element.  

**Params**
- attributes.name: {String} Input name.  
- attributes.placeholder: {String} Input placeholder.  
- attributes.value: Input value.  
- attributes.onChange: {Function} Input value change listener.  
- attributes.className: {String} Additional css classes.  

### select(attributes)
Select element.

**Params**  
- attributes.name: {String} Input name.  
- attributes.value: Input value.  
- attributes.onChange: {Function} Input value change listener.  
- attributes.className: {String} Additional css classes.  

### inputContainer(label, input)
Form elements wrapping element.

**Params**  
- label: {String} Input label.  
- input: {HTMLElement} input element.

**Example**  
```js
var inputContainer = require('tailwind-elements/input-container')
var input = require('tailwind-elements/input')

inputContainer('First Name', input({
  name: 'first-name',
  required: true
}))
```

### navbar(props)
Navigation bar. Please see [navigation example](https://tailwindcss.com/docs/examples/navigation)

**Params**  
- props.brand: {String | HTMLElement} Branding text / element.
- props.items: {Array} Array of navigation items.
  - item.label: {String} Nav label.
  - item.href: {String} Nav link.
- props.loginItem: {String | HTMLElement} Login info text / element.


### steps(items)
Progress steps element.

**Params**  
- items: {Array} Step items.
  - item.label: {String | HTMLElement} Step label.
  - item.href: {String} Step link.
  - item.onClick: {Function} Click handler for the step.
  - item.active: {Boolean} Whether the step is active or not.

### Dropdown
Dropdown component. Based on [nanocomponent](https://github.com/choojs/nanocomponent).

**Params**
- props.label: {String | HTMLElement} Dropdown label.
- props.className: {String} Additional css classes.  
- props.items: [Array] Array of dropdown items.

### dropdownMenuItem(props)
Dropdown menu item element.  
**Params**  
- props.label: {String | HTMLElement} Menu item label.
- props.onClick: {Function} Click handler for the menu item.
- item.href: {String} Menu item link.

**Example**
```js
var Dropdown = require('tailwind-elements/Dropdown')
new Dropdown(props)
```






