import React from 'react';
import AttributeSelect from '../components/AttributeSelect'

class GuessAttributeContainer extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      attribute: 'gender' 
    }
  }

  render(){
    return(
      <div>
        <AttributeSelect people={this.props.people}/>
      </div>
    )
  }
    
}

export default GuessAttributeContainer