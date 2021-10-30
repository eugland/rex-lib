describe('demo-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttonscomponent--primary'));
  it('should render the component', () => {
    cy.get('rex-lib-buttons').should('exist');
  });
});