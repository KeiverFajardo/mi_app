const productos = [
        {id: 1, categoria: "camara", nombre: "Camara", foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nikonamericalatina.com%2Fnikon-products%2Fdslr-cameras%2Findex.page&psig=AOvVaw2kd5S40rC1Qar_ERjyAR58&ust=1632364642275000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCOD9mKfGkfMCFQAAAAAdAAAAABAD"},
        {id: 2, categoria: "laptop", nombre: "Laptop",  foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnetpc.uy%2Ftienda%2Fnotebook-asus-zenbook-pro-duo-15-6-4k-i9-1tb-32gb-rtx2060-bajo-pedido%2F&psig=AOvVaw14PWlMkC5XSQDBU1dIcK8S&ust=1632364700670000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCOjH4MPGkfMCFQAAAAAdAAAAABAT"},
        {id: 3, categoria: "camara", nombre: "Camara", foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nikonamericalatina.com%2Fnikon-products%2Fdslr-cameras%2Findex.page&psig=AOvVaw2kd5S40rC1Qar_ERjyAR58&ust=1632364642275000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCOD9mKfGkfMCFQAAAAAdAAAAABAD"},
        {id: 4, categoria: "laptop", nombre: "Laptop",  foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnetpc.uy%2Ftienda%2Fnotebook-asus-zenbook-pro-duo-15-6-4k-i9-1tb-32gb-rtx2060-bajo-pedido%2F&psig=AOvVaw14PWlMkC5XSQDBU1dIcK8S&ust=1632364700670000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCOjH4MPGkfMCFQAAAAAdAAAAABAT"},
        {id: 5, categoria: "camara", nombre: "Camara", foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nikonamericalatina.com%2Fnikon-products%2Fdslr-cameras%2Findex.page&psig=AOvVaw2kd5S40rC1Qar_ERjyAR58&ust=1632364642275000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCOD9mKfGkfMCFQAAAAAdAAAAABAD"},
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
