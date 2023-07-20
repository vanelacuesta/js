let correo = prompt ("Ingrese su correo electrónico")
let correcto

for (let i = 0; i < correo.length; i++){
    if (correo[i]==="@"){
        correcto=true
    }
}
if (correcto){
    alert("Ingresaste un correo electrónico correcto!")
}else{
    alert("Tu correo electrónico no es válido")
}