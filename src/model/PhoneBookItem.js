
class PhoneBookItem {

    constructor(name, number) {
        this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.number = number;

    }


    static fromJSON (json) {
        let phonebookItem = new PhoneBookItem();
        phonebookItem.id = json.id;
        phonebookItem.name = json.name;
        phonebookItem.number = json.number;

        return phonebookItem;
    }
}

export default PhoneBookItem;
