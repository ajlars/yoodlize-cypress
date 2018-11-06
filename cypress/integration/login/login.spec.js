describe('Login functionality', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://alpha.yoodlize.com/')
        cy.contains('span', 'Login').click()
    })
    it('modal should display correctly', () => {
        cy.contains('h4.modal-title > span', 'Login')
        cy.get('[href="/login/facebook"]').find('span').should('contain.text', 'Log in with Facebook')
        cy.get('[href="/login/google"]').find('span').should('contain.text', 'Log in with Google')
        cy.contains('strong > span', 'or')
        cy.get('[name="email"]').should('have.attr', 'placeholder', 'Email Address').should('have.attr', 'type', 'text')
        cy.get('[name="password"]').should('have.attr', 'placeholder', 'Password').should('have.attr', 'type', 'password')
        cy.contains('button', 'Login')
        cy.contains('a > span', 'Can’t Login?')
    })
    it('lets me sign in', () => {
        cy.get('[name="email"]').type('yoodlize.tester+auto@gmail.com')
        cy.get('[name="password"]').type('testpass')
        cy.contains('button', 'Login').click()
        cy.contains('span','Login').should('not.exist')
    })
})