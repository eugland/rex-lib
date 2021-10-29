describe('rex-stepper', () => {
  describe('no arguments', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-component--default-undefined'));
    it('should render the component, child elements empty', () => {
      cy.get('rex-stepper').should('exist');
      cy.get('ul.rex-stepper.flex-column.flex-sm-row.flex-nowrap.justify-content-md-center').should('exist');
      cy.get('ul.rex-stepper.d-flex').should('not.exist');
      cy.get('li.rex-stepper-step').should('not.exist');
    });
  });
  
  describe('single step with type:default', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-component--default'));
    it('should render the component', () => {
      cy.get('li.rex-stepper-step').should('have.length', 1);
    });
  });
  
  describe('single step with type:horizontal', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-component--default-horizontal'));
    it('should render the component', () => {
      cy.get('ul.rex-stepper.d-flex.horizontal').should('exist');
      cy.get('li.rex-stepper-step.horizontal').should('have.length', 1);
    });
  });
  
  describe('two steps with type:default', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-component--two-steps-default'));
    it('should render the component', () => {
      cy.get('ul.rex-stepper.d-flex').should('not.exist');
      cy.get('li.rex-stepper-step.first').should('have.length', 1);
      cy.get('li.rex-stepper-step.last').should('have.length', 1);
    });
  });
  
  describe('two steps with type:horizontal', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-component--two-steps-horizontal'));
    it('should render the component', () => {
      cy.get('ul.rex-stepper.d-flex.horizontal').should('exist');
      cy.get('li.rex-stepper-step.horizontal.first').should('have.length', 1);
      cy.get('li.rex-stepper-step.horizontal.last').should('have.length', 1);
    });
  });
  
  describe('four steps with type:default', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-component--four-steps-default'));
    it('should render the component', () => {
      cy.get('ul.rex-stepper.horizontal').should('not.exist');
      cy.get('li.rex-stepper-step.first').should('have.length', 1);
      cy.get('li.rex-stepper-step.last').should('have.length', 1);
    });
  });
  
  describe('four steps with type:horizontal, step2 should be current', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-component--four-steps-horizontal'));
    it('should render the component', () => {
      cy.get('ul.rex-stepper.d-flex.horizontal').should('exist');
      cy.get('li.rex-stepper-step.horizontal.first').should('have.length', 1);
      cy.get('li.rex-stepper-step.horizontal.last').should('have.length', 1);
      cy.get('li.rex-stepper-step.horizontal.middle').should('have.length', 2);
      cy.get('li.rex-stepper-step.horizontal.current').should('have.length', 1);
    });
  });
});