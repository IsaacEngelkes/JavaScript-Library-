// The purpose of this function is to serve as a shortcut for Document.getElementById().
function $(elementId) {
    return document.getElementById(elementId);
}

// Takes an array of words, and concatenates them together to form a sentence.
function ConcatArrayOfWords(array) {
    var result = "";
    
    if (Array.isArray(array) && typeof array[0] == "string") {

        for (var x = 0; x < array.length; x++) {
            result += array[x] + " ";
        }

        result = result.trim();

    } else {
        result = "Parameter must be an array of type string."
    }

    return result;
}

// Takes an array of words, reverses them, and concatenates them together to form a sentence.
function ConcatAndReverseArrayOfWords(array) {
    var result = "";

    if (Array.isArray(array) && typeof array[0] == "string") {

        for (var x = array.length - 1; x >= 0; x--) {
            result += array[x] + " ";
        }

        result = result.trim();

    } else {
        result = "Parameter must be an array of type string."
    }

    return result;
}

// Checks to see if a word exists within a sentence.
function CheckForWordInSentence(sentence, word) {
    let s = sentence.split(" ");

    for (let temp = 0; temp < s.length; temp++) {

        
        if (s[temp] == (word)) {
            return true;
        }
    }
    return false;
}

// Tests if the input parameter is of the type of the type parameter.
function ValidateInputIsSpecifiedType(input, type) {
    var result;

    switch (type) {
        case "string":
            if (typeof input == "string") {
                result = true;
            } else {
                result = false;
            }
            break;

        case "number":
            if (typeof input == "number") {
                result = true;
            } else {
                result = false;
            }
            break;

        case "boolean":
            if (typeof input == "boolean") {
                result = true;
            } else {
                result = false;
            }
            break;

        case "undefined":
            if (typeof input == "undefined") {
                result = true;
            } else {
                result = false;
            }
            break;

        default:
            result = "Possible values for the type parameter include: string, number, boolean, undefined";
            break;
    }

    return result;
}

// Returns the sum of an array of numbers passed-in.
function AddArrayOfNumbers(numbers) {
    var result = 0;


    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    if (typeof numbers === 'string' || numbers instanceof String) {
        result = false;
   
    }

    return result;
    
}

// Gets a random whole number between 0 and the number passed in (maxNumber).
function GetRandomInteger(maxNumber) {
    var result;
    var  minNumber = 1;
    var maxNumber = 10;
    if ((Math.random() * maxNumber) + 1 > minNumber) {


        result = true;
    }
    else {
        result = "Please enter a number greater than 1";
    }

    return result;
}

// Validates a date input field
function ValidateDateInput(input, invalid) {
    var result;
    var dateInput = $(input).value;
    var invalidMessage = $(invalid);
    var oldestDate = 1900;
    var dateArray = dateInput.split("-");

    var date = Date.parse(dateInput);
    var validDate = parseInt(dateArray[0]);

    if (validDate > oldestDate && date < Date.now()) {
        result = true
        invalidMessage.style.visibility = "hidden";
    } else {
        result = false
        invalidMessage.style.visibility = "visible";
    }

    return result;
}

// Validates a selection list input field
function ValidateSelectList(input, invalid) {
    var result;
    var dateInput = $(input).value;
    var invalidMessage = $(invalid);
    var noInput = "---"

    if (dateInput != noInput) {
        result = true
        invalidMessage.style.visibility = "hidden";
    } else {
        result = false
        invalidMessage.style.visibility = "visible";
    }

    return result;
}

// Validates a name input.
function ValidateNameInput(input, invalid) {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = $(input).value;
    var invalidMessage = $(invalid);
    var result;
    if (regName.test(name)) {
        result = true
        invalidMessage.style.visibility = "hidden";
    }
    else {
        result = false
        invalidMessage.style.visibility = "visible";
    }
    return result;
}

// Validates a phone number.
function ValidatePhoneNumber(input, invalid) {
    var phonenum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phone = $(input).value;
    var invalidMessage = $(invalid);
    var result;

    if (phonenum.test(phone)) {
        result = true;
        invalidMessage.style.visibility = "hidden";
    }
    else {
        result = false;
        invalidMessage.style.visibility = "visible";
    }
    return result;
}
// Validates a number.
function ValidateNumberInput(input, invalid) {
    var result;
    var pattern = /^0*(?:[1-9][0-9][0-9]?|[1-9]|1000)$/;
    var number = $(input).value;
    var numberInvalid = $(invalid);

    if (pattern.test(number)) {
        result = true;
        numberInvalid.style.visibility = "hidden";
    }
    else {
        result = false;
        numberInvalid.style.visibility = "visible";
    }
    return result;
}

function ValidateFormSubmit(action, valid, invalid) {
    var result;
    var submitMessage = $(action);

    if (ValidateNameInput('name', 'textInvalid') && ValidateDateInput('birthDate', 'dateInvalid') && ValidatePhoneNumber('phoneNumber', 'phoneInvalid')
     && ValidateSelectList('state', 'stateInvalid') && ValidateNumberInput('number', 'numberInvalid')) {
        result = true;
        submitMessage.innerHTML = valid;
        submitMessage.style.color = "Black";
        // Clear form
    } else {
        result = false;
        submitMessage.innerHTML = invalid;
        submitMessage.style.color = "Red";
    }

    submitMessage.style.visibility = "visible";

    return result;
}