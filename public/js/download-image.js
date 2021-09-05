$(document).ready(function () {
  $(".btn-download").on("click", function () {
    html2canvas(document.getElementById("card"), {
      allowTaint: true,
      useCORS: true,
    }).then(function (canvas) {
      var anchorTag = document.createElement("a");
      document.body.appendChild(anchorTag);
      document.getElementById("previewImg").appendChild(canvas);
      anchorTag.download = "myInfo.jpg";
      anchorTag.href = canvas.toDataURL();
      anchorTag.target = "_blank";
      anchorTag.click();

      var image = new Image();
      image.src = canvas.toDataURL();
      console.log(image.src);
    });
  });
});
