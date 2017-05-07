import React from 'react';

class AttributeSelect extends React.Component{

  render(){

    return(
      <select>
        <option value='gender'>Gender</option>
        <option value='force'>Force Sensitive</option>
        <option value='hair'>Hair</option>
        <option value='facialHair'>Facial Hair</option>
        <option value='skin'>Skin Colour</option>
      </select>
    )
  }
}

export default AttributeSelect