(function () {
  var fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem");

  fileElem.addEventListener("change", function () {
    fileSelect.innerHTML = "Selected";
  });

  fileSelect.addEventListener(
    "click",
    function (e) {
      if (fileElem) {
        fileElem.click();
      }
      e.preventDefault();
    },
    false
  );
})();
