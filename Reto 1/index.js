const listaDisponibles = document.getElementById('items-disponibles');
const listaAgregados = document.getElementById('items-agregados');
const agregarBtn = document.querySelector(".agregar-item");
const eliminarBtn = document.querySelector(".eliminar-item");
const totalTexto = document.getElementById("precio-total");

let total = 0;
const itemsOriginal = [
    {nombre: "Tomate", precio: 1000},
    {nombre: "Perejil", precio: 500},
    {nombre: "Mantequilla", precio: 3200},
    {nombre: "Pan", precio: 900},
    {nombre: "Harina", precio: 1200},
    {nombre: "Piña", precio: 3700},
    {nombre: "Chocolate", precio: 500},
    {nombre: "Orégano", precio: 1200},
    {nombre: "Queso", precio: 6000},
    {nombre: "Ajo", precio: 600},
    {nombre: "Leche", precio: 1100},
    {nombre: "Jamón", precio: 5500},
    {nombre: "Azúcar", precio: 2400}
];

const items = [...itemsOriginal];

const init = (items) =>{
    const actualizarPrecio = () => {
        totalTexto.innerText = total;
    };

    const seleccionarItem = (item, li) => {
        li.classList.toggle("item-seleccionado");
        if(item.seleccionado){
            item.seleccionado = false;
        } else {
            item.seleccionado = true;
        }
        console.log(item)
    };

    const agregarItems = () => {
        listaDisponibles.querySelectorAll(".item-seleccionado").forEach(li => {
            listaAgregados.appendChild(li);
            li.classList.toggle("item-seleccionado");
        });

        const itemsSeleccionados = items.filter(item => item.seleccionado && !item.agregado);
        itemsSeleccionados.forEach(item =>{
            item.seleccionado = false;
            item.agregado = true;
            total += item.precio;
        });
        actualizarPrecio();
    };

    const elminarItems = () => {
        listaAgregados.querySelectorAll(".item-seleccionado").forEach(li => {
            listaDisponibles.appendChild(li);
            li.classList.toggle("item-seleccionado");
        });

        const itemsSeleccionados = items.filter(item => item.seleccionado && item.agregado);
        itemsSeleccionados.forEach(item =>{
            item.seleccionado = false;
            item.agregado = false;
            total -= item.precio;
        });
        actualizarPrecio();
    };

    const agregarInicial = () => {
        items.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML =
                "<span class=\"nombre\">" + item.nombre + "</span> <span class=\"precio\"> $ " + item.precio + "</span>";
            listaDisponibles.appendChild(li);

            li.addEventListener("click", () => {
                seleccionarItem(item, li);
            });
        });
    };

    agregarInicial();
    agregarBtn.addEventListener("click", agregarItems);
    eliminarBtn.addEventListener("click", elminarItems);
};

init(items);