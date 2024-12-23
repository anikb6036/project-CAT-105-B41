class LOGOUT{
    LogoutClick(){
        cy.get('[class="oxd-userdropdown-name"]').click();
        cy.contains('Logout').click();
    }
}
export default LOGOUT;