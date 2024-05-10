# SVG Icon Toolkit

The SVG Icon Toolkit is a simple JavaScript utility for managing and using SVG icons in web projects. It allows developers to add, remove, and get SVG icons, and generate HTML with customizable attributes for embedding icons into web pages.

## Installation

Install the package using npm:

```bash
npm install svg-icon-toolkit
```

## Usage

### Importing the Toolkit

First, import the `SVGIconToolkit` into your project:

```javascript
const SVGIconToolkit = require('svg-icon-toolkit');
```

### Creating an Instance

Create an instance of the toolkit:

```javascript
const iconToolkit = new SVGIconToolkit();
```

### Adding Icons

Add icons by providing a unique name and SVG content:

```javascript
iconToolkit.addIcon('arrow', '<svg>...</svg>');
```

### Removing Icons

Remove icons by name:

```javascript
iconToolkit.removeIcon('arrow');
```

### Getting Icons

Retrieve the raw SVG content:

```javascript
const svgContent = iconToolkit.getIcon('arrow');
```

### Generating HTML

Generate HTML for an icon, optionally adding classes, styles, or other attributes:

```javascript
const html = iconToolkit.generateHTML('arrow', {
className: 'my-icon',
style: 'width: 24px; height: 24px;',
attributes: { 'aria-hidden': 'true' }
});
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
