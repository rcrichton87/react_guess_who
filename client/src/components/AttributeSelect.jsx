import React from 'react'

class AttributeSelect extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      attributeType: this.props.attributeType,
      value: this.props.people[0][this.props.attributeType]
    }
  }

  handleChange(event){
    this.setState({value: event.target.value});
    this.props.onSelect(event.target.value)
  }

  render(){
    const uniqueAttributes = [];
    this.props.people.forEach( (person) => {
      if(!uniqueAttributes.includes(person[this.props.attributeType]) ){
        uniqueAttributes.push(person[this.props.attributeType]);
      }
    })

    const options = uniqueAttributes.map( (attribute, index) => {
      return (
        <option value={attribute} key={index}>{attribute}</option>
      )
    })

    return(
      <select value={this.state.value} onChange={this.handleChange.bind(this)}>
        {options}
      </select>
    )
  }

}

export default AttributeSelect