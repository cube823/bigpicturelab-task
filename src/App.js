import { Grid } from '@material-ui/core/'
import Content from './components/Content'
import FirstBox from './components/FirstBox'
import Search from './components/Search'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DetailDong from './components/DetailDong'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ErrorDetailDong from './components/ErrorDetailDong'

const App = () => {
  const [dongs, setDongs] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    axios
      .get('http://143.248.137.17:24000/communities')
      .then((response) => setDongs(response.data.communities))
      .catch((error) => setError(error))
  }, [])

  return (
    <Router>
      <div className="App">
        <Grid container direction="column">
          <Grid item container justify="center">
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <FirstBox imgSrc="https://placeimg.com/220/220/any" />
              <Search />
              <Switch>
                <Route exact path="/">
                  <Content dongs={dongs} error={error} />
                </Route>

                {dongs.map((dong) => (
                  <Route exact path={`/${dong.id}`} key={dong.id}>
                    <DetailDong id={dong.id} />
                  </Route>
                ))}

                <Route exact path="*">
                  <ErrorDetailDong message="400 bad request, {}" />
                </Route>
              </Switch>
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
      </div>
    </Router>
  )
}

export default App
