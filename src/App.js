import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

   constructor(props) {

       super(props);

       this.state = { username : ''};
   }

  handleKeyPress(target) {
      if(target.charCode === 13){
          this.search(this.state.username);
          this.setState({ username: '' });
      }
  }

  search(username) {
     axios.get(`https://apps.runescape.com/runemetrics/profile?user=${encodeURI(username)}&activities=0`)
         .then(res => {
             console.log(res.data);
         })
  }

  render() {
    return (
      <div className="App">
          <h1 className="logo">Cape It Up</h1>
          <input
              type="text"
              spellCheck="false"
              value={this.state.username}
              onChange={event => this.setState({username: event.target.value})}
              onKeyPress={this.handleKeyPress.bind(this)}/>
      </div>
    );
  }
}

export default App;
