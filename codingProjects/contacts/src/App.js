import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";

class App extends Component {
    state = {
        screen: "list", // "create"
        contacts: []
    };

    fetchAllUsers() {
        this.state.contacts = ContactsAPI.getAll().then(contacts => {
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
                {this.state.screen === "list" && (
                    <ListContacts
                        onNavigate={() => {
                            this.setState({ screen: "create" });
                        }}
                        onDeleteContact={this.removeContact}
                        contacts={this.state.contacts}
                    />
                )}
                {this.state.screen === "create" && <CreateContact />}
            </div>
        );
    }
}

export default App;
