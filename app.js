function contarVocales(cadena) {
    // Convierte la cadena a minúsculas para que las comprobaciones sean insensibles a mayúsculas y minúsculas
    cadena = cadena.toLowerCase();
    
    let contadorVocales = 0;
  
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i];
      if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        contadorVocales++;
      }
    }
  
    return contadorVocales;
  }
  
  // Ejemplo de uso:
  const texto = "Esta es una cadena de ejemplo";
  const numeroDeVocales = contarVocales(texto);
  console.log(`El número de vocales en el texto es: ${numeroDeVocales}`);
  