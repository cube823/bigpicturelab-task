import { Grid } from '@material-ui/core'
import DongCard from './DongCard'
import { useMemo, useState, useEffect } from 'react'
import AlertDialog from './AlertDialog'
import axios from 'axios'

const Content = () => {
  const [dongs, setDongs] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    axios
      .get('http://143.248.137.17:24000/communities')
      .then((response) => setDongs(response.data.communities))
      .catch((error) => setError(error))
  }, [])

  const getDongCard = (dongObj) => {
    return (
      <Grid item xs={12} sm={4} key={dongObj.id}>
        <DongCard {...dongObj} />
      </Grid>
    )
  }

  const errorDialog = () => {
    if (error) {
      return <AlertDialog error={error} />
    }
  }

  // isUser, 한글 순 정렬
  const sorting = (arr) => {
    arr.sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    })
    return arr.sort((a, b) => {
      return a.isUser > b.isUser ? -1 : a.isUser < b.isUser ? 1 : 0
    })
  }

  const dongs_refactoring = useMemo(() => sorting(dongs), [dongs])

  return (
    <Grid item container spacing={5}>
      {errorDialog()}
      {dongs_refactoring.map((dong) => getDongCard(dong))}
    </Grid>
  )
}

export default Content
