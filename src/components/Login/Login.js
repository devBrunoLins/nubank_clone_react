import React from 'react';
import  './Login.css';
import NumberFormat from 'react-number-format';

class Login extends React.Component {
    render(){
        return (
            <section>
                <p className="login -title">
                    <span>Para acessar o app digite o seu </span>
                    <span className="bold">CPF</span>
                </p>
                <span className="content_input">
                    <NumberFormat format="### ### ### ##" className="login -input" />
                </span>
                <span className="content_button">
                    <button className="button_login">Continuar</button>
                </span>
            </section>
        );
    }
}


export default Login;