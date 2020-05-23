# \<custom-textarea\>

Web Components custom-textarea element.

Reason behind this component is to create a plain unstyled autogrowing textarea.

[Demo](https://www.lemmonjuice.com/custom-textarea/)

## Install

```sh
npm i @lemmon/custom-textarea
```

### Use Inside Your Web App

```js
// does register the component for you
// with `custom-textarea` tagname
require('@lemmon/custom-textarea')
```

or

```js
// does not register the component
// useful when you want to extend the component
// or to chose a different tag name
const Textarea = require('@lemmon/custom-textarea/element')
class TextareaUpgraded extends Textarea {}
customElements.define('upgraded-textarea', TextareaUpgraded)
```

### Use With The CDN

```html
<script src="https://unpkg.com/@lemmon/custom-textarea/dist/index.js"></script>
```

## Example

```html
<custom-textarea name="text">Hello World!</custom-textarea>
```

You can apply your own styles. Fonts, colors, line-height, and padding are inherited. Placeholder styles can be defined using CSS variables.

```css
custom-textarea {
  --placeholder-color: orange; /* default: inherit */
  --placeholder-opacity: 1;    /* default: 0.5 */
}
```

## License

MIT
