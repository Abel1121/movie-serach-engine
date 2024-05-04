describe('homepage pl', () => {
  beforeEach('Go to home page', () => {
    cy.intercept('GET', '**').as('allRequests');
    cy.visit('/');
    cy.wait('@allRequests');
  });

  it('Should have polish description as default', () => {
    cy.get('.header-title').should('contain', 'Wyszukiwarka OMDb');
    cy.get('.header > app-button > .button').should('contain', 'Angielski');
    cy.get('.form-title').should(
      'contain',
      'Najnowsze filmy i produkcje - Wyszukaj swoje ulubione filmy'
    );
    cy.get('#title').should(
      'have.attr',
      'placeholder',
      'Napisz tutaj czego poszukujesz'
    );
    cy.get('#year').should('have.attr', 'placeholder', 'Rok');
    cy.get('app-button.pink > .button').should('contain', 'Wyszukaj');
    cy.get('.selector-search > option').should(($lis) => {
      expect($lis.eq(1)).to.contain('Odcinek');
      expect($lis.eq(2)).to.contain('Film');
      expect($lis.eq(3)).to.contain('Sezon');
    });
  });

  it('Should have english description after click in button', () => {
    cy.get('.header > app-button > .button').click();
    cy.get('.header-title').should('contain', 'OMDb search engine');
    cy.get('.header > app-button > .button').should('contain', 'Polish');
    cy.get('.form-title').should(
      'contain',
      'Latest Movies and Productions - Search for Your Favorite Films'
    );
    cy.get('#title').should(
      'have.attr',
      'placeholder',
      'Write here what you need'
    );
    cy.get('#year').should('have.attr', 'placeholder', 'Year');
    cy.get('app-button.pink > .button').should('contain', 'Search');
    cy.get('.selector-search > option').should(($lis) => {
      expect($lis.eq(1)).to.contain('Episode');
      expect($lis.eq(2)).to.contain('Movie');
      expect($lis.eq(3)).to.contain('Series');
    });
  });

  it('search filters should be default close', () => {
    cy.get('.movie-settings').should('have.class', 'close');
  });

  it('search filters should be open after click in icon', () => {
    cy.get('.form-icon').click();
    cy.get('.movie-settings').should('have.class', 'open');
  });

  it('button should be disabled', () => {
    cy.get('#title').should('contain', '');
    cy.get('app-button.pink > .button').should('have.attr', 'disabled');
  });

  it('selector search should have 4 options', () => {
    cy.get('.selector-search > option').should(($lis) => {
      expect($lis, '4 items').to.have.length(4);
      expect($lis.eq(0)).to.contain('');
      expect($lis.eq(1)).to.contain('Odcinek');
      expect($lis.eq(2)).to.contain('Film');
      expect($lis.eq(3)).to.contain('Sezon');
    });
  });

  it('button shouldnt be disabled', () => {
    cy.get('#title').type('Batman');
    cy.get('app-button.pink > .button').should('not.have.attr', 'disabled');
  });

  it('button should redirect', () => {
    const searchTitle = 'Batman';
    cy.get('#title').type(searchTitle);
    cy.get('app-button.pink > .button').should('not.have.attr', 'disabled');
    cy.get('app-button.pink > .button').click();
    cy.url().should('contain', `?title=${searchTitle}&page=1`);
  });
});
