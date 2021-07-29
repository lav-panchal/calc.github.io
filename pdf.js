function download() {
  const pdf1 = document.getElementById("pdf");
  html2pdf().from(pdf1).save();
}
