var markdownpdf = require("markdown-pdf");

markdownpdf().from("babelPresentationen.md").to("babelPresentationen.pdf", function () {
  console.log("Done")
});
