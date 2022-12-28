function rot13(str) {

    str = str.split("");

    str = str.map(char => {

        let code = char.charCodeAt(0);

        if ((code > 64 && code < 78) || (code > 96 && code < 110)) {
            code += 13;
        } else if ((code > 77 && code < 91) || (code > 109 && code < 123)) {
            code -= 13;
        }

        return String.fromCharCode(code);
    
    });

    return str.join("");
}

console.log(rot13("SERR CVMMN!"));