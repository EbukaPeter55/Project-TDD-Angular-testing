import { ContactsComponent } from "./contacts.component"
import { Contact } from "./shared/models";



describe ('ContactsComponent Tests', ()=> {
let contactsComponent: ContactsComponent = null;

beforeEach(()=>{
    contactsComponent = new ContactsComponent()
    });
//    Test whether an instance of ContactsComponent can be created properly
    it('should set instance correctly', ()=>{
        expect(contactsComponent).not.toBeNull(); //Assertion where I set whether the component is set correctly
    });
    // Test to make sure number of contacts array length is 0 
    it('should be no contacts if there is no data', () => {
        expect(contactsComponent.contacts.length).toBe(0);
    });
    // Test to ensure new contact can be added to the list 
    it('Should be able to add new contact to the list where there is data', () => {
        const newContact = {
            id: 1,
            name: 'Ebuka'
        }
        const contactsList: Array<Contact> = [newContact];
        contactsComponent.contacts = contactsList;
        
        expect(contactsComponent.contacts.length ).toBe(1);

    });
});


