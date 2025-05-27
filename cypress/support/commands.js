// cypress/support/e2e.js
import './commands';

// Hooks globais podem ser adicionados aqui
beforeEach(() => {
  // Executado antes de cada teste
  cy.log('Configuração global antes de cada teste');
});

after(() => {
  // Executado após todos os testes
  cy.log('Finalização após todos os testes');
});