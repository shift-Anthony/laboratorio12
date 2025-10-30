const mostrarDatos = (nombre, edad, ...hobbies) => {
  const listaHobbies = hobbies.join(", ");
  alert(
    `Nombre: ${nombre}\n` +
    `Edad: ${edad}\n` +
    `Hobbies: ${listaHobbies}`
  );
};

// Ejecucion del codigo
mostrarDatos("Ana", 28, "Leer", "Programar", "Ver series");

mostrarDatos("Luis", 40, "Fútbol");