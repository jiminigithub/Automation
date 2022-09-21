/// <reference types="cypress" />

describe('Ongs', () => {
    it('Devem poder realizar um Cadastro', () => {
        cy.visit('https://www.google.com.br');
        cy.get('.gLFyf').type('QaTools');
        //y.get('.gLFyf').type('[enter]');
        cy.get('.gLFyf').type('{enter}');
        cy.get('.ExCKkf > svg > path').click();

        //Start Server with cy.server()
        cy.server();

        //create routing with cy.route()
        cy.route('GET', '**/search?').as('postOng');
        //Assign route to an alias
        cy.get('.zgAlFc > .z1asCe > svg').click();
        //Waiting with cy.wait
        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200); 
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
            
        })
    });

    it('Deve poder realizar um login no sistema', () =>{

    });

});   