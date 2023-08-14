const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "~!@#$%^&*()_+?^_`{|}~";

// selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomPassword = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = "") => {
    if (upperInput.checked){
        password += getRandomPassword(upperSet);
    }
    if (lowerInput.checked){
        password += getRandomPassword(lowerSet);
    }
    if (numberInput.checked){
        password += getRandomPassword(numberSet);
    }
    if (symbolInput.checked){
        password += getRandomPassword(symbolSet);
    }
    if(password.length < totalChar.value){
        return generatePassword(password);
    }
    // passBox.innerHTML = totalChar.value;
    passBox.innerHTML = truncateString(password, totalChar.value);
}
// generatePassword();

document.getElementById("btn").addEventListener("click", function(){
    generatePassword();
});

function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
}