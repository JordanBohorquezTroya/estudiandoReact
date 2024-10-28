import { usContext } from "../../src/base-pruebas/06-deses-obj";



describe('Prueba en 06-deses-obj', ()=>{
    test('usContext debe de retonar un objeto', ()=>{
        const context = {
            nombreClave: 'ABC123',
            anios: 12,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        const testContext = usContext({ clave: 'ABC123', nombre: 'El_Papi1502', edad: 12 });
        expect(context).toEqual(testContext);

    })
})