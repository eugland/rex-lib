describe('demo-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=colourscomponent--primary'));
  it('should render the component', () => {
    cy.get('rex-lib-colours').should('exist');
  });
});