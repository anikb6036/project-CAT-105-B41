class LINK{
    clickLink(link){
        cy.contains(link).click();
    }
}
export default LINK;