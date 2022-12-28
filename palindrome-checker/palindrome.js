function palindrome(str) {

    let strArray = []; //str.split("");
    let strFinalArray = [];

    let response = false;


    var regex = /\s+|_+|\W+/g;

    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    str = str.replace(regex, "").toLowerCase();

    strArray = str.split("");

    let j = 0;

    for (let i = strArray.length - 1; i >= 0; i--) {
        strFinalArray[j] = strArray[i];
        j += 1;
    }

    if(strArray.join("") === strFinalArray.join("")){
        response = true;
    }

    return response;
}

console.log(palindrome('five|\_/|four'));