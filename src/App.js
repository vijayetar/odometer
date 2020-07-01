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
function Section(props){
  return (
    <section>
      actual days are = {props.actual_num}
    </section>
  )
}
function Footer(props){
  return (
    <footer>
      @{props.trademark}
    </footer>
  )
}
function Padding(props){
  return (
    <h2>
      {props.counter} Days
    </h2>
  )
}
class Odometer extends React.Component{
  constructor(){
    super();
    this.state = {
      day:0,
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
  paddingDays(day){
    while (day>9999){
      // day = day-10000
      return String(day).slice(-4).padStart(day.length,'0')
    }
    return String(day).padStart(4,'0'); 
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
      <Padding counter={this.paddingDays(this.state.day)}/>
      <Section actual_num= {this.state.day}/>
      </>
    )
  }
}


export default App;
