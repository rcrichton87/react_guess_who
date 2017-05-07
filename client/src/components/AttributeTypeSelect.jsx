import React from 'react';

class AttributeTypeSelect extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      value: 'gender'
    }
  }

  handleChange(event){
    this.setState({value: event.target.value});
    this.props.onSelect(event.target.value)
  }

  render(){
    return(
      <select value={this.state.value} onChange={this.handleChange.bind(this)}>
        <option value='gender'>Gender</option>
        <option value='force'>Force Sensitive</option>
        <option value='hair'>Hair</option>
        <option value='facialHair'>Facial Hair</option>
        <option value='skin'>Skin Colour</option>
      </select>
    )
  }
}

export default AttributeTypeSelect