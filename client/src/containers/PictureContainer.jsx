import React from 'react';
import Picture from '../components/Picture'

class PictureContainer extends React.Component{
  
  constructor(props){
    super(props);
  }

  render(){
    const allPictures = this.props.people.map( (person, index) => {
      return( <Picture name={person.name} image={person.image} key={index}/> )
    })

    const row1 = allPictures.slice(0, 5);
    const row2 = allPictures.slice(5, 10);
    const row3 = allPictures.slice(10);


    return(
      <div className = 'picture-container'>
        <div className = 'row'>
          {row1}
        </div>

        <div className = 'row'>
          {row2}
        </div>

        <div className = 'row'>
         {row3}
        </div>
      </div>
    )
  }
}

export default PictureContainer