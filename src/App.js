import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){

    super() 

    this.state = {
      // text:"Hello World",
      condition:true,
    }

  }

  updateData(){ 

    this.setState({
      text: this.state.condition ? "Hello World" : "Hello Pakistan" ,
      condition : !this.state.condition
    })
  
  }
    

renderHeader(){
return  <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
}

renderBody(){
  return  <p className="App-intro">
 
            <h2>
              {this.state.text} 
            </h2>

            <p>Changing State in direct function using "bind" --> "this.something.bind(this)".</p> 
            <button onClick={this.updateData.bind(this)} >Click Me</button>

            <p>Changing State in arrow function --> "() => this.something()".</p> 
            <button onClick={() => {this.updateData()}} >Click Me</button>

          </p>
}

// renderFooter(){
//   return  <div>This is Footer</div>
// }


  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderBody()}
        {/* {this.renderFooter()} */}

      </div>
    );
  }
}

export default App; 