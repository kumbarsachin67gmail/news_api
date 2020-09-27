import React from 'react';
import {NewsContextProvider} from './NewsContext';
import News from './components/News';
import './App.css';
import Navbar from './components/Navbar'
import {Switch,Route} from 'react-router-dom';
import America from './components/America';
import Uk from './components/Uk';
function App() {
  return (
    <div className="App">
      <React.Fragment>
      <NewsContextProvider>
      <Navbar/>
          <Switch>
            <Route path='/' exact component={News} />
            <Route path='/america' exact component={America} />
            <Route path='/uk' exact component={Uk} />
          </Switch>
        
       
        
 
      </NewsContextProvider>
      </React.Fragment>
    </div>
  );
}

export default App;
