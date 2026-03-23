let tareas = [];

const inputTarea = document.getElementById("inputtarea");
const btnAgregar = document.getElementById("btnagregar");
const listaTareas = document.getElementById("listatareas"); 

const renderTareas = () => {
    let template = "";
    for (let i = 0; i < tareas.length; i++) {
        template += `<li>
            ${tareas[i].id} - ${tareas[i].texto} - ${tareas[i].completada ? '✓' : '✗'}
            <button onclick="completar(${i})">Completar</button>
            <button onclick="eliminar(${i})">Eliminar</button>
        </li>`;
    }
    listaTareas.innerHTML = template;
    document.getElementById("totaltareas").textContent = "Total: " + totalTareas();
    document.getElementById("realizadas").textContent = "Realizadas: " + tareasRealizadas();
};

const agregarTarea = () => {
    const texto = inputTarea.value.trim();
    if (texto) {
        tareas.push({ id: tareas.length + 1, texto: texto, completada: false });
        inputTarea.value = "";
        renderTareas();
    }
};

const completar = (index) => {
    tareas[index].completada = !tareas[index].completada;
    renderTareas();
};

const eliminar = (index) => {
    tareas.splice(index, 1);
    renderTareas();
};

const totalTareas = () => {
    return tareas.length;
};

const tareasRealizadas = () => {
    return tareas.filter(tarea => tarea.completada).length;
};

btnAgregar.addEventListener("click", agregarTarea);
