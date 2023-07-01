describe('SimplBooks.ee pakettide ja kasutajatoe info nähtavuse testid', () => {
  beforeEach(() => {
    cy.visit('https://www.simplbooks.ee/')
  })

  describe('SimplBooks.ee pakettide omaduste test', () => {
    beforeEach(() => {
      cy.visit('https://www.simplbooks.ee/hinnad')
    })

    it('Kontrollib pakettide omadused', () => {
      cy.get('.pricing_table_content')
        .each((pakett) => {
          cy.wrap(pakett)
            .contains('30 päeva tasuta')
            .should('be.visible')

          cy.wrap(pakett)
            .contains('Turvaline ühendus')
            .should('be.visible')

          cy.wrap(pakett)
            .contains('Tasuta klienditugi')
            .should('be.visible')

          cy.wrap(pakett)
            .contains('Tasuta uuendused')
            .should('be.visible')
        })
    })
  })

  describe('Kasutajatoe info test', () => {
    beforeEach(() => {
      cy.visit('https://www.simplbooks.ee/kontakt/')
    })

    it('Kontrollib kasutajatoe info nähtavust', () => {
      cy.get('.contact_info').should('contain', 'Kasutajatugi')

      cy.contains('support@simplbooks.ee')
        .should('be.visible')

      cy.contains('Tel:')
        .should('be.visible')

      cy.contains('tööpäeviti')
        .should('be.visible')
    })

   
  })
})