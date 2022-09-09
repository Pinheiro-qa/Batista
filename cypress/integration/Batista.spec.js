///<reference types="cypress" />
import Page from "../support/Batista/batistaPage";

//import { describe, it } from mocha;

describe('Batista', () => {
    beforeEach(() => {
        cy.visit('http://automacaocombatista.herokuapp.com/users/new')
    })
        it('cadastro', () => {
    //    cy.visit('http://automacaocombatista.herokuapp.com/users/new')
        Page.cadastro();
    });
        it('cadastro2', () => {
        Page.cadastro2();
    });
        it('cadastro3', () => {
        Page.cadastro3();
    });
        it('scroll', () => {
        cy.get(':nth-child(6) > .collapsible-header').click()
        cy.get('.active > .collapsible-body > ul > :nth-child(3) > a').click()
        //cy.get('p')
        cy.scrollTo(0, 1000)
        //cy.scrollTo(1000, 500)
       //cy.scrollTo('top')
    });
    it('Lista de usuarios', () => {
        cy.get('.active > .collapsible-body > ul > :nth-child(2) > a').click()
    });

});