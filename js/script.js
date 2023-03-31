$(".page-scroll").on("click", function (e) {
  // Ambil isi atribut href
  var tujuan = $(this).attr("href");

  // Tangkap elemen tujuan
  var elemenTujuan = $(tujuan);

  // Animasikan scroll
  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1300,
    "easeInOutExpo"
  );

  e.preventDefault();
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".jumbotron img").css({
    transform: "translate (0px, " + wScroll / 4 + "%)",
  });
});

$("#myButton").on("click", function () {
  var button = $(this);
  button.html('<i class="fa fa-spinner fa-spin"></i> Loading...');
  setTimeout(function () {
    button.html("kirim");
    alert("Pesan Anda sudah terkirim!");
    $("form")[0].reset();
  }, 3000);
});
