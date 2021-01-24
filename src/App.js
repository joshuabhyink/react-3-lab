import './App.css';
import Info from './Components/Info'
import Header from './Components/Header'
import data from './data'
import React, {Component} from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      people: data,
      index: 0
    }
  }
  increment(){
    let newIndex = this.state.index + 1
    if(newIndex > 24){
      newIndex = 0
    } 
    this.setState({index: newIndex})
  }
  decrement(){
    let newIndex = this.state.index - 1
    if(newIndex < 0){
      newIndex = 24
    }
    this.setState({index: newIndex})
  }
  render(){
    return(
      <div className='App'>
          <Header/>
        <div>
          <Info person={this.state.people[this.state.index]}/>
          <button className='button left' onClick={() => this.decrement()}>Previous Card</button>
          <button className='button right' onClick={() => this.increment()}>Next Card</button>
        </div>
      </div>
    )
  }
}
export default App;