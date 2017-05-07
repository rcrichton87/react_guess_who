import React from 'react';
import PictureContainer from './PictureContainer'
import people from '../models/people'
import GuessAttributeContainer from './GuessAttributeContainer'

class GuessWhoContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      people: people,
      selectedPerson: null
    } 
  }

  componentDidMount(){
    const randomIndex = Math.floor(Math.random() * this.state.people.length)
    this.setState({selectedPerson: this.state.people[randomIndex]})
  }
  
  render(){
    console.log(this.state.selectedPerson)
    return(
      <div>
        <PictureContainer people={people}/>
        <GuessAttributeContainer people={people}/>
      </div>
    )
  }
}

export default GuessWhoContainer;