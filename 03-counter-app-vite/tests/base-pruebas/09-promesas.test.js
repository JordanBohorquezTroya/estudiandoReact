import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Prueba en 09-promesas', ()=>{
    test('getHeroeByIdAsync debe de retonar un heroe', (done)=>{
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero =>{
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done()
            })
    
    })

    test('getHeroeByIdAsync debe de retonar un error si el heroe no existe', (done)=>{
        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error =>{
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done()
            })
    
    })
})