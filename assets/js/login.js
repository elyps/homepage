function validateForm() {
  let authCodeNr1 = document.loginform.authCodeNr1.value;
  let authCodeNr2 = document.loginform.authCodeNr2.value;
  let authCodeNr3 = document.loginform.authCodeNr3.value;
  let authCodeNr4 = document.loginform.authCodeNr4.value;
  let authCodeNr5 = document.loginform.authCodeNr5.value;
  let authCodeNr6 = document.loginform.authCodeNr6.value;
  let number1 = "1";
  let number2 = "2";
  let number3 = "3";
  let number4 = "4";
  let number5 = "5";
  let number6 = "6";
  if ((authCodeNr1 == number1) && (authCodeNr2 == number2) && (authCodeNr3 == number3) && (authCodeNr4 == number4) && (authCodeNr5 == number5) && (authCodeNr6 == number6)) {
    alert("Success! Your Auth-Code is valid.");
    window.location = "/dashboard/";
    return false;
  } else {
    alert("Auth-Code not valid, please check your Auth-Code and try again.");
    return false;
  }
}
