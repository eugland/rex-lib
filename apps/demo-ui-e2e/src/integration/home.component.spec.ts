describe('demo-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=homecomponent--primary'));
  it('should render the component', () => {
    cy.get('rex-lib-home').should('exist');
  });
});