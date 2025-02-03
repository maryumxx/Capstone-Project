// describe('navigation tests', () => {
//   it('passes', () => {
//     cy.visit('/')

import { viewport } from "next-sanity/studio";

//   })

// })

// describe('About Us Page', () => {
//   beforeEach(() => {

//     cy.visit('/about', { failOnStatusCode: false });

//   });

//   it('Should load the About Us page', () => {

//   });
//   it('loads the page', () => {
//     cy.get('[data-id="about-heading"]').should('be.visible');
//   });

// });

describe("Home Page", () => {
  beforeEach(() => {
    cy.viewport("iphone-xr");
    cy.visit("/", { failOnStatusCode: false });
  });

  it("loads the featured-component", () => {
    cy.get('[data-id="featured-data"]').should("be.visible");
  });
});

describe("Cart", () => {
  beforeEach(() => {
    cy.viewport("iphone-xr");
    cy.visit("/products");
    
    // Add an item to the cart
    cy.get('[data-id="add-to-cart-button"]').first().scrollIntoView();
    
    // Go to the cart page
    cy.visit("/cart", { failOnStatusCode: false });
  });

  it("shows the added items", () => {
    cy.get('[data-id="cart-item"]').should("be.visible");
  });
});

