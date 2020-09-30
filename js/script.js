//
// Lista de tareas
//

// Modelo.

let tareas = [];

let contadorTareas = 0;

function addTask(nombreTarea, fechaTarea, completoTarea) {
  const miTarea = {
    id: contadorTareas,
    nombre: nombreTarea,
    completo: completoTarea,
    fecha: fechaTarea,
  };

  tareas.push(miTarea);

  contadorTareas++;

  appendTaskDOM(miTarea);

  localStorage.setItem('tareas', JSON.stringify(tareas));

}

// Vista.

// Lista de tareas (DOM).
const lista = document.getElementById('task-list');

function appendTaskDOM(tarea) {
  // Item de la lista
  const item = document.createElement('li');
  item.className = 'task-list__item';
  // Checkbox.
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tarea-${tarea.id}`);
  // Label.
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${tarea.id}`);
  label.innerHTML = `${tarea.nombre} - ${tarea.fecha}`;
  // Se agregan elementos.
  item.appendChild(checkbox);
  item.appendChild(label);
  lista.appendChild(item);
}

// Controlador.

const formulario = document.getElementById('new-task-form');

// Crea una nueva tarea.
formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  addTask(formulario.elements[0].value, formulario.elements[1].value, false);
  
  // Reseteamos el form.
  formulario.elements[0].value = '';
  formulario.elements[1].value = '';
})