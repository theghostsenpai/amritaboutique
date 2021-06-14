function submitform(){
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('emailid').value;
  var result = document.getElementById('result');
  result.innerHTML = "<p>" + firstName + " " + lastName + ", your verification id has been sent to " + email + "</p>";
  return false;
}
