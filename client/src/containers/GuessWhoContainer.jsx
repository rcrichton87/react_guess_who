import React from 'react';
import PictureContainer from './PictureContainer'
import people from '../models/people'
import GuessAttributeContainer from './GuessAttributeContainer'
import GuessPersonContainer from './GuessPersonContainer'

class GuessWhoContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      people: people,
      selectedPerson: null,
      correctAttributeGuess: null,
      correctPersonGuess: null
    } 
  }

  componentDidMount(){
    const randomIndex = Math.floor(Math.random() * this.state.people.length);
    this.setState({selectedPerson: this.state.people[randomIndex]});
  }

  submitAttributeForm(guessAttribute, guessAttributeType){
    console.log(guessAttribute, guessAttributeType)
    let correctGuess = null;
    if(this.state.selectedPerson[guessAttributeType] === guessAttribute){
      correctGuess = true;
    } else {
      correctGuess = false;
    }
    this.state.people.forEach( (person) => {
      if(person[guessAttributeType] !== guessAttribute && correctGuess){
        person.eliminated = true;
      } else if (person[guessAttributeType] === guessAttribute && !correctGuess){
        person.eliminated = true;
      }
    })
    this.setState({correctAttributeGuess: correctGuess});
  }

  submitPersonForm(guessPerson){
    let correctGuess = null;
    if(this.state.selectedPerson.name === guessPerson){
      correctGuess = true;
      this.state.people.forEach( (person) => {
        if(person.name !== guessPerson){
          person.eliminated = true;
        }
      })
    } else {
      this.state.people.forEach( (person) => {
        if(person.name === guessPerson){
          person.eliminated = true;
        }
      })
      correctGuess = false;
    }
    this.setState({correctPersonGuess: correctGuess});
  }
  
  render(){
    console.log(this.state.selectedPerson)
    return(
      <div>
        <PictureContainer people={this.state.people}/>
        <GuessAttributeContainer people={this.state.people} onFormSubmit={this.submitAttributeForm.bind(this)} correctGuess={this.state.correctAttributeGuess}/>
        <GuessPersonContainer people={this.state.people} onFormSubmit={this.submitPersonForm.bind(this)} correctGuess={this.state.correctPersonGuess}/>
      </div>
    )
  }
}

export default GuessWhoContainer;