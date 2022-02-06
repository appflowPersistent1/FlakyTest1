describe('Button', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('can be toggled', () => {
		cy.contains('Show').click();
		cy.contains('Content').should('be.visible');
	});
});
