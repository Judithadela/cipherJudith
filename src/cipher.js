window.cipher = {
     encode: (offset, string) => {
        
     let resultado = "";
     
    for(let i = 0; i < string.length; i++) {
        let caracter = string.charCodeAt(i);
        if(caracter >= 97 && caracter <= 122) {
            resultado += String.fromCharCode((caracter - 97 + offset) % 26 + 97);
        }
         else if(caracter >= 65 && caracter <= 90) {
          resultado += String.fromCharCode((caracter - 65 + offset) % 26 + 65);
        } 
        else {
            resultado += string.charAt(i);
        }
    }
    return resultado;
},

     decode: (offset,string) => {
       let res= (offset % 26);
        offset=(26 - res ) % 26;  

        let descifrado = "";
        for (let i = 0; i < string.length; i++) {
            let caracter = string.charCodeAt(0);
            if (65 <= caracter && caracter <= 90) {
        descifrado += String.fromCharCode((caracter - 65 + offset) % 26 + 65);
            }
            else if (97 <= caracter && caracter <= 122) {
              descifrado += String.fromCharCode((caracter - 97 + offset) % 26 + 97);
        }
            else {
              descifrado += string.charAt(i);
            }    
     }
    return descifrado;
}
};
