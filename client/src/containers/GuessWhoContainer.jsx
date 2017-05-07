import React from 'react';
import PictureContainer from './PictureContainer'
import people from '../models/people'
import GuessAttributeContainer from './GuessAttributeContainer'

class GuessWhoContainer extends React.Component{
  
  render(){
    return(
      <div>
        <PictureContainer people={people}/>
        <GuessAttributeContainer people={people}/>
      </div>
    )
  }
}

export default GuessWhoContainer;