import AutomationPracticeFormPage from "../pageObjects/automationPracticeFormPage.page";

var name = 'John';
var surname = 'Doe';
var email = 'totally@legit.com';
var phoneNumber = '1234567890';
var year = '1930';
var month = '1';
var day = '28';
var firstLetter = 'e';
var subject = 'Economics';
var imagePath = 'files/photo.jpg';
var currentAddress = 'Totally legit address, 50-90, true street.';
var state = 'NCR'
var city = 'Delhi';
var gender = 'Male'
var hobby = 'Music';

var formatedDate = new Date(year, month, day).toLocaleString('default', { day: 'numeric', month: 'long' }) + ',' + year;
var fileName = imagePath.split('/').pop();


describe('Practice form', () => {
  context("Appointment", () => {
    beforeEach(() => {
      AutomationPracticeFormPage.visit();//Visit "Automation practice form"
    });

    it("Make an Appointment", () => {
      AutomationPracticeFormPage.inputFirstName.type(name);//Set first name to "name"
      AutomationPracticeFormPage.inputLastName.type(surname);//Set last name to "surname"
      AutomationPracticeFormPage.inputEmail.type(email);//Set email to "email"
      AutomationPracticeFormPage.radiobuttonGender(gender).click({ force: true });//Set gender to "gender"
      AutomationPracticeFormPage.inputMobile.type(phoneNumber);//Set moblie to "phoneNumber"
      AutomationPracticeFormPage.inputDateOfBirth.click();//Open the date widget
      AutomationPracticeFormPage.inputYear.select(year);//Set year to "year"
      AutomationPracticeFormPage.inputMonth.select(month);//Set month to "month"
      AutomationPracticeFormPage.inputDay.contains(day).click();//Set day to "day"
      AutomationPracticeFormPage.inputSubjects.click().type(firstLetter);//input the first letter of subject into "Subjects" field
      AutomationPracticeFormPage.selectSubjectFromSubjectsMenu(subject).click();//select "subject" from the dropdown menu
      AutomationPracticeFormPage.checkboxHobby(hobby).click({ force: true });//click checkbox "Music"
      AutomationPracticeFormPage.buttonChooseFile.click();//click button "Choose File"
      AutomationPracticeFormPage.choseAndUploadFile(imagePath);//select image from directory and upload it
      AutomationPracticeFormPage.textareaCurrentAdress.type(currentAddress);//select text area "Comment" and type "currentAddress" into it
      AutomationPracticeFormPage.selectorState.click({ force: true });//open the state selector dropdown menu
      AutomationPracticeFormPage.selectState(state).click({ force: true });//select "state" from the dropdown menu
      AutomationPracticeFormPage.selectorCity.click({ force: true });//open the city selector dropdown menu
      AutomationPracticeFormPage.selectCity(city).click({ force: true });//select "city" from the dropdown menu
      AutomationPracticeFormPage.buttonSubmit.click({ force: true });//click the "Submit" button

      //Get the "Thanks for submitting the form" table, iterate through each row to validate that each lable has correct value next to it
      AutomationPracticeFormPage.tableThanksForSubmitting.each(($row) => {
        const label = $row.find('td:nth-child(1)').text();
        const value = $row.find('td:nth-child(2)').text();
        switch (label) {
          case 'Student Name':
            expect(value).to.equal(name + ' ' + surname);
            break;
          case 'Student Email':
            expect(value).to.equal(email);
            break;
          case 'Gender':
            expect(value).to.equal(gender);
            break;
          case 'Mobile':
            expect(value).to.equal(phoneNumber);
            break;
          case 'Date of Birth':
            expect(value).to.equal(formatedDate);
            break;
          case 'Subjects':
            expect(value).to.equal(subject);
            break;
          case 'Hobbies':
            expect(value).to.equal(hobby);
            break;
          case 'Picture':
            expect(value).to.equal(fileName);
            break;
          case 'Address':
            expect(value).to.equal(currentAddress);
            break;
          case 'State and City':
            expect(value).to.equal(state + ' ' + city);
            break;
          default:
            break;
        }
      });
    });
  });
});