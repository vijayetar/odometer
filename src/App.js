import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header text="COVID lockdown"/>
      <main>
        <Odometer/>
      </main>
      <Footer trademark="Prasangam"/>
    </div>
  );
}

function Header(props){
  return (
      <header className="header">
        <h1>
          Counting the {props.text}
        </h1>
      </header>
  )
}

function Footer(props){
  return (
    <footer>
      @{props.trademark}
    </footer>
  )
}

class Odometer extends React.Component{
  constructor(){
    super();
    this.state = {
      day:1,
    }
  }
  changeDays(change){
    let newDay = '';
    if (change === '1000'){
      newDay = this.state.day + 1000
    }
    else if (change ==='100') {
      newDay = this.state.day + 100
    }
    else if (change === '10'){
      newDay = this.state.day + 10
    }
    else if (change === '1'){
      newDay = this.state.day + 1
    }
    this.setState({
      day: newDay,
    })
  }
  render(){
    return (
      <>
      <nav>
      <button onClick={() => this.changeDays("1000")}>+1000</button>
      <button onClick={() => this.changeDays("100")}>+100</button>
      <button onClick={() => this.changeDays("10")}>+10</button>
      <button onClick={() => this.changeDays("1")}>+1</button>
      </nav>
      <h2>{this.state.day} days </h2>
      </>
    )
  }
}


export default App;
