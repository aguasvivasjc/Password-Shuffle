var generateBtn = document.querySelector("#scramble");

var alpha_Lower = "abcdefghijklmnopqrstuvwxyz";
var alpha_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeral = "1234567890";
var symbolic = "!@#$%^&*()_+=-/|<>;:`{}[].?~,";

var characters;
var upper;
var num;
var symb;
var lower;

function checkLength() {
    Length = parseInt(prompt("How many characters would you like?): "));

    if (Length < 8 || Length > 128) {
        alert("Your password does not meet the length require of 8 to 128 characters");
        checkLength();
    } else if (isNaN(Length)) {
        alert("Try Again");
        checkLength();
    } else {
        alert("Proceed")
    }
    return Length;

}

function uppercase() {
    upper = confirm("Would you like to use upper case characters?")



    if (upper === null || upper === "") {
        alert("Password conditions not met");
        return uppercase();
        // return upper;
    }

    return upper;

}

function lowercase() {
    lower = prompt("Would you like to use lower case characters?")

    if (lower === "Yes" || lower === "yes") {
        lower = true;
        return lower;
    }

    else if (lower === "No" || lower === "no") {
        lower = false;
        return lower;

    }

    else if (lower === null || lower === "") {
        alert("Password conditions not met");
        lowercase();
        
    }

    else {
        alert("Password conditions not met");
        lowercase();
    }

    return lower;

}

function number() {
    num = prompt("Would you like to use numeric characters?")

    if (num === "Yes" || num === "yes") {
        num = true;
        return num;
    }

    else if (num === "No" || num === "no") {
        num = false;
        return num;

    }

    else if (num === null || num === "") {
        alert("Password conditions not met");
        // num = false;
        return number();
    }

    else {
        alert("Password conditions not met");
        number();
    }

    return num;

}

function symbols() {
    symb = prompt("Would you like to use symbolic characters?")

    if (symb === "Yes" || symb === "yes") {
        symb = true;
        return symb;
    }

    else if (symb === "No" || symb === "no") {
        symb = false;
        return symb;

    }

    else if (symb === null || symb === "") {
        alert("Password conditions not met");
        symbols();
        // symb = false;
        // return symb;
    }

    else {
        alert("Password conditions not met");
        symbols();
    }

    return symb;

}

function generatePassword() {
    checkLength();
    console.log(Length);
    lowercase();
    console.log(lowercase);
    uppercase();
    console.log(upper)
    number();
    console.log(num);
    symbols();
    console.log(symb);

    var characters = alpha_Lower;
    var pwd = "";

    if (upper && num && symb) {
        characters += alpha_upper + numeral + symbolic;
    }
    else if (upper && num) {
        characters += alpha_upper + numberal;
    }
    else if (upper && symb) {
        characters += numeral + symbolic;
    }

    else if (num && symb) {
        characters += numberal + symbolic;
    }

    else if (upper) {
        characters += alpha_upper;
    }
    else if (num) {
        characters += numeral;
    }
    else if (symb) {
        characters += symbolic;
    }

    else {
        characters === alpha_Lower;
    }
    for (var i = 0; i < Length; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return pwd;

}

function writePassword() {
    var password = "";
    password = generatePassword();
    var passwordText = document.querySelector("#Password");
    passwordText.value = password;
    console.log(passwordText.value);
}

generateBtn.addEventListener("click", writePassword);
