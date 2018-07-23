import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class A extends Component {


    constructor(props){
        super(props);
        this.state = {};
        this.save = this.save.bind(this);
    }

    componentDidMount(){
    }

    save(e){
        e.preventDefault();
        this.props.store.dispatch({type:'LISTA', nome:{}});
    }

    render() {
        return (
            <div>

                <form onSubmit={this.save}>
                    <input id="nome" value={this.state.nome}
                           onChange={(e)=>this.setState({nome:e.target.value})} />
                    <button >salvar</button>
                </form>

            </div>
        );
    }
}

export default A;
