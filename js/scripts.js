// Everything below this line is user interface (or front-end) logic:
$(document).ready(function() {
  $("form#address").submit(function(event) {
    event.preventDefault();
    //window.location.href = "confirmation.html";
    var nameInput = $("#name").val();
    var phoneInput = $("#phone").val();
    var emailInput = $("#email").val();
    //var confirmation = confirm()
    var newUser = nameInput + '<br>' + phoneInput + '<br>' + emailInput + '<br><br>';
//    $(".info").append(newUser);
    $("#viewSelect").getElementById('<option value=' + newUser + '>' + nameInput + '</option>');

    .getElementById("#viewSelect").command
    /*
    var result = nameInput + "\n" + phoneInput + "\n" + emailInput + "\n" + timeInput;
    console.log(result);
    var confirmMsg = confirm("Is this the correct information for your appointment?\n" + result);
    if (confirmMsg) {
      alert("Your appointment is all set");
    } else {
      alert("Please reenter your information")
    };*/
  });
  $("form#view").submit(function(event) {
    event.preventDefault();
    $(".info").append();
  })
});
