import React, { Component } from "react";
import './PasswordShowHide.css';
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline';
import EyeOutline from 'mdi-material-ui/EyeOutline';

class PasswordShowHide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: ""
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handlePasswordChange = (e) => this.setState({ password: e.target.value });
  

  toggleShow = () => this.setState({ hidden: !this.state.hidden });
  

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  render() {
    return (
      <div className="password_show-hide">
        <input
            className="login -input"
            type={this.state.hidden ? "password" : "text"}
            value={this.state.password}
            onChange={this.handlePasswordChange}
        />
        {this.state.hidden ?
            <EyeOffOutline
                className="icon-color t-9 relative"
                onClick={this.toggleShow}/> :
                <EyeOutline
                    className="icon-color t-9 relative"
                    onClick={this.toggleShow}/>}
      </div>
    );
  }
}

export default PasswordShowHide;