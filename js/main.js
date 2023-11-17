const myBkashAccountNumber = "01995468128"
const myBkashPin = 12345


let totalBalanceValueNumber
let cashInInputValueNumber
let cashOutInputValueNumber
let sendMoneyInputValueNumber
let mobileRechargeInputValueNumber


let totalBalance = document.getElementById("total_balance")


let cashInButton = document.getElementById("cash_in_button")
let cashOutButton = document.getElementById("cash_out_button")
let sendMoneyButton = document.getElementById("send_money_button")
let mobileRechargeButton = document.getElementById("mobile_recharge_button")


let cashInInput = document.getElementById("cash_in_input")
let cashOutInput = document.getElementById("cash_out_input")
let sendMoneyInput = document.getElementById("send_money_input")
let mobileRechargeInput = document.getElementById("mobile_recharge_input")
let mobileNumberInput = document.getElementById("mobile_number_input")
let mobileOperatorInput = document.getElementById("mobile_operator_input")
let pinCodeInput1 = document.getElementById("pin_code_input_1")
let pinCodeInput2 = document.getElementById("pin_code_input_2")
let pinCodeInput3 = document.getElementById("pin_code_input_3")
let pinCodeInput4 = document.getElementById("pin_code_input_4")
let accountNumberInput1 = document.getElementById("account_number_input_1")
let accountNumberInput2 = document.getElementById("account_number_input_2")
let accountNumberInput3 = document.getElementById("account_number_input_3")




cashInButton.addEventListener("click", function(){

totalBalanceValueNumber = parseFloat(totalBalance.innerText);
cashInInputValueNumber = parseFloat(cashInInput.value);


if(accountNumberInput1.value == ""){

alert("please enter your bKash account number!")}


else if(accountNumberInput1.value != myBkashAccountNumber){

alert("invalid bKash account! please enter your correct bKash account number!")
}
    
    
else if(accountNumberInput1.value == myBkashAccountNumber){
    
if(cashInInput.value == ""){
        
alert("please enter an amount!")
}


else if(cashInInput.value <= 0){
        
alert("invalid amount! please enter a correct amount")
}


else if(pinCodeInput1.value == ""){
        
alert("please enter your bKash pin!")
}
    
    
else{

if(cashInInput.value == ""){
        
alert("please enter an amount!")
                    
}
                
                
else if(myBkashPin != pinCodeInput1.value){

alert("invalid pin! please enter the correct pin!")
}
                
                
else if(myBkashPin == pinCodeInput1.value){
        
    totalBalance.innerHTML = totalBalanceValueNumber + cashInInputValueNumber;
    cashInInput.value = ""
        
alert("add money successful!")
}
        
        
        
else{
        
alert("logic not found!")
    
}}}})




