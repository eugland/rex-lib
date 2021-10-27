describe('one-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=stepperstepcomponent--primary&args=type;step;'));
  it('should render the component', () => {
    cy.get('rex-stepper-step').should('exist');
  });
});