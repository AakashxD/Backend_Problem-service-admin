const showdown = require("showdown");
const turndown = require("turndown");
const sanitizeHtml = require("sanitize-html");
function sanitizedMarkDown(markdownContent) {
  // Convert markdown to html

  const converter = new showdown.Converter();
  const convertHtml = converter.makeHtml(markdownContent);
  // Sanitize Html

  const sanitizedHtml = sanitizeHtml(convertHtml, {
    allowdTags: sanitizeHtml.defaults.allowedTags,
  });

  // covert html to  sanitize markdown
  const Turndown = new turndown();
  const sanitizedMarkDown = Turndown.turndown(sanitizedHtml);

  return sanitizedMarkDown;
}

module.exports = sanitizedMarkDown;
