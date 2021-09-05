$(document).ready(function () {
  $(".btn").on("click", function () {
    const name = $(".name").val();
    const img = $("#blah").attr("src");
    console.log(name + img);
    console.log("hello");

    $.ajax({
      url: "/generator",
      type: "POST",
      datatype: "json",
      data: {
        img: img,
        name: name,
      },
      beforeSend: function () {
        $("#body-list").html(
          '<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">'
        );
      },
      error: function (data, textStatus, errorThrown) {
        console.log(data);
      },
    });
  });
});
