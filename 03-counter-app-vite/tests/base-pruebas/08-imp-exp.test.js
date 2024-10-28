import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";
import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('Prueba en 08-imp-exp', ()=>{
    test('getHeroeById debe de retonar un heroe por id', ()=>{
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    })

    test('getHeroeById debe de retonar undefined si el id no existe', ()=>{
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner debe de retonar un arreglo de heroes de Dc', ()=>{
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        expect(heroe).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
        console.log(heroe);
        /*expect(heroes).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
           
        ]);*/
      
    })

    test('getHeroesByOwner debe de retonar un arreglo de heroes de Marvel', ()=>{
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
        console.log(heroes);
        /*expect(heroes).toEqual([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ]);*/
      
    })




})