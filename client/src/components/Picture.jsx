import React from 'react'

class Picture extends React.Component{

  render(){
    if(this.props.person.eliminated){
      return(
        <div className='guesswho'>
          <img className='guesswho-image' src='/images/eliminated.png' />
          <p className='eliminated-name'>{this.props.person.name}</p>
        </div>
      )
    } else {
      return(
        <div className='guesswho'>
          <img className='guesswho-image' src={this.props.person.image} />
          <p className='uneliminated-name'>{this.props.person.name}</p>
        </div>
      )
    }
  }
}

export default Picture