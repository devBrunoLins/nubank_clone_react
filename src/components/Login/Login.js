import React from 'react';
import  './Login.css';
import NumberFormat from 'react-number-format';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => this.setState({value: e.target.value})
    
    

    handleSubmit = (e) => {
        e.preventDefault();
    }
    

    render(){
        return (
            <section>
                <p className="login -title">
                    <span>Para acessar o app digite o seu </span>
                    <span className="bold">CPF</span>
                </p>
                <form onSubmit={this.handleSubmit}>
                    <span className="content_input">
                        <NumberFormat onChange={this.handleChange} value={this.state.value} format="### ### ### ##" className="login -input" />
                    </span>
                    <span className="content_button">
                        <input disabled={!this.state.value} type="submit" value="Continuar" className={'button_login'} />
                    </span>
                </form>
                {/* <span className="content_input">
                    <NumberFormat format="### ### ### ##" className="login -input" />
                </span>
                <span className="content_button">
                    <button type="button" className="button_login">Continuar</button>
                </span> */}
            </section>
        );
    }
}


export default Login;