import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import s from './Filter.module.css';
import { onChangeFilter } from '../../redux/myFilterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const changeFilter = e => {
    dispatch(onChangeFilter(e.currentTarget.value));
  };

  return (
    <div className={s.field}>
      <TextField
        label=" Find contacts by name"
        type="search"
        variant="filled"
        value={filter}
        onChange={changeFilter}
        sx={{ width: 400 }}
      />
    </div>
  );
};

export default Filter;
