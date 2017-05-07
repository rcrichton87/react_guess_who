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

  render(){
    return(
      <form>
        <AttributeTypeSelect people={this.props.people} onSelect={this.onAttributeTypeSelect.bind(this)}/>
        <AttributeSelect attributeType={this.state.attributeType} people={this.props.people} onSelect={this.onAttributeSelect.bind(this)}/>
      </form>
    )
  }
    
}

export default GuessAttributeContainer