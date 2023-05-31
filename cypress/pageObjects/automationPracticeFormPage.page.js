import BasePage from "./base.page";

class AutomationPracticeFormPage extends BasePage {

    //Method -> Select "selectorSubject" subject from "Subjects" menu
    static selectSubjectFromSubjectsMenu(selectorSubject) {
        return cy.get('.subjects-auto-complete__menu').contains(selectorSubject);
    }

    //Method -> Choose and upload file
    static choseAndUploadFile(selectorPath) {
        return cy.get('input[type=file]').selectFile(selectorPath);
    }

    //Method -> set "Gender" as "selectorGender"
    static radiobuttonGender(selectorGender) {
        return cy.get('#genterWrapper').contains(selectorGender);
    }

    //Method -> set "Hobby" as "selectorHobby
    static checkboxHobby(selectorHobby) {
        return cy.get('#hobbiesWrapper').contains(selectorHobby);
    }

    //Method -> set "State" as "selectorState"
    static selectState(selectorState) {
        return cy.get('.css-11unzgr').contains(selectorState);
    }

    //Method -> set "City" as "selectorCity"
    static selectCity(selectorCity) {
        return cy.get('.css-11unzgr').contains(selectorCity);
    }

    //Set "url" to "/automation-practice-form"
    static get url() {
        return "/automation-practice-form";
    }

    //Input field "First Name"
    static get inputFirstName() {
        return cy.get('#firstName');
    }

    //Input field "Last Name"
    static get inputLastName() {
        return cy.get('#lastName');
    }

    //Input field "Email"
    static get inputEmail() {
        return cy.get('#userEmail');
    }

    //Input field "Mobile"
    static get inputMobile() {
        return cy.get('#userNumber');
    }

    //Input field "Date of Birth"
    static get inputDateOfBirth() {
        return cy.get('#dateOfBirthInput');
    }

    //Date input year selector
    static get inputYear() {
        return cy.get('.react-datepicker__year-select');
    }

    //Date input month selector
    static get inputMonth() {
        return cy.get('.react-datepicker__month-select');
    }

    //Date input current month day selector
    static get inputDay() {
        return cy.get('.react-datepicker__day').not('.react-datepicker__day--outside-month');
    }

    //Input field "Subjects"
    static get inputSubjects() {
        return cy.get('.subjects-auto-complete__value-container');
    }

    //button "Choose File"
    static get buttonChooseFile() {
        return cy.get('#uploadPicture');
    }

    //Text area "Current address"
    static get textareaCurrentAdress() {
        return cy.get('#currentAddress');
    }

    //"State" selector
    static get selectorState() {
        return cy.get('#state').find('.css-1hwfws3');
    }

    //"City" selector
    static get selectorCity() {
        return cy.get('#city').find('.css-1hwfws3');
    }

    //button "Submit"
    static get buttonSubmit() {
        return cy.get('#submit');
    }

    //"Thanks for submitting the form" form, table body
    static get tableThanksForSubmitting() {
        return cy.get('.table.table-dark').find('tbody tr');
    }
}

export default AutomationPracticeFormPage;