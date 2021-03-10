import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import AlertDialog from './AlertDialog'
import { useParams } from 'react-router-dom'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#75E0D0',
    color: '#6F00FF',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
})

interface ParamTypes {
  id: string
}

interface DongTypes {
  id: string
  name: string
  isUser: boolean
  chinese: string
  area: number
  household: number
  population: number
}

const DetailDong = () => {
  const { id } = useParams<ParamTypes>()
  const classes = useStyles()
  const [dong, setDong] = useState<DongTypes>()
  const [error, setError] = useState()

  useEffect(() => {
    axios
      .get(`http://143.248.137.17:24000/communities/${id}`)
      .then((response) => setDong(response.data.community))
      .catch((error) => setError(error))
  }, [id])

  return (
    <div>
      {error ? (
        <AlertDialog error={error} />
      ) : typeof dong !== 'undefined' ? (
        <TableContainer component={Paper} style={{ marginTop: '20%' }}>
          <Table className={classes.root}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">동 이름 </StyledTableCell>
                <StyledTableCell align="center"> 중국&nbsp;이름 </StyledTableCell>
                <StyledTableCell align="center">면적</StyledTableCell>
                <StyledTableCell align="center">가구&nbsp;수</StyledTableCell>
                <StyledTableCell align="center">인구</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={dong.name}>
                <TableCell component="th" scope="row" align="center">
                  {dong.name}
                </TableCell>
                <TableCell align="center">{dong.chinese}</TableCell>
                <TableCell align="center">{dong.area}</TableCell>
                <TableCell align="center">{dong.household}</TableCell>
                <TableCell align="center">{dong.population}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <AlertDialog />
      )}
    </div>
  )
}

export default DetailDong
