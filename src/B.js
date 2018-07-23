import React, {Component} from 'react';
import PubSub from 'pubsub-js';

export default class B extends Component {

    constructor(props) {
        super(props);
        this.state = {nome:[]};
    }

    getLista(){
        return ['diego', 'marina', 'leila', 'marco']
    }
    getListaD(){
        return ['diego', 'marina']
    }

    componentDidMount() {
        this.setState({nome:this.getListaD()})
        this.props.store.subscribe(()=>{
            this.setState({nome:this.getLista()})
        })
    }

    componentWillMount() {
        this.setState({nome:this.getLista()})
    }

    componentWillReceiveProps(){}

    gera(lista){
        return lista.map((i, key)=>{
            return(
                <li key={key}>nome: {i}</li>
            )
        })
    }


    render() {
        return (
            <div>

                <div>
                    {this.gera(this.state.nome)}
                </div>


            </div>
        );
    }
}

