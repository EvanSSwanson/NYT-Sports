describe('homepage spec', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=YxKU5MWgb0BMANwdrerB9AAGJcCfCtgI', {
      method: 'GET',
      fixture: '../fixtures/example.json',
    });
    cy.visit('localhost:3000')
  });

  it('has a title', () => {
    cy.get('.title').contains('NYT Sports')
  })

  it('has a GitHub link', () => {
    cy.get('.github').contains('GitHub')
  })

  it('has an API link', () => {
    cy.get('.source').contains('API Source')
  })

  it('should load 3 cards', () => {
    cy.get('.Card').should('have.length', 3)
  })

  it('should load card info', () => {
    cy.get('.Card').eq(0).contains('Tigers')
  })

  it('should adress faulty url paths', () => {
    cy.visit('localhost:3000/asdf')
    cy.get('.error-msg').contains('Oops!')
  })

  it('should load story on card click', () => {
    cy.get('.Card').eq(0).click()
    cy.get('.page-title').contains('Tigers')
  })

  it('should return home', () => {
    cy.get('.Card').eq(0).click()
    cy.get('.home-link').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should search titles', () => {
    cy.get('.name-field').type('Tiger')
    cy.get('.Card').should('have.length', 1)
  })

  it('should declare no articles found', () => {
    cy.get('.name-field').type('adsfsdf')
    cy.get('.Card').should('have.length', 0)
    cy.get('.no-articles-msg').contains('No articles found')
  })

})