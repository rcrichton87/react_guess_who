import React from 'react';
import ReactDOM from 'react-dom';
import GuessWhoContainer from './containers/GuessWhoContainer';

window.onload = function(){
  ReactDOM.render(
    <GuessWhoContainer/>,
    document.getElementById('app')
  );
}
