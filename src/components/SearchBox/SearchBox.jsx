import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();

  const filters = useSelector(selectNameFilter);

  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  const id = useId();

  return (
    <div>
      <label htmlFor={id} className={css.search}>
        Find contacts by name
        <input
          type="text"
          id={id}
          value={filters}
          onChange={onChange}
          placeholder="Search by name"
        />
      </label>
    </div>
  );
}
