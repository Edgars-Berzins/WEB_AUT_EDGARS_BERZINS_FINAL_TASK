describe('Appointments', () => {
  context("Scenario 1 - Make an Appointment", () => {
    beforeEach(() => {
      cy.visit("/automation-practice-form");

    });

    it("Scenario 1 - Make an Appointment", () => {
      cy.get('#firstName').type('John');
      cy.get('#lastName').type('Doe');
      cy.get('#userEmail').type('totally@legit.com');
      cy.get('#gender-radio-1').click({ force: true });
      cy.get('#userNumber').type('123456789');
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__year-select').select('1930');
      cy.get('.react-datepicker__month-select').select('1');
      cy.get('.react-datepicker__day').not('.react-datepicker__day--outside-month').contains('28').click();
      cy.get('.subjects-auto-complete__value-container').click().type('E');
      cy.get('.subjects-auto-complete__menu').contains('Economics').click();
      cy.get('#hobbies-checkbox-3').click({ force: true });

      cy.get('#uploadPicture').click();
      cy.get('input[type=file]').selectFile('files/photo.jpg')

      cy.get('#currentAddress').type('Totally legit address, 50-90, true street.');

      cy.get('#state').find('.css-1hwfws3').click({ force: true });
      cy.get('.css-11unzgr').find('#react-select-3-option-0').click({ force: true });

      cy.get('#city').find('.css-1hwfws3').click({ force: true });
      cy.get('.css-11unzgr').find('#react-select-4-option-0').click({ force: true });

      cy.get('#submit').click({ force: true });


      //valdiate

      cy.get('.table.table-dark').find('tbody tr').each(($row) => {
    const label = $row.find('td:nth-child(1)').text();
    const value = $row.find('td:nth-child(2)').text();
    switch (label) {
      case 'Student Name':
        expect(value).to.equal('John Doe');
        break;
      case 'Student Email':
        expect(value).to.equal('totally@legit.com');
        break;
      case 'Gender':
        expect(value).to.equal('Male');
        break;
      case 'Mobile':
        expect(value).to.equal('123456789');
        break;
      case 'Date of Birth':
        expect(value).to.equal('28 February,1930');
        break;
      case 'Subjects':
        expect(value).to.equal('Economics');
        break;
      case 'Hobbies':
        expect(value).to.equal('Music');
        break;
      case 'Picture':
        expect(value).to.equal('photo.jpg');
        break;
      case 'Address':
        expect(value).to.equal('Totally legit address, 50-90, true street.');
        break;
      case 'State and City':
        expect(value).to.equal('NCR Delhi');
        break;
      default:
        // Handle unexpected labels if needed
        break;
    }
  });
    });


  });
});