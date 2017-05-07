import React from 'react';
import PictureContainer from './PictureContainer'
import people from '../models/people'
import GuessAttributeContainer from './GuessAttributeContainer'

class GuessWhoContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      people: people,
      selectedPerson: null,
      correctAttributeGuess: null
    } 
  }

  componentDidMount(){
    const randomIndex = Math.floor(Math.random() * this.state.people.length)
    this.setState({selectedPerson: this.state.people[randomIndex]})
  }

  submitAttributeForm(guessAttribute, guessAttributeType){
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
    this.setState({correctAttributeGuess: correctGuess})
  }
  
  render(){
    console.log(this.state.selectedPerson)
    return(
      <div>
        <PictureContainer people={people}/>
        <GuessAttributeContainer people={people} onFormSubmit={this.submitAttributeForm.bind(this)}/>
      </div>
    )
  }
}

export default GuessWhoContainer;