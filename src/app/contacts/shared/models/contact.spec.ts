import ContactClass from './contact';

describe ('Contact class tests', ()=> {
    let contact: ContactClass = null;
    beforeEach(()=>{
        // Set the contact variable to a new instance of the Contact class
    contact = new ContactClass();
    it('should have a valid constructor', () => {
        expect(contact).not.toBeNull();
        });
    });
    // Tests for setting name using a constructor and testing the getter for name
    it('should set name correctly through constructor', () => {
        contact = new ContactClass('Liz');
        expect(contact.name).toEqual('Liz');
        });
    it('should get and set id correctly', () => {
        contact.id = 1;
        expect(contact.id).toEqual(1);
        });
    it('should get and set name correctly', () => {
        contact.name = 'Liz';
        expect(contact.name).toEqual('Liz');
        });
    it('Should get and set email correctly', ()=> {
        contact.email = 'peterdbrainy5@gmail.com';
        expect(contact.email).toEqual('peterdbrainy5@gmail.com');
    });
    it('Should get and set number correctly', ()=> {
        contact.number = '1';
        expect(contact.number).toEqual('1');
    });
    it('Should get and set country correctly', ()=> {
        contact.country = 'Nigeria';
        expect(contact.country).toEqual('Nigeria');
    });
    it('Should get and set favorite', ()=> {
        contact.favorite = true;
        expect(contact.favorite).toEqual(true);
    });
    afterEach(()=> {
        contact = null;
    });
});