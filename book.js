var Name, Email, Ph, Checkin, Checkout,nc,na,TOR;

function readFom() {
  Name= document.getElementById("name").value;
  Email = document.getElementById("email").value;
  Ph = document.getElementById("ph").value;
  Checkin = document.getElementById("checkin").value;
  Checkout = document.getElementById("checkout").value;
  nc = document.getElementById("NC").value;
  na = document.getElementById("NA").value;
  TOR = document.getElementById("tor").value;
  console.log(Name, Email, Ph, Checkin, Checkout,nc,na,TOR);
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
      NC: nc,
      NA : na,
      tor : TOR
    
    });

  var alertMessage = "Your booking request is successful with the following details : \n\n";
  alertMessage += "Name: " + Name + "\n";
  alertMessage += "Email: " + Email + "\n";
  alertMessage += "Phone: " + Ph + "\n";
  alertMessage += "Check-in: " + Checkin + "\n";
  alertMessage += "Check-out: " + Checkout + "\n";
  alertMessage += "Adults: " + na + "\n";
  alertMessage += "Children: " + nc + "\n";
  alertMessage += "Type and no. of Rooms: " + TOR + "\n";


    alert(alertMessage);

 
};


