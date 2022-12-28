function convertToRoman(num) {
    
    let roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    var str = '';

    for (let i of Object.keys(roman)){
        var q = Math.floor(num/roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }


   

    //b = a;console.log(b);

    // if(num >= 1000){

    // }else if(num < 1000 && num >= 500){

    // }else if(num < 500 && num >= 400){

    // }else if(num < 400 && num >= 100){

    // }else if(num < 100 && num >= 90){

    // }else if(num < 90 && num >= 50){

    // }else if(num < 50 && num >= 40){

    // }else if(num < 40 && num >= 10){

    // }else if(num = 9){

    // }else if(num < 9 && num >= 5){

    // }else if(num = 4){

    // }else if(num < 40 && num >= 10){

    // }

    return str;

   }
   
   console.log(convertToRoman(956));