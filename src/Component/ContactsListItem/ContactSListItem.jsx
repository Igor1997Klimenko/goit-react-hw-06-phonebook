import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; 
import styles from './ContactListItem.module.css';
import { removeContacts } from '../../redux/toogleContacts';

const ContactListItem = ({ id, name, number }) => {
    
    const dispath = useDispatch();

    const handleContactDelete = id => {
        dispath(removeContacts(id));
    }
    return(
        <>
        <span className={styles.NumberContacts}>
            {name}: {number}
        </span>
            <button
                className={styles.ButtonsContact}
                type="button"
                onClick={() => handleContactDelete(id)}>
            Delete
        </button>
        </>
    );
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactListItem;