describe('Shopping bag test', () => {
    
    beforeEach(() => {
        cy.visit('https://www.pomelofashion.com/th/en/');
        cy.get('button > span').contains('Shop').click();
        cy.get('a').contains('Work Dresses').click();
        cy.get('.product-list .product-item .product-hover-interactions__add-to-bag .option-items-wrapper .option-item.button')
            .eq(0)
            .click({force: true});
        cy.get('[data-cy="cart__view_bag"]').click();
    })

    it('Adjusting product quantity', () => {
        cy.get('.cart-item-info__quantity select').eq(0).select('2');
        cy.wait(4000);
        cy.get('.cart-item-info__quantity select').eq(0).should('have.value', '2');

        cy.get('.cart-remove').click();
    });

    it('Adjusting product size', () => {
        cy.get('.cart-item-info__size select').eq(0).select('L');
        cy.wait(4000);
        cy.get('.cart-item-info__size select option:selected').eq(0).should('have.text', 'L');

        cy.get('.cart-remove').click();
    });
});
