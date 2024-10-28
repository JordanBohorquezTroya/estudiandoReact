
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Prueba en 07-deses-arr', ()=>{
    test('retornaArreglo debe un string y un numero', ()=>{

        const [ letra , number ] = retornaArreglo();
        expect(letra).toBe( 'ABC' );
        expect(number).toBe( 123 );

        expect ( typeof letra ).toBe( 'string' );
        expect ( typeof number ).toBe( 'number' );


        //RECIBE PARA VALIDAR CUALQUIER STRING
        expect(letra).toEqual( expect.any(String) );
        //ESTE ES PARA NUMEROS 
        expect(number).toEqual( expect.any(Number) );
        

    })
})