describe("Default button", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("can be toggled", () => {
    // cy.contains('Before').click().should('contain.text', 'After');
    // let count = 0;
    // const click = ($el) => {
    //   count += 1;
    //   return $el.click();
    // };
    // cy.contains('Before')
    //   .pipe(click)
    //   .should(($el) => {
    //     expect($el).to.contain('After');
    //   })
    //   .then(() => {
    //     cy.log(`clicked ${count} times`);
    //   });

    cy.contains("Show").click();
    cy.contains("Content").should("be.visible");
  });
});