cashOutButton.addEventListener("click", function() {

totalBalanceValueNumber = parseFloat(totalBalance.innerText);
cashOutInputValueNumber = parseFloat(cashOutInput.value);


if(accountNumberInput2.value == ""){

alert("please enter a bKash agent number!")}


else if(accountNumberInput2.value.length != 11){

alert("invalid mobile number format! please enter correct number")
}
    
    
else if(accountNumberInput2.value[0] != 0){
    
alert("invalid mobile number format! please enter correct number")
}
    
    
else if(accountNumberInput2.value[1] != 1){
    
alert("invalid mobile number format! please enter correct number")
}
    
    
else if(accountNumberInput2.value[2] == 0){
    
alert("invalid mobile number format! please enter correct number")
}
    
    
else if(accountNumberInput2.value[2] == 1){
    
alert("invalid mobile number format! please enter correct number")
}
    
    
else if(accountNumberInput2.value[2] == 2){
    
alert("invalid mobile number format! please enter correct number")
}

else if(cashOutInput.value == ""){
    
alert("please enter an amount!")
}
    
    
else if(cashOutInput.value <= 0){
    
alert("invalid amount! please enter a correct amount")
}
    
    
else if(cashOutInput.value > totalBalanceValueNumber){
    
alert("insufficient balance!")
}
    
else{
    
    
if(cashOutInput.value == ""){
    
alert("please enter an amount!")
                
}
    
    
else if(pinCodeInput2.value == ""){
    
alert("please enter your bKash pin!")
}
            
            
else if(myBkashPin != pinCodeInput2.value){

alert("invalid pin! please enter the correct pin!")
}
            
            
else if(myBkashPin == pinCodeInput2.value){
    
    totalBalance.innerHTML = totalBalanceValueNumber - cashOutInputValueNumber;
    cashOutInput.value = ""
    
alert("cash out successful!")
}
    
    
    
else{
    
alert("logic not found!")
}
            
}
})
    
    
    
    
sendMoneyButton.addEventListener("click", function() {

totalBalanceValueNumber = parseFloat(totalBalance.innerText);
sendMoneyInputValueNumber = parseFloat(sendMoneyInput.value);


if(accountNumberInput3.value == ""){

alert("please enter a bKash account number!")}


else if(accountNumberInput3.value.length != 11){

alert("invalid mobile number format! please enter correct number")
}
    
    
else if(accountNumberInput3.value[0] != 0){
    
alert("invalid mobile number format! please enter correct number")
}
    
    
else if(accountNumberInput3.value[1] != 1){
    
alert("invalid mobile number format! please enter correct number")
}
    
    
else if(accountNumberInput3.value[2] == 0){
    
alert("invalid mobile number format! please enter correct number")
}
    
    
else if(accountNumberInput3.value[2] == 1){
    
alert("invalid mobile number format! please enter correct number")
}
    
    
else if(accountNumberInput3.value[2] == 2){
    
alert("invalid mobile number format! please enter correct number")
}


else if(sendMoneyInput.value == ""){

alert("please enter an amount!")
}


else if(sendMoneyInput.value <= 0){

alert("invalid amount! please enter a correct amount")
}


else if(sendMoneyInput.value > totalBalanceValueNumber){

alert("insufficient balance!")
}

else{


if(sendMoneyInput.value == ""){

alert("please enter an amount!")
            
}


else if(pinCodeInput3.value == ""){

alert("please enter your bKash pin!")
}
        
        
else if(myBkashPin != pinCodeInput3.value){
alert("invalid pin! please enter the correct pin!")
}
        
        
else if(myBkashPin == pinCodeInput3.value){

    totalBalance.innerHTML = totalBalanceValueNumber - sendMoneyInputValueNumber;
    sendMoneyInput.value = ""

alert("send money successful!")
}



else{

alert("logic not found!")
}
        
}
})




