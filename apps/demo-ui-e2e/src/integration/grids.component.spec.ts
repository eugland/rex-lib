describe('demo-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=gridscomponent--primary'));
  it('should render the component', () => {
    cy.get('rex-lib-grids').should('exist');
  });
});