

import { AddToCartKeys } from "../../support/keys/add-to-cart-key";

let cart;

before(() => {
    cy.fixture('cart/add-to-cart.json').then((data) => {
        cart = data;
    });
});


export class CartPage {

    addToProduct() {
        cy.get(AddToCartKeys.addproduct).click();
        cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').click();
        cy.wait(1000);
        cy.get(AddToCartKeys.checkBtn).click();
        cy.wait(1000);

        cy.get(AddToCartKeys.addressBtn).click();
        cy.wait(1000);

        return this;
    }

    addNewAddress(){
        cy.get('#mat-input-3').type(cart.county);
        cy.get('#mat-input-4').type(cart.customer_name);
        cy.get('#mat-input-5').type(cart.party_phone);
        cy.get('#mat-input-6').type(cart.party_zip_code);
        cy.get('#address').type(cart.party_address);
        cy.get('#mat-input-8').type(cart.party_city);
        cy.get('#mat-input-9').type(cart.party_state);
        cy.get('#submitButton > .mat-button-wrapper').click();
    }
}
