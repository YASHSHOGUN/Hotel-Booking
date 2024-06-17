var Name, Email, Ph, Checkin, Checkout;

function readFom() {
  Name= document.getElementById("name").value;
  Email = document.getElementById("email").value;
  Ph = document.getElementById("ph").value;
  Checkin = document.getElementById("checkin").value;
  Checkout = document.getElementById("checkout").value;
  console.log(Name, Email, Ph, Checkin, Checkout);
}

document.getElementById("Book").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("bookings/" + Name)
    .set({
      name: Name,
      email: Email,
      ph: Ph,
      checkin: Checkin,
      checkout: Checkout,
    });
  alert("Booking Successful. Conformation mail will be sent soon");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("Ph").value = "";
  document.getElementById("checkin").value = "";
  document.getElementById("checkout").value = "";
};


