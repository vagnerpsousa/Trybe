import React from 'react';
import './App.css';
import FancyButtons from './FancyButtons';
import ColorFilter from './ColorFilter';
import colors from './data.js';

class App extends React.Component {

  render() {
    
    return (
      <div>
        <FancyButtons />
        <br/>
        <ColorFilter colors={colors}/>
      </div>
    )
  }

}
export default App;
