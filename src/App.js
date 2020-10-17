import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthPage from './components/pages/AuthPage';
import EditNote from './components/pages/EditNote';
import Notes from './components/pages/Notes';
function App() {
  return (
    <div className="container my-5">

       <Switch>
         <Route exact path="/auth" component={AuthPage}/>
         <Route exact path="/notes" component={Notes}/>
         <Route exact path="/edit-note" component={EditNote}/>
          <Route exact path="/edit-note/:noteId" component={EditNote} />
          <Redirect to="auth"/>
       </Switch>

    </div>
  )
}

export default App
