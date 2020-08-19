import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Jobs from './jobs/jobs'
import Steps from './steps/steps'

export default props => (
    <Router>
    <div>
      <Switch>
        {/* Using the `component` prop */}
        <Route path="/jobs/:name" component={Jobs} />
        <Route path="/jobs/" component={Jobs} />

        {/* Using the `render` prop */}
        <Route path="/steps/:id" component={Steps}/>
      </Switch>
    </div>
  </Router>
)