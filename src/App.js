import React, { Component } from "react";
import Header from "./components/Header";
import AddDate from "./components/AddDate";
import ListDates from "./components/ListDates";
import "./App.css";

class App extends Component {
  state = {
    dates: {}
  };

  componentDidMount() {
    // We use getItem to see wht wee have at storage
    // We should transform the string keeped at storage to json to show in react
   const datesLS =  localStorage.getItem('dates');
   if(datesLS){
     this.setState({
       dates:JSON.parse(datesLS)
     })
   }
  }

  componentDidUpdate() {
    // Local storage just keep and read strings so we must convert json to string with stringify
    // Set item to create and keep to storage
    localStorage.setItem(
      'dates',
      JSON.stringify(this.state.dates)
    )
    
  }

  createDate = data => {
    const dates = { ...this.state.dates };
    dates[`dates${Date.now()}`] = data;

    this.setState({
      dates
    });
  };

  removeDate = id => {
    // Read state
    const dates = { ...this.state.dates };
    delete dates[id];
    this.setState({ dates });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header title="Pet dates" />
          <div className="row">
            <div className="col-md-6">
              <AddDate createDate={this.createDate} />
            </div>

            <div className="col-md-6">
              <ListDates
                dates={this.state.dates}
                removeDate={this.removeDate}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
