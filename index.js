const label = (handle, display) => `<label for="${handle}">${display}</label>`;
const fields = {
  input: ({ handle, display, value = "", type, required = false }) =>
    `${label(
      handle,
      display
    )}<input id="${handle}" name="${handle}" type="${type}" value="${value}" ${
      required ? "required" : ""
    } />`,
  textarea: ({ handle, display, value = "", required = false }) =>
    `${label(handle, display)}<textarea id="${handle}" name="${handle}" ${
      required ? "required" : ""
    }>${value}</textarea>`,
  check: ({ handle, display, options, inline = false, type }) =>
    `<fieldset><legend>${display}</legend>${Object.keys(options)
      .map((key) => {
        const display = options[key];
        return `<input id="${key}" type="${type}" name="${handle}" />${label(
          key,
          display
        )}`;
      })
      .join(inline ? "" : "<br/>")}</fieldset>`,
};

const renderField = ({ handle, field }) => {
  const inputTypes = [
    "text",
    "email",
    "telephone",
    "time",
    "week",
    "url",
    "range",
    "password",
    "number",
    "month",
    "hidden",
    "file",
    "date",
    "color",
  ];
  const checkTypes = ["checkbox", "radio"];

  if (checkTypes.includes(field.type)) {
    return fields["check"]({ handle, ...field });
  }
  if (inputTypes.includes(field.type)) {
    return fields["input"]({ handle, ...field });
  }
  return fields["textarea"]({ handle, ...field });
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("form", (fields, action) => {
    return `<form action="${action ? action : ""}">${fields
      .map((field) => renderField(field))
      .join("")}</form>`;
  });
};
