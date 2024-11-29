// Función constructora Persona
function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

// Método saludar en el prototipo de Persona
Persona.prototype.saludar = function() {
  console.log(`Hola, mi nombre es: ${this.nombre} ${this.apellido}`);
}

// Función constructora Profesor
function Profesor(nombre, apellido, edad, materia) {
  // Llamar al constructor de Persona
  Persona.call(this, nombre, apellido, edad);
  this.materia = materia;
}

// Profesor hereda de Persona
Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

// Método saludar en el prototipo de Profesor
Profesor.prototype.saludar = function() {
  console.log(`Hola, soy PROFESOR y mi nombre es: ${this.nombre}`);
}

// Crear instancias de Persona y Profesor
const persona1 = new Persona('Juan', 'Pérez', 30);
const profesor1 = new Profesor('Ana', 'García', 40, 'Matemáticas');

// Llamar a los métodos saludar
persona1.saludar();  // Hola, mi nombre es: Juan Pérez
profesor1.saludar(); // Hola, soy PROFESOR y mi nombre es: Ana