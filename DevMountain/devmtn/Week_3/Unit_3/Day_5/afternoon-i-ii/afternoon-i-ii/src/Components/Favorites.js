import React, { Component } from 'react';


import Header from './Header/Header';
import Favorites from './Favorites/Favorites';
import Form from './Form/Form';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      peopleToDisplay: [],
      updateName: [],
    }
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange = (event) => {
    this.setState({
        nameInput: event.target.value
    })
  }

  handleNameChangeArrow = (event) => {
    this.setState({
        nameChange: event.target.value
    })
  }

render( {
  const people = this.state.peopleToDisplay.map((v) => {
    // <div key={v.id}>
    //   <p>Name: {v.make}</p>
    //   <p>From: {v.from}</p>
    //   <p>Job Title: {v.jobtitle}</p>
    //   <p>Employer: {v.employer}</p>
    //   <p>Favorite Movies</p>
    
    //   <button
    //     className="btn btn-sp"
    //     onClick={() => this.updateName('up', v.id)}
    //     >
    //       Change Name
    //   </button>
    
    //   <button
    //     className="btn btn-sp"
    //     onClick={() => this.updateName('down', v.id)}
    //     >
    //       Previous Name            
    //   </button>
    
    return (
      </div>
    )
  })
}