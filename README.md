OrangeHRM Website Automated Testing
📝 Project Description
This project automates the testing of the OrangeHRM Website, a platform providing Human Resource Management solutions. Using Cypress, the project ensures that the website meets high-quality standards in terms of functionality, usability, performance, and security.

📂 Project Structure
Documentation
Test Plan: Contains the scope, objectives, testing approach, and deliverables for the project. Refer to the file: Test Plan for OrangeHRM Website.
Test Scripts
pom.cy.js: Implements the Page Object Model (POM) structure for organizing reusable test methods.
orangeHRM.cy.js: Contains Cypress test scripts for specific OrangeHRM functionalities, including login, navigation, and UI validation.
🎯 Features Tested
Authentication Tests:
Valid login.
Invalid login (incorrect credentials).
Validation for empty fields.
Navigation:
Testing access to various modules like Dashboard, Admin, PIM, Leave, Recruitment, and more.
UI Validations:
Ensuring elements are visible and functional post-login.
Error Handling:
Verifying error messages for invalid user actions.
Performance Checks:
Testing responsiveness across devices and browsers.
🔧 Tools & Frameworks Used
Cypress: End-to-end automation testing framework.
Visual Studio Code: Code editor.
Google Docs: Documentation for test plans and reports.
Miro: Mind maps and workflow designs.
🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone <repository-url>
cd <repository-folder>
2. Install Dependencies
Ensure you have Node.js installed, then run:

bash
Copy
Edit
npm install
3. Run Tests
Headless Mode: Executes all tests without UI:
bash
Copy
Edit
npx cypress run
Interactive Mode: Launches Cypress Test Runner for debugging:
bash
Copy
Edit
npx cypress open
🗂 Deliverables
Test Plan: Comprehensive testing strategy.
Cypress Scripts: Automated test cases for OrangeHRM.
Reports: Execution logs, defect reports, and test summaries.
🧑‍💻 Roles and Responsibilities
Tester: Write, maintain, and execute Cypress scripts. Collaborate with the team on requirements and documentation.
Approvals:
Software Tester: Anik Baidya.
Project Managers: Pooja Yadav, Vaishnavi Lakhore.
Client: Masai.
📜 License
This project is licensed under the MIT License.
