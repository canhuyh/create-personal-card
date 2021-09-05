function readURL(input) {
  $("#blah-popup").croppie("destroy");

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#blah-popup").croppie("bind", {
        url: e.target.result,
      });
    };

    reader.readAsDataURL(input.files[0]);
  }

  $(".btn-get-image").on("click", function () {
    $(".img-input-file").val("");
  });

  $(".btn-cancel").on("click", function () {
    $(".img-input-file").val("");
  });
}
