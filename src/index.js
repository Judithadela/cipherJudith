
document.getElementById("change").addEventListener("change",offsetIngresado);
function offsetIngresado(){
offset=parseInt(document.getElementById("change").value)%26;
}
document.getElementById("buttonCode").addEventListener("click", cifrar);
document.getElementById("buttonDecode").addEventListener("click", descifrar);

function cifrar(){

  string=document.getElementById("texto").value;
  document.getElementById("texto2").value=(cipher.encode(offset, string));

}
function descifrar(){

  string=document.getElementById("texto").value;
  document.getElementById("texto2").value=(cipher.decode(offset, string));
}


let string, offset;
