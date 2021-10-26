 var nombre= document.getElementById("fname");
 var apellido= document.getElementById("apellido");
 var email= document.getElementById("email");
 var telefono= document.getElementById("telefono");
 var producto= document.getElementById("producto");
 var mensaje= document.getElementById("message");
 var error= document.getElementById("error");
 var correcto= document.getElementById("correcto");
 error.style.color="red"
error2.style.color="red"
error3.style.color="red"
error4.style.color="red"
error5.style.color="red"
error6.style.color="red"
correcto.style.color="verde"


 var form = document.getElementById("formulario");
 form.addEventListener('submit',function(evt){
     evt.preventDefault();
    
     if(nombre.value === null||nombre.value===""){
        error.innerHTML="Ingresa un nombre "}
        
        else{ correcto.innerHTML="✔", error.innerHTML="" };
       
    
    if(apellido.value === null||apellido.value===""){
   
     error2.innerHTML="Ingresa un Apellido "} 
     else{ correcto2.innerHTML="✔", error2.innerHTML=""};
 
 if(email.value === null||email.value===""){
     error3.innerHTML="Ingrese un E-mail"}
     else{ correcto3.innerHTML="✔", error3.innerHTML=""};
 
 if(telefono.value === null||telefono.value===""){
    error4.innerHTML="Ingrese un telefono"}
    else{ correcto4.innerHTML="✔", error4.innerHTML=""};

 if(producto.value === null||producto.value===""){
    error5.innerHTML="Ingrese el codigo del producto"}
    else{ correcto5.innerHTML="✔", error5.innerHTML=""};

 if(mensaje.value === null||mensaje.value===""){
    error6.innerHTML="Igrese un mensaje"}
    else{ correcto6.innerHTML="✔", error6.innerHTML=""};

 } );

