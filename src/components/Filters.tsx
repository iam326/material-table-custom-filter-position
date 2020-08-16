import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  filters: {
    marginBottom: theme.spacing(2),
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));

type Props = {
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Filters: React.FC<Props> = (props) => {
  const { inputValue, onChange } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.filters}>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField
            id="filter-coupon-name-text-field"
            label="クーポン名"
            value={inputValue}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={onChange}
          />
        </div>
      </form>
    </Paper>
  );
};

export default Filters;
