import { Grid } from '@material-ui/core'
import DongCard from './DongCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Content = () => {
  const getDongCard = (dongObj) => {
    return (
      <Grid item xs={12} sm={4} key={dongObj.id}>
        <DongCard {...dongObj} />
      </Grid>
    )
  }

  const [dongs, setDongs] = useState([])

  useEffect(() => {
    axios
      .get('http://143.248.137.17:24000/communities')
      .then((response) => setDongs([response.data.communities]))
      .catch((error) => console.log('error가 발생했습니다:', error))
  }, [])

  // [[{}, {}, ...]] 구조를 [{}, {}, ...] 로 변경
  let temp = []
  dongs.map(function (dongObj) {
    dongObj.map((dong) => temp.push(dong))
  })

  // 한글 오름차순 정렬
  temp.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  })

  // isUser 우선 정렬
  temp.sort(function (a, b) {
    return a.isUser > b.isUser ? -1 : a.isUser < b.isUser ? 1 : 0
  })

  return (
    <Grid item container spacing={5}>
      {temp.map((dong) => getDongCard(dong))}
    </Grid>
  )
}

export default Content
