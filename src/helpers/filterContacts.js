const filterContacts = (contacts, filterValue) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase().trim()))
}

export default filterContacts;