mobileRechargeButton.addEventListener("click", function(){

totalBalanceValueNumber = parseFloat(totalBalance.innerText);
mobileRechargeInputValueNumber = parseFloat(mobileRechargeInput.value);


if(mobileNumberInput.value == ""){

alert("please enter your mobile number!")
}


else{

if(mobileNumberInput.value.length != 11){

alert("invalid mobile number format! please enter correct number")
}
        
        
else if(mobileNumberInput.value[0] != 0){
        
alert("invalid mobile number format! please enter correct number")
}
        
        
else if(mobileNumberInput.value[1] != 1){
        
alert("invalid mobile number format! please enter correct number")
}
        
        
else if(mobileNumberInput.value[2] == 0){
        
alert("invalid mobile number format! please enter correct number")
}
        
        
else if(mobileNumberInput.value[2] == 1){
        
alert("invalid mobile number format! please enter correct number")
}
        
        
else if(mobileNumberInput.value[2] == 2){
        
alert("invalid mobile number format! please enter correct number")
}
    
    
else{


if(mobileOperatorInput.value == ""){

alert("please enter your mobile operator!")
}


else if(mobileNumberInput.value[2] == 3 && mobileOperatorInput.value != "gp"){

alert("mobile number and operator does not match! please enter the correct number OR operator")
}


else if(mobileNumberInput.value[2] == 7 && mobileOperatorInput.value != "gp"){

alert("mobile number and operator does not match! please enter the correct number OR operator")
}


else if(mobileNumberInput.value[2] == 4 && mobileOperatorInput.value != "bl"){

alert("mobile number and operator does not match! please enter the correct number OR operator")
                    
}


else if(mobileNumberInput.value[2] == 9 && mobileOperatorInput.value != "bl"){

alert("mobile number and operator does not match! please enter the correct number OR operator")
                        
}


else if(mobileNumberInput.value[2] == 8 && mobileOperatorInput.value != "robi"){

alert("mobile number and operator does not match! please enter the correct number OR operator")
                        
}


else if(mobileNumberInput.value[2] == 6 && mobileOperatorInput.value != "airtel"){

alert("mobile number and operator does not match! please enter the correct number OR operator")
                        
}


else if(mobileNumberInput.value[2] == 5 && mobileOperatorInput.value != "tt"){

alert("mobile number and operator does not match! please enter the correct number OR operator")
                        
}
                    
else if(mobileNumberInput.value[2] == 3 || mobileNumberInput.value[2] == 7 && mobileOperatorInput.value == "gp"){
                    
                    
if(mobileRechargeInput.value == ""){
                                                                                                                                            
alert("please enter your recharge amount!")
}
                                                                                                                                                
                                                                                                                                                
else if(mobileRechargeInput.value <= 0){
                                                                                                                                                
alert("invalid amount! please enter a correct amount")
}
                                                                                                                                                
                                                                                                                                                
else if(mobileRechargeInput.value > totalBalanceValueNumber){
                                                                                                                                                
alert("insufficient balance!")
}
                                                                                                                                                
else{
                                                                                                                                                
                                                                                                                                                
if(mobileRechargeInput.value == ""){
                    
alert("please enter your recharge amount!")
}
                                                                                                                                                
                                                                                                                                                
else if(pinCodeInput4.value == ""){
                                                                                                                                                
alert("please enter your bKash pin!")
}
                                                                                                                                                        
                                                                                                                                                        
else if(myBkashPin != pinCodeInput4.value){
                                                                                                                                            
alert("invalid pin! please enter the correct pin!")
}
                                                                                                                                                        
                                                                                                                                                        
else if(myBkashPin == pinCodeInput4.value){
                                                                                                                                                
    totalBalance.innerHTML = totalBalanceValueNumber - mobileRechargeInputValueNumber;
    mobileRechargeInput.value = ""
                                                                                                                                                
alert("grameenphone mobile recharge successful!")
}


else{

alert("logic not found!")

}}}




else if(mobileNumberInput.value[2] == 4 || mobileNumberInput.value[2] == 9 && mobileOperatorInput.value == "bl"){
                    
                    
if(mobileRechargeInput.value == ""){
                                                                                                                                                
alert("please enter your recharge amount!")
}
                                                                                                                                                    
                                                                                                                                                    
else if(mobileRechargeInput.value <= 0){
                                                                                                                                                    
alert("invalid amount! please enter a correct amount")
}
                                                                                                                                                    
                                                                                                                                                    
else if(mobileRechargeInput.value > totalBalanceValueNumber){
                                                                                                                                                    
alert("insufficient balance!")
}
                                                                                                                                                    
else{
                                                                                                                                                    
                                                                                                                                                    
if(mobileRechargeInput.value == ""){
                        
alert("please enter your recharge amount!")
}
                                                                                                                                                    
                                                                                                                                                    
else if(pinCodeInput4.value == ""){
                                                                                                                                                    
alert("please enter your bKash pin!")
}
                                                                                                                                                            
                                                                                                                                                            
else if(myBkashPin != pinCodeInput4.value){
                                                                                                                                                
alert("invalid pin! please enter the correct pin!")
}
                                                                                                                                                            
                                                                                                                                                            
else if(myBkashPin == pinCodeInput4.value){
                                                                                                                                                    
    totalBalance.innerHTML = totalBalanceValueNumber - mobileRechargeInputValueNumber;
    mobileRechargeInput.value = ""
                                                                                                                                                    
alert("banglalink mobile recharge successful!")
}
    
    
else{
    
alert("logic not found!")
    
}}}





else if(mobileNumberInput.value[2] == 8 && mobileOperatorInput.value == "robi"){
                    
                    
if(mobileRechargeInput.value == ""){
                                                                                                                                                
alert("please enter your recharge amount!")
}
                                                                                                                                                    
                                                                                                                                                    
else if(mobileRechargeInput.value <= 0){
                                                                                                                                                    
alert("invalid amount! please enter a correct amount")
}
                                                                                                                                                    
                                                                                                                                                    
else if(mobileRechargeInput.value > totalBalanceValueNumber){
                                                                                                                                                    
alert("insufficient balance!")
}
                                                                                                                                                    
else{
                                                                                                                                                    
                                                                                                                                                    
if(mobileRechargeInput.value == ""){
                        
alert("please enter your recharge amount!")
}
                                                                                                                                                    
                                                                                                                                                    
else if(pinCodeInput4.value == ""){
                                                                                                                                                    
alert("please enter your bKash pin!")
}
                                                                                                                                                            
                                                                                                                                                            
else if(myBkashPin != pinCodeInput4.value){
                                                                                                                                                
alert("invalid pin! please enter the correct pin!")
}
                                                                                                                                                            
                                                                                                                                                            
else if(myBkashPin == pinCodeInput4.value){
                                                                                                                                                    
    totalBalance.innerHTML = totalBalanceValueNumber - mobileRechargeInputValueNumber;
    mobileRechargeInput.value = ""
                                                                                                                                                    
alert("robi mobile recharge successful!")
}
    
    
else{
    
alert("logic not found!")
    
}}}





else if(mobileNumberInput.value[2] == 6 && mobileOperatorInput.value == "airtel"){
                    
                    
if(mobileRechargeInput.value == ""){
                                                                                                                                                
alert("please enter your recharge amount!")
}
                                                                                                                                                    
                                                                                                                                                    
else if(mobileRechargeInput.value <= 0){
                                                                                                                                                    
alert("invalid amount! please enter a correct amount")
}
                                                                                                                                                    
                                                                                                                                                    
else if(mobileRechargeInput.value > totalBalanceValueNumber){
                                                                                                                                                    
alert("insufficient balance!")
}
                                                                                                                                                    
else{
                                                                                                                                                    
                                                                                                                                                    
if(mobileRechargeInput.value == ""){
                        
alert("please enter your recharge amount!")
}
                                                                                                                                                    
                                                                                                                                                    
else if(pinCodeInput4.value == ""){
                                                                                                                                                    
alert("please enter your bKash pin!")
}
                                                                                                                                                            
                                                                                                                                                            
else if(myBkashPin != pinCodeInput4.value){
                                                                                                                                                
alert("invalid pin! please enter the correct pin!")
}
                                                                                                                                                            
                                                                                                                                                            
else if(myBkashPin == pinCodeInput4.value){
                                                                                                                                                    
    totalBalance.innerHTML = totalBalanceValueNumber - mobileRechargeInputValueNumber;
    mobileRechargeInput.value = ""
                                                                                                                                                    
alert("airtel mobile recharge successful!")
}
    
    
else{
    
alert("logic not found!")
    
}}}




else if(mobileNumberInput.value[2] == 5 && mobileOperatorInput.value == "tt"){
                    
                    
if(mobileRechargeInput.value == ""){
                                                                                                                                                
alert("please enter your recharge amount!")
}
                                                                                                                                                    
                                                                                                                                                    
else if(mobileRechargeInput.value <= 0){
                                                                                                                                                    
alert("invalid amount! please enter a correct amount")
}
                                                                                                                                                    
                                                                                                                                                    
else if(mobileRechargeInput.value > totalBalanceValueNumber){
                                                                                                                                                    
alert("insufficient balance!")
}
                                                                                                                                                    
else{
                                                                                                                                                    
                                                                                                                                                    
if(mobileRechargeInput.value == ""){
                        
alert("please enter your recharge amount!")
}
                                                                                                                                                    
                                                                                                                                                    
else if(pinCodeInput4.value == ""){
                                                                                                                                                    
alert("please enter your bKash pin!")
}
                                                                                                                                                            
                                                                                                                                                            
else if(myBkashPin != pinCodeInput4.value){
                                                                                                                                                
alert("invalid pin! please enter the correct pin!")
}
                                                                                                                                                            
                                                                                                                                                            
else if(myBkashPin == pinCodeInput4.value){
                                                                                                                                                    
    totalBalance.innerHTML = totalBalanceValueNumber - mobileRechargeInputValueNumber;
    mobileRechargeInput.value = ""
                                                                                                                                                    
alert("teletalk mobile recharge successful!")
}
    
    
else{
    
alert("logic not found!")

}}}}}})