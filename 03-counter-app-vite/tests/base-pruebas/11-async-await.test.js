import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Prueba en 11-async-await', ()=>{

    test('getImagen debe de retonar una url', ()=>{
        const url = getImagen();
        console.log(url);
    })
})


