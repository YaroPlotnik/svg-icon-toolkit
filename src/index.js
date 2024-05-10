// svg-icon-toolkit.js
class SVGIconToolkit {
    constructor() {
        this.icons = {};
    }

    // Add an icon with a unique name and SVG content
    addIcon(name, svgContent) {
        if (this.icons[name]) {
            console.error(`Icon with name ${name} already exists.`);
            return;
        }
        this.icons[name] = svgContent;
    }

    // Remove an icon by name
    removeIcon(name) {
        if (!this.icons[name]) {
            console.error(`Icon with name ${name} does not exist.`);
            return;
        }
        delete this.icons[name];
    }

    // Get the raw SVG content by name
    getIcon(name) {
        if (!this.icons[name]) {
            console.error(`Icon with name ${name} does not exist.`);
            return null;
        }
        return this.icons[name];
    }

    // Generate HTML for an icon
    generateHTML(name, options = {}) {
        const svg = this.getIcon(name);
        if (!svg) {
            return '';
        }

        const attributes = options.attributes || {};
        const attrString = Object.keys(attributes)
            .map(attr => `${attr}="${attributes[attr]}"`)
            .join(' ');

        return `<span class="${options.className || ''}" style="${options.style || ''}">${svg.replace('<svg', `<svg ${attrString}`)}</span>`;
    }
}

module.exports = SVGIconToolkit;
