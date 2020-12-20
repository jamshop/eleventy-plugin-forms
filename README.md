# Eleventy Plugin - Forms

Generate forms from frontmatter.

No npm installation yet as I'd like to add more features before v1. 
## Usage

In you main config `.eleventy.js`: 

```js
const pluginForm = require("./eleventy-plugin-forms");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginForm);
  // and the rest of your config
};
```
In your template:

```
---
layout: "page.njk"
fields: 
  -
    handle: name
    field:
      display: Name
      type: text
      required: true
  -
    handle: agree
    field:
      display: Do you agree?
      type: radio
      options: 
        yes: Yes
        no: No        
---
{% form fields %}
```

