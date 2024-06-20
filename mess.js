var Name1, Email1, Subject, message;

function readFom() {
  Name1= document.getElementById("name1").value;
  Email1 = document.getElementById("email1").value;
  Subject = document.getElementById("subject").value;
  Message = document.getElementById("message").value;
  Checkout = document.getElementById("checkout").value;
  nc = document.getElementById("NC").value;
  na = document.getElementById("NA").value;

  console.log(Name1, Email1, Subject, message);
}

document.getElementById("sub").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("messages/" + Name1)
    .set({
      name1: Name1,
      email1: Email1,
       subject : Subject,
      message: Message,
      
   
    });

  var alertMessage = "Your message sent successfully : \n\n";
  alertMessage += "Name: " + Name1 + "\n";
  alertMessage += "Email: " + Email1 + "\n";
  alertMessage += "Subject: " + Subject + "\n";
  alertMessage += "Message: " + Message + "\n";
  



    alert(alertMessage);

 
};


