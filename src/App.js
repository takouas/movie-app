import React, { Component } from 'react'
import Cardlist from './listemoves/card-list';


import './App.css';


export default class App extends Component {
  state = { isLoading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {

    return (
      <div>

        {this.state.isLoading ? <center><div className="loader"></div> </center> : < Cardlist />}

      </div>
    )
  }
}






