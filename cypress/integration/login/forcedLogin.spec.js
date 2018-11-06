describe('Forcing a login on requesting an item', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://alpha.yoodlize.com/')
        cy.get('[name="item-card-title"]').first().click()
        cy.contains('button', 'Request').click()
    })
    it('should display dialogue correctly', () => {
        cy.contains('h1', 'Log In')
        cy.contains('a', 'Log in with Facebook').should('have.attr', 'href').and('match', /\/login\/facebook\?refer=\/details\/\d*/)
        cy.contains('a', 'Log in with Google').should('have.attr', 'href').and('match', /\/login\/google\?refer=\/details\/\d*/)
        cy.contains('strong > span', 'or')
        cy.get('[name="email"]').should('have.attr', 'placeholder', 'Email Address').should('have.attr', 'type', 'text')
        cy.get('[name="password"]').should('have.attr', 'placeholder', 'Password').should('have.attr', 'type', 'password')
        cy.contains('button', 'Login')
        cy.contains('a > span', 'Can’t Login?')
    })
    it('should let users sign in', () => {
        cy.get('[name="email"]').type('yoodlize.tester+auto@gmail.com')
        cy.get('[name="password"]').type('testpass')
        cy.contains('button', 'Login').click()
        cy.contains('span', 'Login')
    })
    it('should do a thing', ()=>{

    })
})