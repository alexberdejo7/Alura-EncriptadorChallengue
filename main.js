// Función para encriptar el texto
function encrypt(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
  }
  
  // Función para desencriptar el texto
  function decrypt(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
  }
  
  // Obtener referencias a los elementos del DOM
  const textArea = document.getElementById('texto');

  const warningMessage = document.getElementById('warning');

  // Agregar evento de entrada para validar el texto ingresado
  textArea.addEventListener('input', () => {
    // Obtener el texto ingresado por el usuario
    let text = textArea.value;
    
    // Aplicar una expresión regular para eliminar todos los caracteres que no sean letras ni espacios
    text = text.replace(/[^a-z\s]/g, '');
  
    // Actualizar el valor del área de texto con el texto validado
    textArea.value = text;
  
    // Mostrar una advertencia si se ingresan caracteres no permitidos
    if (textArea.value !== text) {
      warningMessage.style.display = 'block';
    } else {
      warningMessage.style.display = 'none';
    }
  });

  
  const encryptButton = document.getElementById('enc');
  const decryptButton = document.getElementById('des');
  const resultTextArea = document.getElementById('texto_out');
  const copyButton = document.getElementById('copiar');
  
  // Función para manejar el evento click del botón "Encriptar"
  encryptButton.addEventListener('click', () => {
    const text = textArea.value.toLowerCase(); // Convertir texto a minúsculas
    const encryptedText = encrypt(text);
    resultTextArea.value = encryptedText; // Mostrar texto encriptado en el área de resultado
    resultTextArea.removeAttribute('disabled'); // Habilitar el área de resultado
    resultTextArea.focus(); // Dar foco al área de resultado
  });
  
  // Función para manejar el evento click del botón "Desencriptar"
  decryptButton.addEventListener('click', () => {
    const text = textArea.value.toLowerCase(); // Convertir texto a minúsculas
    const decryptedText = decrypt(text);
    resultTextArea.value = decryptedText; // Mostrar texto desencriptado en el área de resultado
    resultTextArea.removeAttribute('disabled'); // Habilitar el área de resultado
    resultTextArea.focus(); // Dar foco al área de resultado
  });
  
  // Función para manejar el evento click del botón "Copiar"
  copyButton.addEventListener('click', () => {
    resultTextArea.select();
    document.execCommand('copy');
  });
  

// FUncion copiar texto encript
  copyButton.addEventListener('click', () => {
    resultTextArea.select(); // Seleccionar todo el texto en el área de resultado
    document.execCommand('copy'); // Copiar el texto seleccionado al portapapeles
  });