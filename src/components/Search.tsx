import React from 'react'
import Content from './Content'
import { makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import { Button, Grid } from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  inputBase: {
    width: '88%',
    marginTop: 30,
    marginBottom: 30,
    border: '2px solid lightgray',
    borderRadius: 4,
    padding: theme.spacing(1),
    fontSize: '1.2rem',
  },

  button: {
    fontSize: '1.2rem',
    width: '11%',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: '1%',
    background: '#5F00F0',
    color: 'white',
    '&:hover': {
      backgroundColor: '#6F00FF',
      color: '#ffffff',
    },
  },
}))

const Search = () => {
  const classes = useStyles()
  const [text, setText] = useState('')

  const onClick = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    console.log(text)
  }

  return (
    <div>
      <Grid className={classes.root}>
        <InputBase
          className={classes.inputBase}
          placeholder="동 검색"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          autoFocus
        />
        <Button size="small" variant="outlined" className={classes.button} onClick={onClick}>
          검색
        </Button>
      </Grid>
      <Content text={text} />
    </div>
  )
}

export default Search
