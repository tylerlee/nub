import Awesome from './awesome.jsx';
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Hi World</p>
        <Awesome />
      </div>
    )
  }
}

render(<App/>, document.getElementById('component'));
