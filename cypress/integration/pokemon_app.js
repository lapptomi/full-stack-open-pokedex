/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon info page can be opened by clicking', function() {
    cy.visit('http://localhost:5000')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    cy.contains('charizard').click()
    cy.contains('solar power')
  })
})