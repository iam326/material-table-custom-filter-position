import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

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

const Filters: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.filters}>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField
            id="filter-coupon-name-text-field"
            label="クーポン名"
            defaultValue=""
          />
        </div>
      </form>
    </Paper>
  );
};

export default Filters;
