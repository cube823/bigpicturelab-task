import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },

  textField: {
    width: '88%',
    marginTop: 30,
    marginBottom: 30,
    padding: 0,
  },

  textStyle: {
    fontSize: '1.2rem',
  },

  button: {
    fontSize: '1.2rem',
    width: '11%',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: "1%",
    background: '#5F00F0',
    color: 'white',
    '&:hover': {
      backgroundColor: '#6F00FF',
      color: '#ffffff'
    }
  }
}));

const Search = props => {
  const classes = useStyles();

  return (
    <span className={classes.root}>
        <TextField 
          className={classes.textField}
          placeholder="동 검색"
          variant="outlined"
          InputProps={{className: classes.textStyle}}
        />
        <Button size="small" variant="outlined" className={classes.button}>검색</Button>
    </span>
  );
}

export default withStyles(useStyles)(Search);