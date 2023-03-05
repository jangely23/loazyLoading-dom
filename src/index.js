import { registerImage } from "./lazy";

const btn_agregar = document.getElementById('btn-agregar');
const btn_eliminar = document.getElementById('btn-eliminar');
const urlApi = 'https://randomfox.ca/floof/';

const fecthData = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function generarImagen(urlApi){
    try {
        const responseApi = await fecthData(urlApi);

        const container = document.getElementById('images');

        const containterImg = document.createElement('div');
        containterImg.className = "p-4";

        const img = document.createElement('img');
        img.dataset.src = responseApi.image;
        img.className = "mx-auto";
        img.width = "320";

        containterImg.append(img);
        container.append(containterImg);

        registerImage(containterImg);

    } catch (error) {
        console.log(`Error en conexión: ${error}`);
    }
}

btn_agregar.addEventListener('click', () => {
    generarImagen(urlApi);
});

btn_eliminar.addEventListener('click', () => {
    const container = document.querySelector('#images>div.p-4');
    container.remove();
});