import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DetailDong from './DetailDong'
import FirstBox from './FirstBox'
import Search from './Search'

const DongRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        <FirstBox imgSrc="https://placeimg.com/220/220/any" />
        <Search />
      </Route>
      <Switch>
        <Route exact path="/:id" children={<DetailDong />} />
      </Switch>
    </Router>
  )
}

export default DongRouter
