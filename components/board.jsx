import React from 'react';

class Board extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        let content = <div></div>;
        content += <h1>Hello</h1>;
        // const output = this.props.board.map((elem, idx) =>{
        //     content.innerHTML += <div key={idx}>{elem}</div>;
        // });
        return(
            <div>
                {content}
                <h1>hello</h1>
            </div>
        );
    }

}

export default Board;