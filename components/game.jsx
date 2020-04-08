import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component{
    constructor(props){
        super(props);
        const board = new Minesweeper.Board(9,10);
        this.state = { board: board};
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(){
        return;
    }


    render(){

        return(
            <div>
                <Board board={this.state.board, this.updateGame} /> 
            </div>
        );
    }
};

export default Game;