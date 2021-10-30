describe('demo-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=linkscomponent--primary'));
  it('should render the component', () => {
    cy.get('rex-lib-links').should('exist');
  });
});