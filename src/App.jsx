import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import QuizPage from './QuizPage';
import Stats from './Stats';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={QuizPage} /> 
        {/* <Route path="/about" component={About} /> */}
        <Route path="/stats" component={Stats} />
      </Router>
    </div>
  );
}

export default App;
