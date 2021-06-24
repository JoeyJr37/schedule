import React, { Component } from 'react';
import './App.css';
import Table from './components/Table'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      day: '',
      time: '',
    }
    this.calculateDate = this.calculateDate.bind(this);
    this.updateDay = this.updateDay.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  updateDay(val){
    this.setState({ day: val})
  }

  updateTime(){
    const date = new Date();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    if (minutes < 10){
      minutes = `0${minutes}`;
    }
    const time = `${hour}${minutes}`;
    // console.log(time);
    return parseInt(time, 10);
  }

  setTime(){
    const time = this.updateTime();
    this.setState({ time });
  }

  calculateDate(){
    const date = new Date();
    const day = date.getDay();

    if (day === 0){
      this.updateDay('Sunday');
    } else if (day === 1){
      this.updateDay('Monday');
    } else if (day === 2){
      this.updateDay('Tuesday');
    } else if (day === 3){
      this.updateDay('Wednesday');
    } else if (day === 4){
      this.updateDay('Thursday');
    } else if (day === 5){
      this.updateDay('Friday');
    } else if (day === 6){
      this.updateDay('Saturday');
    } else {
      console.log(`Error! Create case to handle day number: ${day}`);
    }
    
  }

  componentDidMount(){
    this.calculateDate();
    this.setTime();
  }

  render(){
    const { day } = this.state;
    let table;
    if (day === 'Friday'){
      table = (<h1>'Its the weekend!'</h1>)
    } else if (day === 'Saturday') {
      table = (<h2> 'Its the weekend!'</h2>)
    } else if (day === 'Sunday'){ 
      table = (<h2> 'Its the weekend!'</h2>)
    } else { 
      table = (<Table time={this.state.time}/>)
    }

    return (
      <div className='App'>
        <h1> Welcome back Joey </h1>
        <h2> Today is {this.state.day}</h2>
        <h3> Here is your schedule to consistently dwell with God today: </h3>
        <section className='schedule'>
          {table}
        </section>
      </div>
    )
  }
}


export default App;
