describe('demo-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=typeaheadscomponent--primary'));
  it('should render the component', () => {
    cy.get('rex-lib-typeaheads').should('exist');
  });
});
