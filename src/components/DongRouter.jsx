import React from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'
import Content from './Content'
import DetailDong from './DetailDong'

const Child = () => {
  let { id } = useParams()
  return (
    <div>
      <DetailDong id={id} />
    </div>
  )
}

const DongRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Content />
        </Route>
        <Switch>
          <Route exact path="/:id" children={<Child />}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default DongRouter
