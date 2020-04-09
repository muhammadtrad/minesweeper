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

    updateGame(tile, flagged){
        if (flagged === true){
            tile.toggleFlag();
        }else{
            tile.explore();
        }
        this.setState({board: this.state.board});
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