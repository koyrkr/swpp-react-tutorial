import React from 'react';
// import logo from './logo.svg';
import './App.css';

import TodoList from './containers/TodoList/TodoList'; // can omit .js
import TodoDetail from './components/TodoDetail/TodoDetail';
import NewTodo from './containers/TodoList/NewTodo/NewTodo';

import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <TodoList title={'My TODOs'}/>
    // </div>
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/todos' exact render={() => <TodoList title="My TODOs!"/>}></Route>
          <Route path='/todos/:id' exact component={TodoDetail} />
          <Route path='/new-todo' exact component={NewTodo} />
          <Redirect exact from='/' to='/todos' />
          <Route render={() => <h1> Not Found </h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
