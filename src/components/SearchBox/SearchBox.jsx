import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../redux/filterSlice.js';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const value1 = useSelector(state => state.filter.filters.name);

  return (
    <form className={styles.container}>
      <label htmlFor="value">Find contacts by name:</label>
      <input
        type="text"
        id="value"
        className={styles.value}
        placeholder="search"
        onChange={event => {
          dispatch(filter(event.target.value));
        }}
      />
    </form>
  );
};
