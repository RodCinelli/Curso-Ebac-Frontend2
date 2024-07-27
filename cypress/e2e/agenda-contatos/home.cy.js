describe('Testes da Agenda de Contatos', () => {
    const baseUrl = 'https://agenda-contatos-react.vercel.app/';

    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it('Deve adicionar um novo contato', () => {
        cy.get('[type="text"]').type('Teste Nome');
        cy.get('[type="email"]').type('teste@teste.com');
        cy.get('[type="tel"]').type('123456789');

        // Captura screenshot após preencher o formulário mas antes de adicionar o contato
        cy.screenshot('preencher-formulario'); // Screenshot tirada após preencher o formulário

        cy.get('.adicionar').click();

        cy.contains('Teste Nome').should('be.visible');
        cy.contains('teste@teste.com').should('be.visible');
        cy.contains('123456789').should('be.visible');

        // Captura screenshot após adicionar o contato
        cy.screenshot('adicionar-contato'); // Screenshot tirada logo após adicionar o contato
    });

    it('Deve editar um contato existente', () => {
        // Clique no botão editar do quinto contato
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click();
        cy.get('[type="text"]').clear().type('Nome Editado');
        cy.get('[type="email"]').clear().type('editado@teste.com');
        cy.get('[type="tel"]').clear().type('987654321');
        cy.get('.alterar').click(); // Clique no botão salvar a edição

        // Captura screenshot após clicar no botão de salvar a edição
        cy.screenshot('editar-contato'); // Screenshot tirada após salvar a edição do contato

        cy.contains('Nome Editado').should('be.visible');
        cy.contains('editado@teste.com').should('be.visible');
        cy.contains('987654321').should('be.visible');

        // Captura screenshot da tela atualizada após verificar as mudanças
        cy.screenshot('contato-editado'); // Screenshot tirada após verificar que as mudanças foram aplicadas
    });

    it('Deve remover um contato', () => {
        // Clique no botão deletar do quinto contato
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click();

        // Verifica que o contato foi removido
        cy.contains('Nome Editado').should('not.exist');
        cy.contains('editado@teste.com').should('not.exist');
        cy.contains('987654321').should('not.exist');

        // Captura screenshot da tela inicial após remover o contato
        cy.screenshot('remover-contato'); // Screenshot tirada após verificar que o contato foi removido
    });
});
