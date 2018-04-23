import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";

class App extends Component {
    state = {
        contacts: []
    };

    /*
export const getAll = () =>
    fetch(`${api}/contacts`, { headers })
        .then(res => res.json())
        .then(data => data.contacts);
        */
    fetchAllUsers() {
        this.state.contacts = ContactsAPI.getAll().then(contacts => {
            console.log(contacts);
            this.setState({ contacts });
        });
    }

    componentDidMount() {
        this.fetchAllUsers();
    }

    removeContact = contact => {
        ContactsAPI.remove(contact);

        this.fetchAllUsers();
    };
    render() {
        return (
            <div>
                <ListContacts
                    onDeleteContact={this.removeContact}
                    contacts={this.state.contacts}
                />
            </div>
        );
    }
}

export default App;
