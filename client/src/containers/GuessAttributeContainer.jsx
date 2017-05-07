import React from 'react';
import AttributeTypeSelect from '../components/AttributeTypeSelect'
import AttributeSelect from '../components/AttributeSelect'

class GuessAttributeContainer extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      attributeType: 'gender',
      attribute: 'Droid'
    }
  }

  onAttributeTypeSelect(newAttributeType){
    this.setState({attributeType: newAttributeType, attribute: this.props.people[0][newAttributeType]});
  }

  onAttributeSelect(newAttribute){
    this.setState({attribute: newAttribute});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onFormSubmit(this.state.attribute, this.state.attributeType);
  }

  render(){
    let correctGuess = null;
    if(this.props.correctGuess === true){
      correctGuess = [<p className='green' key="yes">Yes</p>];
    } else if(this.props.correctGuess === false){
      correctGuess = [<p className='red' key="no">No</p>];
    }

    return(
      <form className="selectors" onSubmit={this.handleSubmit.bind(this)}>
        <div className="selector-row">
          <p>Is their</p>
          <AttributeTypeSelect people={this.props.people} onSelect={this.onAttributeTypeSelect.bind(this)}/>
          <AttributeSelect attributeType={this.state.attributeType} people={this.props.people} onSelect={this.onAttributeSelect.bind(this)}/>
          <p>?</p>
        </div>
        <input className="submit-button" type="submit" value="Ask" />
        {correctGuess}
      </form>
    )
  }
    
}

export default GuessAttributeContainer