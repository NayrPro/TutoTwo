import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './composant/Header'
import Liste from './composant/Liste'
class App extends Component {
  render(){
    return (
      <div className="App">
        <Header /> 
        <div className="Container">
          <Liste/>
        </div>
      </div>
    );
  }
  
}

export default App;
