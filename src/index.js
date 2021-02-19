import React from 'react';

import ReactDOM from 'react-dom';

import Home from './home';

class App extends React.Component {
  render() {
    return (
      <div className='page'>
        <Home />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
