const el = require ('./batistaElements').ELEMENTS
class Page {
    cadastro(){
        cy.get(el.campoNome).type('Joe Pinetree')
        cy.get(el.campoSobrenome).type('Grandson')
        cy.get(el.campoEmail).type('email@email.com')
        cy.get(el.campoEndereco).type('Santos Dumont, Av')
        cy.get(el.campoUniversity).type('Fanor Devry')
        cy.get(el.campoProfissao).type('Professor')
        cy.get(el.campoGenero).type('Male')
        cy.get(el.campoIdade).type('41')
        cy.get(el.botaoCadastro).click()
        cy.get(el.botaoAlterar).click()
        cy.get(el.campoNome).clear().type('Joe')
        cy.get(el.campoSobrenome).clear().type('Pinetree')
        cy.get(el.botaoCadastro).click()
        cy.get(el.botaoVoltar).click()
    }
    cadastro2(){
        cy.get(el.campoNome).type('AAbraa')
        cy.get(el.campoSobrenome).type('Aalyster')
        cy.get(el.campoEmail).type('email@email.com')
        cy.get(el.campoEndereco).type('Santos Dumont, Av')
        cy.get(el.campoUniversity).type('Fanor Devry')
        cy.get(el.campoProfissao).type('Professor')
        cy.get(el.campoGenero).type('Male')
        cy.get(el.campoIdade).type('41')
        cy.get(el.botaoCadastro).click()
        cy.get(el.botaoVoltar).click()
    }
    cadastro3(){
        cy.get(el.campoNome).type('Aaabgaill')
        cy.get(el.campoSobrenome).type('Aalyster')
        cy.get(el.campoEmail).type('email@email.com')
        cy.get(el.campoEndereco).type('Santos Dumont, Av')
        cy.get(el.campoUniversity).type('Fanor Devry')
        cy.get(el.campoProfissao).type('Professora')
        cy.get(el.campoGenero).type('Female')
        cy.get(el.campoIdade).type('31')
        cy.get(el.botaoCadastro).click()
        cy.get(el.botaoVoltar).click()
    }
}
export default new Page();