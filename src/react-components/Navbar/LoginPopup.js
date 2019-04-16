import React from 'react';
import Popup from './Popup';
import Actions from '../../actions';

class LoginPopup extends React.Component {
  handleLogin = () => {
    Actions.login();
    this.props.hidePopup();
  };

  googleLogin = () => {
      Actions.googleLogin();
      this.props.hidePopup();
  };

  render() {
    return (
      <Popup {...this.props} style="login-popup">
        <img src="/public/img/login-logo.png"/>
        <h1>Login to Women's Product Hunt</h1>
        <p>Women's Product Hunt is a Community to understand, support, and celebrate female representation in the product community. Join us :)</p>
        <button className="facebook-btn" onClick={this.handleLogin}>Login with Facebook</button>
        <button className="google-btn" onClick={this.googleLogin}>Login with Google</button>
        <p>We'll never post to Facebook without your permission.</p>
      </Popup>
    );
  }
}

export default LoginPopup;
