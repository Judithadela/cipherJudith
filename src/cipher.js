window.cipher = {
     encode: (offset, string) => {
        
     let resultado = "";
     
    for(let i = 0; i < string.length; i++) {
        let caracter = string.charCodeAt(i);
        if(caracter >= 97 && caracter <= 122) {
            resultado += String.fromCharCode((caracter - 97 + offset) % 26 + 97);
        } else if(caracter >= 65 && caracter <= 90) {
          resultado += String.fromCharCode((caracter - 65 + offset) % 26 + 65);
        } else {
            resultado += string.charAt(i);
        }
    }
    return resultado;
},

     decode: (offset,string) => {

        let resultado = "";
        offset=(26 - offset)%26;   
     for(let i = 0; i < string.length; i++) {
        let caracter = string.charCodeAt(i);
        if(caracter >= 97 && caracter <= 122) {
            resultado += String.fromCharCode((caracter + 97 - offset) % 26 + 97);
        } else if(caracter >= 65 && caracter <= 90) {
            resultado += String.fromCharCode((caracter + 65 - offset ) % 26 + 65);
        } else {
            resultado += string.charAt(i);
        }
    }
    return resultado;
}

};
