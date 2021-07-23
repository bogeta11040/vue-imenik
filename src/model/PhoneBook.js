import PhoneBookItem from "./PhoneBookItem";

class PhoneBook {

    constructor() {
        this.items = this.loadFromLocalStorage();
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();
    }

    delete(item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('pb-data', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem('pb-data');

        if (json === null)
            return [];

        let jsonParsed = JSON.parse(json, (key, value) => {
            return value;
        });

        if (jsonParsed.length === 0)
            return [];

        let phonebookItems = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            phonebookItems.push(PhoneBookItem.fromJSON(jsonParsed[i]));
        }

        return phonebookItems;

    }

}


export default PhoneBook;
