import React from 'react'

class Picture extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='guesswho'>
        <img className='guesswho-image' src={this.props.image} />
        <p className='unguessed-name'>{this.props.name}</p>
      </div>
    )
  }
}

export default Picture