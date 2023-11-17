const myBkashAccountNumber = "01995468128"
const myBkashPin = 12345
const loginButton = document.getElementById("loginButton")


let accountNumber = document.getElementById("accountNumber")
let pinCode = document.getElementById("pinCode")


let emptyAccountNumberAlert = document.getElementById("emptyAccountNumberAlert")
let emptyPinCodeAlert = document.getElementById("emptyPinCodeAlert")


let invalidAccountNumberAlert = document.getElementById("invalidAccountNumberAlert")
let invalidPinCodeAlert = document.getElementById("invalidPinCodeAlert")





loginButton.addEventListener("click", function(event){
event.preventDefault()


if(accountNumber.value == ""){

emptyAccountNumberAlert.innerHTML = "please enter your bKash account number!"
accountNumber.style.borderColor = "red"
invalidPinCodeAlert.innerHTML = ""
pinCode.style.borderColor = ""
invalidAccountNumberAlert.innerHTML = ""
emptyPinCodeAlert.innerHTML = ""

}


else if(accountNumber.value != myBkashAccountNumber){

invalidAccountNumberAlert.innerHTML = "invalid account! please enter the correct account number!"
accountNumber.style.borderColor = "red"
emptyAccountNumberAlert.innerHTML = ""
emptyPinCodeAlert.innerHTML = ""
invalidPinCodeAlert.innerHTML = ""
pinCode.style.borderColor = ""

}
  
else if(pinCode.value == ""){

emptyPinCodeAlert.innerHTML = "please enter your bKash pin!"
pinCode.style.borderColor = "red"
emptyAccountNumberAlert.innerHTML = ""
accountNumber.style.borderColor = ""
invalidPinCodeAlert.innerHTML = ""
invalidAccountNumberAlert.innerHTML = ""

}


else if(pinCode.value != myBkashPin){

invalidPinCodeAlert.innerHTML = "invalid pin! please enter the correct pin!"
pinCode.style.borderColor = "red"
invalidAccountNumberAlert.innerHTML = ""
emptyPinCodeAlert.innerHTML = ""
accountNumber.style.borderColor = ""

}


else if(accountNumber.value == myBkashAccountNumber && pinCode.value == myBkashPin){
    window.location.href = "main.html"
}
      
else{

alert("logic not found")

}})