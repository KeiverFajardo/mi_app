const productos = [
        {id: 1, nombre: "Camara", precio: 120, color: "rojo", foto: "../img/camara.jpg"},
        {id: 2, nombre: "Laptop", precio: 140, color: "verde", foto: "../img/laptop.jpg"},
        {id: 3, nombre: "Celular", precio: 70, color: "azul", foto: "../img/celular.jpg"},
        {id: 4, nombre: "Memoria", precio: 90, color: "gris", foto: "../img/memoria.jpg"},
        {id: 9, nombre: "Mouse", precio: 90, color: "gris", foto: "../img/mouse.jpg"},
]

export const promesa = new Promise((resolve) => {

        setTimeout(() => {
            resolve(productos)
        }, 2000)
})
