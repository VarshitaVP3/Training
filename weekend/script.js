// document
//   .getElementById("loginsubmit")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     validating();
//   });

// function validating() {
//   const userName = document.getElementById("username").value.trim();
//   const passw = document.getElementById("pasw").value.trim();

//   if (userName === "" || userName === null) {
//     alert("Please enter user name");
//   } else if (passw === "" || passw === null) {
//     alert("Please enter password");
//   } else {
//     window.location.href = "profile.html";
//   }
// }

// // validating the form page

// document.getElementById("form-id").addEventListener("submit", function (event) {
//   event.preventDefault();
//   if (validate()) {
//     const firstName = document.getElementById("firstname").value;
//     const lastName = document.getElementById("lastname").value;
//     const middleName = document.getElementById("middlename").value;
//     const dob = document.getElementById("dob").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     const gender = document.getElementById("gender").value;
//     const bloodGroup = document.getElementById("bloodid").value;
//     const comments = document.getElementById("comments").value;

//     localStorage.setItem("firstName", firstName);
//     localStorage.setItem("lastName", lastName);
//     localStorage.setItem("middleName", middleName);
//     localStorage.setItem("dob", dob);
//     localStorage.setItem("email", email);
//     localStorage.setItem("phone", phone);
//     localStorage.setItem("gender", gender);
//     localStorage.setItem("bloodGroup", bloodGroup);
//     localStorage.setItem("comments", comments);
//   }
// });

// document.getElementById("submitBtn").addEventListener("click", function () {
//   validate();
// });

// function validate() {
//   const firstName = document.getElementById("firstname").value.trim();
//   const lastName = document.getElementById("lastname").value.trim();
//   const dob = document.getElementById("dob").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const phone = document.getElementById("phone").value.trim();
//   const gender = document.getElementById("gender").value;
//   const bloodGroup = document.getElementById("bloodid").value;
//   const comments = document.getElementById("comments").value.trim();

//   if (firstName === "") {
//     alert("Please enter your first name");
//     return false;
//   }

//   if (lastName === "") {
//     alert("Please enter your last name");
//     return false;
//   }

//   if (dob === "") {
//     alert("Please enter your date of birth");
//     return false;
//   }

//   if (email === "") {
//     alert("Please enter your email");
//     return false;
//   }

//   // Validate phone number format
//   const phonecon = /^\d{10}$/;
//   if (!phonecon.test(phone)) {
//     alert("Please enter a valid 10-digit phone number");
//     return false;
//   }

//   if (gender === "") {
//     alert("Please enter your gender");
//     return false;
//   }

//   if (bloodGroup === "") {
//     alert("Please enter your blood group");
//     return false;
//   }

//   alert("Form submitted successfully!");
//   return true;
// }

// function phoneNumberCheck(phoneNumber) {
//   regEx =
//     "^+{0,2}([-. ])?((?d{0,3}))?([-. ])?(?d{0,3})?([-. ])?d{3}([-. ])?d{4}";
//   if (phoneNumber.value.match(regEx)) {
//     return true;
//   } else {
//     alert("Please enter a valid phone number.");
//     return false;
//   }
// }

// // function printing() {
// //   // Get the form input values
// //   var firstName = document.getElementById("firstname").value;
// //   var lastName = document.getElementById("lastname").value;
// //   var middleName = document.getElementById("middlename").value;
// //   var dob = document.getElementById("dob").value;
// //   var email = document.getElementById("email").value;
// //   var phone = document.getElementById("phone").value;
// //   var gender = document.getElementById("gender").value;
// //   var bloodGroup = document.getElementById("bloodid").value;
// //   var comments = document.getElementById("comments").value;

// //   // Set the values in the viewing.html table
// //   document.getElementById("firstNameValue").textContent = firstName;
// //   document.getElementById("lastNameValue").textContent = lastName;
// //   document.getElementById("middleNameValue").textContent = middleName;
// //   document.getElementById("dobValue").textContent = dob;
// //   document.getElementById("emailValue").textContent = email;
// //   document.getElementById("phoneValue").textContent = phone;
// //   document.getElementById("genderValue").textContent = gender;
// //   document.getElementById("bloodGroupValue").textContent = bloodGroup;
// //   document.getElementById("commentsValue").textContent = comments;

// //   // Redirect to the viewing.html page
// //   window.location.href = "viewing.html";
// // }

// document.getElementById("submitBtn").addEventListener("click", function () {
//   validate();
// });

function validate() {
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const gender = document.getElementById("gender").value;
  const bloodGroup = document.getElementById("bloodid").value;
  const comments = document.getElementById("comments").value.trim();

  if (firstName === "") {
    alert("Please enter your first name");
    return false;
  }

  if (lastName === "") {
    alert("Please enter your last name");
    return false;
  }

  if (dob === "") {
    alert("Please enter your date of birth");
    return false;
  }

  if (email === "") {
    alert("Please enter your email");
    return false;
  }

  // Validate phone number format
  const phonecon = /^\d{10}$/;
  if (!phonecon.test(phone)) {
    alert("Please enter a valid 10-digit phone number");
    return false;
  }

  if (gender === "") {
    alert("Please enter your gender");
    return false;
  }

  if (bloodGroup === "") {
    alert("Please enter your blood group");
    return false;
  }

  redirect();
  // alert("Form submitted successfully!");

  return true;
}

function redirect() {
  window.location.href = "viewing.html";
  return false;
}

// adding the login credentical to the login page

// document.getElementById('form-id').addEventListener('submit',function(event){
//   event.preventDefault();
//   if(validate())
//   {
//       window.location.href = 'test2.html';
//       add();
//   }

//  });

// const fn = document.getElementById("firstname");
// const button = document.getElementById("btn2");
// const o1 = document.getElementById("firstNameValue");

// function fun1() {
//   o1.innerHTML = fn.value;
// }

// button.addEventListener("click", fun1);

window.onload = function () {
  document.getElementById("firstNameValue").textContent =
    localStorage.getItem("firstName");
  document.getElementById("lastnameValue").textContent =
    localStorage.getItem("lastName");
  document.getElementById("middleNameValue").textContent =
    localStorage.getItem("middleName");
  document.getElementById("fullnameValue").textContent =
    localStorage.getItem("firstName") +
    " " +
    localStorage.getItem("middleName") +
    " " +
    localStorage.getItem("lastName");
  document.getElementById("dobValue").textContent = localStorage.getItem("dob");
  document.getElementById("emailValue").textContent =
    localStorage.getItem("email");
  document.getElementById("phoneValue").textContent =
    localStorage.getItem("phone");
  document.getElementById("genderValue").textContent =
    localStorage.getItem("gender");
  document.getElementById("bloodidValue").textContent =
    localStorage.getItem("bloodGroup");
  document.getElementById("commentsValue").textContent =
    localStorage.getItem("comments");
};
