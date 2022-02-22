const passwordInput = document.getElementById('passwordInput')
const passwordConfirm = document.getElementById('passwordConfirm')
const passwordOutput = document.getElementById('passwordMatch')

function testPasswords () {
  let password = passwordInput.value
  let passwordRepeat = passwordConfirm.value

  if(password != passwordRepeat){
    passwordOutput.innerText = "*Passwords do not match"
    passwordInput.classList.add("invalid")
    passwordConfirm.classList.add("invalid")
  }else {
    passwordOutput.innerText = " "
    passwordInput.classList.remove("invalid")
    passwordConfirm.classList.remove("invalid")
  }

}

passwordConfirm.addEventListener('keyup', () => {
  testPasswords()
})

passwordConfirm.addEventListener('input', () => {
  if(!passwordConfirm.validity.valueMissing){
    passwordConfirm.setCustomValidity("Passwords dont match!");
    passwordConfirm.reportValidity();
  }else{
    passwordConfirm.setCustomValidity("");
  }
})