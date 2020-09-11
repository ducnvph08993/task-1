import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CourseJS from './components/CourseJS';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:coursename" component={CourseJS} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
