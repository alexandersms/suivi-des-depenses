context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('Navigation sur la page', () => {
        cy.log('Visite de la page de notre application')
        cy.visit('http://localhost:3000/')
        cy.title().should('eq', 'Suivi')
    })
})