import React from 'react';
import BotaoStyle from './BotaoStyle';

class Botao extends React.Component {
    constructor(props){
        super(props);
        this.interval = null;
    }

    clicar = () => {
        if(this.props.pressionar){
        this.props.pressionar();
        }
        this.interval = setInterval(this.props.pressionar, 333);
    }

    desclicar = () => {
        clearInterval(this.interval);
    }

    render(){
        console.log(this.props);

        return(
            <button onMouseDown={this.clicar} onMouseDown={this.desclicar} onClick={this.props.clique} style={this.props.tamanho === "grande" ? BotaoStyle.botoesMaiores: BotaoStyle.botoesMenores}>{this.props.texto}</button>
        );
    }
}


export default Botao;