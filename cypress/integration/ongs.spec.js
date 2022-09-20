/// <reference types="cypress" />

describe('Ongs', () => {
    it('Devem poder realizar um Cadastro', () => {
        cy.visit('http://www.google.com.br');
        cy.get('.gLFyf').type('Dogs Queridos');
        // cy.get('.gLFyf').type('[enter]');
        cy.get('.gLFyf').type('{enter}');
    });

    it('Deve poder realizar um login no sistema', () =>{

    });

});   