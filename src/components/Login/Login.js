import React from 'react';
import  './Login.css';
import NumberFormat from 'react-number-format';
import Slide from '@material-ui/core/Slide';
import PasswordShowHide from '../PasswordShowHide/PasswordShowHide';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: '', step: 1, password: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => this.setState({value: e.target.value})
    
    handleSubmit = (e) => {
        this.setState({
            ...this.state,
            step: this.state.step + 1
        });
        e.preventDefault();
    }
    
    verifyAccess = () => {
        console.log("opa");
    }

    render(){
        return (
            this.state.step >= 2
            ? (
                <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                    <section>
                        <p className="login -title">
                            <span>Agora digite sua </span>
                            <span className="bold">senha</span>
                        </p>
                        <form>
                            <span className="content_input">
                                <PasswordShowHide />
                            </span>
                            <span className="content_button">
                                <button
                                    onClick={this.verifyAccess}
                                    className="button_login">Entrar</button>
                            </span>
                        </form>
                    </section>
                </Slide>
            )
            : (
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
                            <input
                                className={
                                    `${this.state.value.toString().trim().length !== 14 ? 'button_login disabled' : 'button_login' }`}
                                disabled={!this.state.value}
                                type="submit"
                                value="Continuar" />
                        </span>
                    </form>
                </section>
            )
        );   
    }
}


export default Login;