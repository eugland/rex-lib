describe('rex-stepper-step', () => {
  describe('no arguments', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-type-not-defined'));

    it('should not render anything on screen', () => {
      cy.get('a').should('not.exist');
      cy.get('.desc').should('not.exist');
    });
  });

  describe('type:default, state:default, valid, active', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-default-self-default-active'));

    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.valid.active').should('exist');
    });
  });

  describe('type:default, state:default, valid, inactive', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-default-self-default-inactive'));
    
    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.valid.inactive').should('exist');
    });
  });

  describe('type:default, state:next-step, valid, active', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-default-self-next-step-active'));

    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.next-step.valid.active').should('exist');
    });
  });

  describe('type:default, state:next-step, valid, inactive', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-default-self-next-step-inactive'));
    
    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.next-step.valid.inactive').should('exist');
    });
  });

  describe('type:default, state:complete, valid, active', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-default-self-complete-active'));

    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.complete.valid.active').should('exist');
    });
  });

  describe('type:default, state:complete, valid, inactive', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-default-self-complete-inactive'));
    
    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.complete.valid.inactive').should('exist');
    });
  });

  describe('type:default, state:next-step, invalid, active', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-default-self-invalid-active'));

    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.next-step.invalid.active').should('exist');
    });
  });

  describe('type:default, state:next-step, invalid, inactive', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-default-self-invalid-inactive'));
    
    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.next-step.invalid.inactive').should('exist');
    });
  });

  describe('type:default, state:complete, invalid, active', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-default-self-complete-invalid-active'));

    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.complete.invalid.active').should('exist');
    });
  });

  describe('type:default, state:complete, invalid, inactive', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-default-self-complete-invalid-inactive'));
    
    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.complete.invalid.inactive').should('exist');
    });
  });

  describe('type:horizontal, state:default, valid, active', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-horizontal-self-default-active'));

    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.valid.active').should('exist');
    });
  });

  describe('type:horizontal, state:default, valid, inactive', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-horizontal-self-default-inactive'));
    
    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.valid.inactive').should('exist');
    });
  });

  describe('type:horizontal, state:next-step, valid, active', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-horizontal-self-next-step-active'));

    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.horizontal.next-step.valid.active').should('exist');
    });
  });

  describe('type:horizontal, state:next-step, valid, inactive', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-horizontal-self-next-step-inactive'));
    
    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.horizontal.next-step.valid.inactive').should('exist');
    });
  });

  describe('type:horizontal, state:complete, valid, active', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-horizontal-self-complete-active'));

    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.horizontal.complete.valid.active').should('exist');
    });
  });

  describe('type:horizontal, state:complete, valid, inactive', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-horizontal-self-complete-inactive'));
    
    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.horizontal.complete.valid.inactive').should('exist');
    });
  });

  describe('type:horizontal, state:next-step, invalid, active', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-horizontal-self-invalid-active'));

    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.horizontal.next-step.invalid.active').should('exist');
    });
  });

  describe('type:horizontal, state:next-step, invalid, inactive', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-horizontal-self-invalid-inactive'));
    
    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.horizontal.next-step.invalid.inactive').should('exist');
    });
  });

  describe('type:horizontal, state:complete, invalid, active', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-horizontal-self-complete-invalid-active'));

    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.horizontal.complete.invalid.active').should('exist');
    });
  });

  describe('type:horizontal, state:complete, invalid, inactive', () => {
    beforeEach(() => cy.visit('/iframe.html?id=stepper-step-component--step-horizontal-self-complete-invalid-inactive'));
    
    it('should render the component', () => {
      cy.get('rex-stepper-step.rex-stepper-step.horizontal.complete.invalid.inactive').should('exist');
    });
  });
});