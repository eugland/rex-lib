describe('demo-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=typographycomponent--primary'));
  it('should render the component', () => {
    cy.get('rex-lib-typography').should('exist');
  });
});