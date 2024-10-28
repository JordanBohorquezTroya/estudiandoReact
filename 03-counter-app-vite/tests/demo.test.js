describe('Pruebas en <app />', () => {
    test('esta pruena mo debe fallar', () => {
        const message = 'Hello World';
    
        const message2 = message.trim();
    
        expect(message).toBe(message2);
      
    });
});


