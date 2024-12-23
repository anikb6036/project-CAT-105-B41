import LOGIN from "../../support/page object/orangeHRM.cy";
import LINK from "../../support/page object/link.cy";
import LOGOUT from "../../support/page object/logout.cy";


describe('', () => {


    const login1 = new LOGIN();
    const link1 = new LINK();
    const logout1 = new LOGOUT();


 

    it('', () => {
        login1.EnterUrl();
        login1.Invalid();
        login1.emty();
        login1.Valid();
        login1.Admin();
        login1.PIM();
        login1.Leave();
        login1.Time();
        login1.Recruitment();
        link1.clickLink('Admin');
        logout1.LogoutClick();



       
    });

    
    
});