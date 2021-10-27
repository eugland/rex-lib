describe('one-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=steppercomponent--primary&args=stepperId;type;steps;'));
  it('should render the component', () => {
    cy.get('rex-stepper').should('exist');
  });
});