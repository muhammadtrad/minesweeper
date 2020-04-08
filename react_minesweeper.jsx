import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';
import Board from './components/board';

document.addEventListener("DOMContentLoaded", () =>{
    const root = document.getElementById("root");
    ReactDOM.render(<Game/>, root);
});