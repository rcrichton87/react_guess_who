import React from 'react';
import AttributeTypeSelect from '../components/AttributeTypeSelect'
import AttributeSelect from '../components/AttributeSelect'

class GuessAttributeContainer extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      attributeType: 'gender',
      attribute: 'Male'
    }
  }

  onAttributeTypeSelect(newAttributeType){
    this.setState({attributeType: newAttributeType, attribute: this.props.people[0][newAttributeType]})
  }

  onAttributeSelect(newAttribute){
    this.setState({attribute: newAttribute})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onFormSubmit(this.state.attribute, this.state.attributeType)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <AttributeTypeSelect people={this.props.people} onSelect={this.onAttributeTypeSelect.bind(this)}/>
        <AttributeSelect attributeType={this.state.attributeType} people={this.props.people} onSelect={this.onAttributeSelect.bind(this)}/>
        <input type="submit" value="Ask" />
      </form>
    )
  }
    
}

export default GuessAttributeContainer