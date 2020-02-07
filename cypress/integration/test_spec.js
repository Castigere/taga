/* eslint-disable no-undef */
describe('Test test', () => {
    it('Test 1', () => {
        cy.visit('localhost:3000');
        cy.get('[id=root]')
            .should('contain', 'Edit');
        cy.screenshot();
    });
});
