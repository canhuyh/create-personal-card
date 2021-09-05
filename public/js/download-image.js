$(document).ready(function () {
  $(".btn-download").on("click", function () {
    html2canvas(document.getElementById("card"), {
      allowTaint: true,
      useCORS: true,
    }).then(function (canvas) {
      var anchorTag = document.createElement("a");
      document.body.appendChild(anchorTag);
      document.getElementById("previewImg").appendChild(canvas);
      anchorTag.download = "filename.jpg";
      anchorTag.href = canvas.toDataURL();
      anchorTag.target = "_blank";
      anchorTag.click();
    });
  });
});
