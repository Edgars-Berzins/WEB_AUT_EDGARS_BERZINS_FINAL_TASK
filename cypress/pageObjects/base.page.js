class BasePage {

    static get url() {
        return "/";
    }

    static visit() {
        cy.visit(this.url);
    }

}

export default BasePage;