describe('Next.js Home Page Test', () => {
    it('should load the home page', () => {
      cy.visit('http://localhost:3000'); // Adjust the URL if needed
      cy.contains('Welcome'); // Replace with actual text from your home page
    });
  });