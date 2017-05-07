import React from 'react';
import PersonSelect from '../components/PersonSelect'

class GuessPersonContainer extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      selectedPerson: "BB-8"
    }
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onFormSubmit(this.state.selectedPerson)
  }

  onPersonSelect(newPerson){
    this.setState({ selectedPerson: newPerson })
  }

  render(){
    let correctGuess = null;
    if(this.props.correctGuess === true){
      correctGuess = [<p className='green' key="yes">That's the person you're looking for</p>];
    } else if(this.props.correctGuess === false){
      correctGuess = [<p className='red' key="no">That's not the person you're looking for</p>];
    }

    return(
      <form className="selectors" onSubmit={this.handleSubmit.bind(this)}>
        <div className="selector-row">
          <p>It's </p>
          <PersonSelect people={this.props.people} onSelect={this.onPersonSelect.bind(this)}/>
        </div>
        <input className="submit-button" type="submit" value="Ask" />
        {correctGuess}
      </form>
    )
  }
}

export default GuessPersonContainer