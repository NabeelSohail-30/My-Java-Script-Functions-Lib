//Function to Display Time
function RealTimeClock() {
    var Clock = new Date();
    var hours = Clock.getHours();
    var min = Clock.getMinutes();
    var sec = Clock.getSeconds();
    var AmPm = (hours < 12) ? 'AM' : 'PM';
    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);

    var RealTime = hours + '   :   ' + min + "   :   " + sec + "    " + AmPm;
    document.getElementById("clock").innerHTML = RealTime;
}


//Function To Display Real Time
function RealTime() {
    setInterval(RealTimeClock, 1000);
}


//Function to check NULL
function IsNull(TargetElement) {
    if (TargetElement == "" || TargetElement.length == 0 || TargetElement == undefined) {
        return true;
    } else {
        return false;
    }
}


//Function to Validate NIC Number
function NICValidate(TargetElement) {
    var TargetValue = TargetElement.value;
    var ErrorNIC = "";

    if (IsNull(TargetValue)) {
        ErrorNIC = 'NIC Number cannot be NULL';
    } else if (TargetValue.length < 15 || TargetValue.length > 15) {
        ErrorNIC = 'NIC length must be 15';
    } else if (TargetValue.substr(6, 1) != '-' || TargetValue.substr(13, 1) != '-') {
        ErrorNIC = 'Invalid NIC Format';
    } else if (isNaN(TargetValue.substr(14, 1)) != false) {
        ErrorNIC = 'Lat Character is not a Number, NIC cannot contain Non Numeric Character';
    } else {
        for (var i = 0; i < 6; i++) {
            if (isNaN(TargetValue.charAt(i))) {
                ErrorNIC = 'NIC cannot contain Non Numeric Character';
                break;
            }
        }

        for (var i = 7; i < 13; i++) {
            if (isNaN(TargetValue.charAt(i))) {
                ErrorNIC = 'NIC cannot contain Non Numeric Character';
                break;
            }
        }

    }
}

//Function to Check Alphabet
function IsAlphabet(string) {
    var ErrorFound = false;
    for (var i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            ErrorFound = false;
        } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            ErrorFound = false;
        } else {
            ErrorFound = true;
            break;
        }
    }

    if (ErrorFound == true) {
        return true;
    } else {
        return false;
    }
}

//Function to Validate First Name
function FirstNameValidate(TargetElement) {
    var TargetValue = TargetElement.value;
    var ErrorName = "";

    if (IsNull(TargetValue)) {
        ErrorName = 'First Name cannot be NULL';
    } else if (TargetValue.length > 15) {
        ErrorName = 'Maximum Length for First Name is 15 characters';
    } else if (IsAlphabet(TargetValue) == true) {
        ErrorName = 'Non-Alphabet character found in First Name';
    }
    window.alert(ErrorName);
}

//Function to Validate Mid Name
function MidNameValidate(TargetElement) {
    //window.alert(89);
    var TargetValue = TargetElement.value;
    var ErrorMidName = "";

    if (TargetValue.length > 15) {
        ErrorMidName = 'Maximum Length for Mid Name is 15 characters';
    } else if (IsAlphabet(TargetValue) == true) {
        ErrorMidName = 'Invalid Character Found in Mid Name';
    }
    //window.alert(ErrorMidName);
    document.getElementById("MidNameError").innerText = ErrorMidName;
}

//Function to Validate Last Name
function LastNameValidate(TargetElement) {
    //window.alert(89);
    var TargetValue = TargetElement.value;
    var ErrorLastName = "";

    if (IsNull(TargetValue)) {
        ErrorLastName = 'Last Name cannot be NULL';
    } else if (TargetValue.length > 15) {
        ErrorLastName = 'Maximum Length for Last Name is 15 characters';
    } else if (IsAlphabet(TargetValue) == true) {
        ErrorLastName = 'Invalid Character Found in Last Name';
    }
    //window.alert(ErrorLastName);
    document.getElementById("LastNameError").innerText = ErrorLastName;
}

//Function to Validate Date of Birth
function ValidateDob(TargetElement) {
    var TargetValue = TargetElement.value;
    var ErrorDateOfBirth = "";

    if (IsNull(TargetValue)) {
        ErrorDateOfBirth = 'Date of Birth cannot be left NULL';
    }

    document.getElementById("DateError").innerText = ErrorDateOfBirth;
}

//Function to Validate Nationality
function ValidateNationality(TargetElement) {
    var TargetValue = TargetElement.value;
    var ErrorNationality = "";

    if (TargetValue == -1) {
        ErrorNationality = 'No Nationality Selected';
    }

    document.getElementById("NationalityError").innerText = ErrorNationality;
}