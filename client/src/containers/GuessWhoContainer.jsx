import React from 'react';
import PictureContainer from './PictureContainer'
import people from '../models/people'

class GuessWhoContainer extends React.Component{
  
  render(){
    return(
      <div>
        <PictureContainer people={people}/>
      </div>
    )
  }
}

export default GuessWhoContainer;