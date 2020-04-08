import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';

document.addEventListner("DOMContentLoaded", () =>{
    const root = document.getElementById("root");
    ReactDOM.render(<Game/>, root);
}