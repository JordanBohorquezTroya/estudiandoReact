import { getUser } from "../../src/base-pruebas/05-funciones"
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Prueba en 05-funciones', ()=>{
    test('getUser debe de retonar un objeto', ()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        const user = getUser();
        
        expect(testUser).toEqual(user);
    })

    test('getUsuarioActivo debe de retonar un objeto', ()=>{
        const name = 'Jordan';
        const user = {
            uid: 'ABC567',
            username: name
        }
        const testUser = getUsuarioActivo(name);

        expect(user).toEqual(testUser);
    })

})


