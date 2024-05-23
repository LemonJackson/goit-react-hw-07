import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  if (filteredContacts.length) {
    return (
      <ul className={css['contact-list']}>
        {filteredContacts.map(contactItem => (
          <Contact
            key={contactItem.id}
            name={contactItem.name}
            number={contactItem.number}
            id={contactItem.id}
          />
        ))}
      </ul>
    );
  }

  return null;
}
