class LOGIN {
    EnterUrl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title().should('eq', 'OrangeHRM');
    }
    Invalid (){
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('be.visible', 'Invalid credentials');
        //
    }
    emty(){
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('be.visible', 'Invalid credentials');
    }

    Valid(){
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.url().should('include','dashboard/index');
        cy.contains('Dashboard').should('be.visible','Dashboard');

        cy.title().should('eq', 'OrangeHRM');
        
    }
    Admin(){
        //Admin
        cy.contains('Admin').click();
        cy.url().should('include','admin/viewSystemUsers');

    }
    PIM(){
        //PIM
        cy.contains('PIM').click();
        cy.url().should('include','pim/viewEmployeeList');

    }    
    
    
    Leave(){
        //Leave
        cy.contains('Leave').click();
        cy.url().should('include','leave/viewLeaveList');

        
    }
    Time(){
        //Time
        cy.contains('Time').click();
        cy.url().should('include','time/viewEmployeeTimesheet');
        
    }

    Recruitment(){
        //Recruitment
        cy.contains('Recruitment').click();
        cy.url().should('include','recruitment/viewCandidates');

    
        //My Info
        cy.contains('My Info').click();
        cy.url().should('include','pim/viewPersonalDetails/empNumber/7');
        //Performance
        cy.contains('Performance').click();
        cy.url().should('include','performance/searchEvaluatePerformanceReview');
        //Directory
        cy.contains('Directory').click();
        cy.url().should('include','directory/viewDirectory');

        //Maintenance
        cy.contains('Maintenance').click();
        cy.url().should('include','maintenance/purgeEmployee');
        cy.get('[name="password"]').type('admin123');
        cy.contains(' Confirm ').click();

        //claim
        cy.contains('Claim').click();
        cy.url().should('include','claim/viewAssignClaim');

        //buzz
        cy.contains('Buzz').click();
        cy.url().should('include','buzz/viewBuzz');
    
    }

} 

export default LOGIN;