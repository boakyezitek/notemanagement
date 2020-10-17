import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/Features/Header';
import AuthPage from './components/pages/AuthPage';
import EditNote from './components/pages/EditNote';
import NotesPage from './components/pages/NotesPage';


function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container my-5">
        <Switch>
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/notes" component={NotesPage} />
          <Route exact path="/edit-note" component={EditNote} />
          <Route exact path="/edit-note/:noteId" component={EditNote} />
          <Redirect to="auth" />
        </Switch>

      </div>
    </React.Fragment>

  )
}

export default App
