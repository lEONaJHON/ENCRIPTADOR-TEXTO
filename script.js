const texto = document.querySelector("#texto");
const textoFinal = document.querySelector("#texto-final");


 
// crear funcion
function validarValoresEntrada() {
    // conectar el input al html
          const textoUsuario = document.getElementById("texto").value;
          // se crea un bucle para verificar el texto
    for (let i = 0 ; i < textoUsuario.length ; i++) {
        // elimina cualquier caracter que no se minuscula de la a la z
              
       
         //se crea un if para verificar que la cadena no contenga mayusculas
          if(textoUsuario[i] >= "A" && textoUsuario[i] <= "Z"){
              alert("SEÑOR USUARIO, POR FAVOR INGRESE SOLO MINUSCULAS SIN ACENTOS NI CARACTERES ESPECIALES");
          return;    
          }
              
      //e crea un if para verificar que no tenga caracteres especiales
          if (/[áéíóúń]/g.test(textoUsuario)){
               alert("SEÑOR USUARIO, POR FAVOR INGRESE SOLO MINUSCULAS SIN ACENTOS NI CARACTERES ESPECIALES");
               return;  
          }
          // verificar si tiene caracteres especiales mediante el uso de le expresion regular /[^\w]/
          if (/[¡!@#$%^&*()-_=+{}[\];:'"<>,.\/\\]/g.test(textoUsuario)) {
              alert("SEÑOR USUARIO, POR FAVOR INGRESE SOLO MINUSCULAS SIN ACENTOS NI CARACTERES ESPECIALES");
              return;
            
          }
          
        }
        
    }
    function encriptar(){
        validarValoresEntrada();
         textoUsuario = document.getElementById("texto").value;
        let textoEncriptado = textoUsuario.replace(/e/g, "enter")
                                        .replace(/i/g, "imes")
                                        .replace(/a/g, "ai")
                                        .replace(/o/g, "ober")
                                        .replace(/u/g, "ufat");

         
        textoEncriptado = document.querySelector("#textoFinal").textContent = textoEncriptado;

        return;   
    }