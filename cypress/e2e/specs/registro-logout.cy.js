import RegisterPage from '../../pages/RegistroPage';
import yaml from 'js-yaml';

describe('Registro e Logout', () => {
  let user;

  before(() => {
    cy.readFile('cypress/fixtures/user-data.yaml', 'utf8').then((fileContent) => {
      const data = yaml.load(fileContent);
      const uniqueUsername = `user${Date.now()}`;
      data.username = uniqueUsername;

      user = data;
      cy.task('updateYaml', { username: uniqueUsername });
    });
  });

  it('Registrar uma nova conta e fazer logout', () => {
    cy.then(() => {
      RegisterPage.visit();
      RegisterPage.fillRegistrationForm(user);
      RegisterPage.submit();

      cy.contains('Welcome').should('exist');
      cy.contains('Log Out').click();
      cy.url().should('include', '/index.htm');
    });
  });
});
