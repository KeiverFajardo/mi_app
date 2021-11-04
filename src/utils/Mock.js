const productos = [
        {id: 1, categoria: "camara", nombre: "Camara Canon", foto: "../img/gabineteGamer.jpg"},
        {id: 2, categoria: "laptop", nombre: "Laptop Asus", foto: "../img/gabineteGamer.jpg"},
        {id: 3, categoria: "teclado", nombre: "Teclado Ryzer", foto: "../img/gabineteGamer.jpg"},
        {id: 4, categoria: "monitor", nombre: "Monitor Lenovo",  foto: "../img/gabineteGamer.jpg"},
        {id: 5, categoria: "gabinete", nombre: "Gabinete Gamer", foto: "../img/gabineteGamer.jpg"},
        {id: 6, categoria: "laptop", nombre: "Laptop Dell",  foto: "../img/gabineteGamer.jpg"},
        {id: 7, categoria: "teclado", nombre: "Teclado logitech", foto: "../img/gabineteGamer.jpg"},
        {id: 8, categoria: "mouse", nombre: "Mouse Logitech",  foto: "../img/gabineteGamer.jpg"},
        {id: 9, categoria: "gabinete", nombre: "Gabinete Thermaltake",  foto: "../img/gabineteGamer.jpg"},
        {id: 10, categoria: "mouse", nombre: "Mouse Cooler Master", foto: "../img/gabineteGamer.jpg"},
        {id: 11, categoria: "camara", nombre: "Camara Kodak",  foto: "../img/gabineteGamer.jpg"},
        
]

export const promesa = new Promise((resolve) => {

        setTimeout(() => {
            resolve(productos)
        }, 2000)
})

const productoAux = productos.filter((item) => item.id === 4)
export const promesaUnica = new Promise((resolver) => {

        setTimeout(() => {
            resolver(productoAux)
        }, 2000)
})
