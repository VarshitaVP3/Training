function printing() {
  // Get the form input values
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var middleName = document.getElementById("middlename").value;
  var dob = document.getElementById("dob").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var gender = document.getElementById("gender").value;
  var bloodGroup = document.getElementById("bloodid").value;
  var comments = document.getElementById("comments").value;

  // Set the values in the viewing.html table
  document.getElementById("firstNameValue").textContent = firstName;
  document.getElementById("lastNameValue").textContent = lastName;
  document.getElementById("middleNameValue").textContent = middleName;
  document.getElementById("dobValue").textContent = dob;
  document.getElementById("emailValue").textContent = email;
  document.getElementById("phoneValue").textContent = phone;
  document.getElementById("genderValue").textContent = gender;
  document.getElementById("bloodGroupValue").textContent = bloodGroup;
  document.getElementById("commentsValue").textContent = comments;

  // Redirect to the viewing.html page
  window.location.href = "viewing.html";
}
