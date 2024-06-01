import { CartPage } from "../pages/cart.page-object";

const cartpage = new CartPage();

describe('add to cart', () => {

    before(() => {
        cy.login();
    })

    beforeEach(() => {
        cy.wait(1000);
    });

    // it('Login with your user, add 1 item to the basket, click on checkout, add a new address, fill in the address form, click on submit', () => {

    //     cartpage.addToProduct();
    //     cartpage.addNewAddress();
    // });

    it('Verify search button, search for apple, verify that 2 apple products show up and that banana product doesnot show up', () => {
        cy.visit('/');

        cy.get('.mat-search_icon-search').click();
        cy.wait(1000);
        cy.get('#searchQuery > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('apple');
    });
});