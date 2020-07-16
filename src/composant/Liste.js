import React, { Component } from 'react'
import Contact from './Contact'
export default class Liste extends Component {
    state =  {
        contacts : [
            {
                id: 1,
                nom: "John Doe",
                email: "john@gmail.com",
                tel: "555-555-555",
                display: "block"
            },
            {
                id: 2,
                nom: "John Doe",
                email: "john@gmail.com",
                tel: "555-555-555",
                display: "block"
            },
            {
                id: 3,
                nom: "John Doe",
                email: "john@gmail.com",
                tel: "555-555-555",
                display: "block"
            }
        ]
    }
    
    supprime = (id) => {
        const nvContacts = this.state.contacts.map(contact =>
            {
                if(contact.id === id){
                     contact.display = "none"
                     return {...contact}
                    }else{
                        return {...contact}
                }
            }
        )
        this.setState({
            contacts : nvContacts
        })
    }

    render() {
        return (
            <div>
                {this.state.contacts.map(contact => 
                    <Contact key={contact.id}
                    nom={contact.nom}
                    email={contact.email}
                    tel={contact.tel}
                    supprimeClick={() => this.supprime(contact.id)}
                    display= {contact.display}
                    />
                )}
            </div>
        )
    }
}
