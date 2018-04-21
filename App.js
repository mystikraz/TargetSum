import React from 'react';
import Game from './src/component/Game';

export default class App extends React.Component {
  render() {
    return (
     <Game randomNumberCount={6}/>
    );
  }
}

