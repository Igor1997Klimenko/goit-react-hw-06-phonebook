import { useSelector } from 'react-redux';
import ContactListItem from '../ContactsListItem/ContactSListItem';
import s from './ContactList.module.css';
import filterContacts from '../../helpers/filterContacts';

const ContactList = () => {
const contacts = useSelector((state) => state.contacts.items);
    const filterValue = useSelector((state) => state.contacts.filter);

    return(
        <ul className={s.ContactList}>
        {filterContacts(contacts, filterValue).map(({id, name, number}) => (
        <li key={id}>
            <ContactListItem
                id={id}
                name={name}
                number={number}
            />
        </li>          
    ))}
    </ul>
    )
}

export default ContactList;