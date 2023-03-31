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
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });
});

const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const telpInput = document.getElementById("telp");
const emailError = document.getElementById("email-error");
const telpError = document.getElementById("telp-error");
const submitButton = document.getElementById("myButton");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbySewxt-PIfyQAAEjV0aWgfEa-j7JCR61TDocbBIQnwyXj6qVs0sJtY2OaIPeFPI9kGuQ/exec";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const telpValue = telpInput.value.trim();

  if (!isValidEmail(emailValue)) {
    emailError.textContent = "Email tidak valid";
    emailError.style.display = "block";
    return;
  } else {
    emailError.style.display = "none";
  }

  if (!isValidTelp(telpValue)) {
    telpError.textContent = "Nomor telepon tidak valid";
    telpError.style.display = "block";
    return;
  } else {
    telpError.style.display = "none";
  }

  // tambahkan tombol loading
  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...';

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log("Success!", response);
      // kembalikan tombol "kirim" ke kondisi semula
      submitButton.disabled = false;
      submitButton.innerHTML = "kirim";
      alert("Pesan Anda sudah terkirim!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      // kembalikan tombol "kirim" ke kondisi semula
      submitButton.disabled = false;
      submitButton.innerHTML = "kirim";
      alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
    });
});
function isValidEmail(email) {
  // Regular expression untuk memeriksa format email
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Memeriksa apakah email cocok dengan pattern
  return emailPattern.test(email);
}
function isValidTelp(telp) {
  // Regular expression untuk memeriksa format nomor telepon
  const telpPattern = /^\d{10,12}$/;

  // Memeriksa apakah nomor telepon cocok dengan pattern
  return telpPattern.test(telp);
}
