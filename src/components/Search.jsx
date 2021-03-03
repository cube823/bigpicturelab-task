import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
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

const Search = (props) => {
  const classes = useStyles()
  const [text, setText] = useState('')

  const onClick = (e) => {
    e.preventDefault()
    console.log('찾기 기능 수행 예정')
  }

  return (
    <div className={classes.root}>
      <InputBase
        className={classes.inputBase}
        placeholder="동 검색"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button size="small" variant="outlined" className={classes.button} onClick={onClick}>
        검색
      </Button>
    </div>
  )
}

export default withStyles(useStyles)(Search)
