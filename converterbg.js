var markdownpdf = require("markdown-pdf");

markdownpdf().from("babelPresentation.text").to("babelPresentation.pdf", function () {
  console.log("Done")
});
