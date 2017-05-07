import React from 'react'

class PersonSelect extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      value: "BB-8"
    }
  }  

  handleChange(event){
    this.setState({value: event.target.value})
    this.props.onSelect(event.target.value)
    console.log(this.state.value)
  }

  render(){
    const remainingPeople = this.props.people.map( (person, index) => {
      return(
        <option value={person.name} key={index}>{person.name}</option>
      )
    })

    return(
      <select value={this.state.value} onChange={this.handleChange.bind(this)}>
        {remainingPeople}
      </select>
    )
  }
}

export default PersonSelect