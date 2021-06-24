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

    this.updateTime = this.updateTime.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.displayDay = this.displayDay.bind(this);
    this.previousDay = this.previousDay.bind(this);
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

  componentDidMount(){
    const date = new Date();
    this.setState({ day: date.getDay() })
    this.setTime();
  }

  displayDay(day){
    if (day === 0){
      return 'Sunday';
    } else if (day === 1){
      return 'Monday';
    } else if (day === 2){
      return 'Tuesday';
    } else if (day === 3){
      return 'Wednesday';
    } else if (day === 4){
      return 'Thursday';
    } else if (day === 5){
      return 'Friday';
    } else if (day === 6){
      return 'Saturday';
    } else {
      console.log(`Error! Create case to handle day number: ${day}`);
    }
  }

  handleClick(){
    const { day } = this.state;
    let newDay = day;

    if (day < 6){
      newDay += 1;
    } else {
      newDay = 0;
    }

    this.setState({ day: newDay });
    this.displayDay(newDay);
  }

  previousDay(){
    const { day } = this.state;
    let newDay = day;

    if (day === 0){
      newDay = 6;
    } else {
      newDay -= 1;
    }

    this.setState({ day: newDay });
    this.displayDay(newDay);
  }

  render(){
    const { day } = this.state;
    let table;

    if (day === 5){
      table = (<h1>'Its the weekend!'</h1>)
    } else if (day === 6) {
      table = (<h2> 'Its the weekend!'</h2>)
    } else if (day === 0){ 
      table = (<h2> 'Its the weekend!'</h2>)
    } else { 
      table = (<Table time={this.state.time}/>)
    }

    return (
      <div className='App'>
        <h1 className='welcome'> Welcome back Joey </h1>
        <section className='days'>
          <button onClick={this.previousDay}>{`<`}</button>
          <h2 className='day-string'> Today is <span className='day'>{this.displayDay(day)}</span></h2>
          <button onClick={this.handleClick}>{`>`}</button>
        </section>
        <h3 className='intro'> Here is your schedule to consistently dwell with God today: </h3>
        <section className='schedule'>
          {table}
        </section>
      </div>
    )
  }
}


export default App;
