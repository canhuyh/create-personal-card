$(document).ready(function () {
  const blah = $("#blah");
  const cropImgPopup = $(".crop-image-popup");
  const blahPopup = $("#blah-popup");
  $(".img-input-file").on("change", function () {
    cropImgPopup.css({
      display: "block",
    });
    blahPopup.croppie({
      viewport: { width: 200, height: 200 },
      boundary: { width: 250, height: 250 },
    });
  });

  $(".btn-get-image").on("click", function (ev) {
    blahPopup
      .croppie("result", {
        type: "rawcanvas",
        format: "png",
      })
      .then(function (canvas) {
        blah.attr("src", canvas.toDataURL());
      });

    cropImgPopup.css({
      display: "none",
    });
  });

  $(".btn-cancel").on("click", function () {
    blahPopup.croppie("destroy");

    cropImgPopup.css({
      display: "none",
    });
  });
});
