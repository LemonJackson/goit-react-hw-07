import { IoPersonSharp } from 'react-icons/io5';
import { FaSquarePhone } from 'react-icons/fa6';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import css from './Contact.module.css';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <p className={css.field}>
        <IoPersonSharp />
        {name}
      </p>
      <p className={css.field}>
        <FaSquarePhone />
        {number}
      </p>
      <button
        className={css.btn}
        type="button"
        name="delete"
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
}
