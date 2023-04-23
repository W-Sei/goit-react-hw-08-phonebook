import { DebounceInput } from 'react-debounce-input';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { StyledFilter, StyledInput } from './FilterContact.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = e => dispatch(setFilterValue(e.target.value));

  return (
    <StyledFilter>
      Find contacts by name
      <DebounceInput
        element={StyledInput}
        type="text"
        name="filter"
        value={filter}
        minLength={2}
        debounceTimeout={300}
        onChange={handleFilterChange}
      />
    </StyledFilter>
  );
};
