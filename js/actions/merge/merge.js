try {
  const { PDFDocument } = require("pdf-lib");
  const fs = require("fs");
  const PATH = "./saved.pdf";
  async function merge() {
    let input = document.querySelector("#files");
    let curFiles = input.files();
    const doc = await PDFDocument.create();

    for (let file of curFiles) {
      const contentPages = await doc.copyPages(file, file.getPageIndices());
      for (const page of contentPages) {
        doc.addPage(page);
      }
    }
    fs.writeFileSync(PATH, await doc.save());
  }

  export { merge };
} catch (err) {
  alert(err);
  process.exit(-1);
}
