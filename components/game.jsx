import React from 'react';

class Game extends React.Component{
    constructor(props){
        this.state = { board: new Minesweeper.board};
        this.updateGame = updateGame.bind(this);
    }

    updateGame(){

    }


    render(){

        return(
            <div>
                <Board board={this.state.board, this.updateGame} /> 
            </div>
        );
    }
}

export default Game;