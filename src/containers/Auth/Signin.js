import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Auth.scss';
import Input from '../../components/UI/Input/Input';
import {NavLink} from 'react-router-dom';
import {signin} from '../../store/actions/signin';
import Spinner from '../../components/UI/Spinner/Spinner';

class SignIn extends Component {
  state = {
    controls: {
      email: {
        type: 'input',
        config: {
          type: 'email',
          id: 'Signin__email',
          placeholder: 'E-mail',
          autoComplete: 'off',
        },
        classes: 'Auth__input',
        value: '',
        validation: {
          required: true,
          rule: new RegExp('^[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]+$'),
          isValid: false,
        },
      },
      password: {
        type: 'input',
        config: {
          type: 'password',
          id: 'Signin__password',
          placeholder: 'Password',
          autoComplete: 'off',
        },
        classes: 'Auth__input',
        value: '',
        validation: {
          required: true,
          isValid: false,
          minLength: 8,
        },
      },
    },
  };

  inputChangedHandler(event, key) {
    const val = event.target.value;
    let isValid = true;
    if (isValid && this.state.controls[key].validation.required) {
      isValid = val.length !== 0;
    }

    if (isValid && this.state.controls[key].validation.minLength) {
      isValid = val.length >= this.state.controls[key].validation.minLength;
    }

    if (isValid && this.state.controls[key].validation.rule) {
      isValid = this.state.controls[key].validation.rule.test(val);
    }

    this.setState((state) => {
      state.controls[key].value = val;
      state.controls[key].validation.isValid = isValid;
      return state;
    });
  }

  validationHandler() {
    for(let key in this.state.controls) {
      if(!this.state.controls[key].validation.isValid) {
        return false;
      }
    }
    return true;
  }

  render() {
    const input = Object.keys(this.state.controls).map((name) => (
      <Input
        id={name}
        changed={this.inputChangedHandler.bind(this)}
        key={name}
        {...this.state.controls[name]}
        valid={this.state.controls[name].validation.isValid}
      />
    ));
    return (
      <div className='Auth'>
        <h1 className='Auth__title'>Sign In</h1>
        {input}
        <button
          onClick={() =>
            this.props.onSignIn(
              this.state.controls.email.value,
              this.state.controls.password.value,
            )
          }
          className='btn btn--green'
        >
          Sign in
        </button>
        <p className='Auth__signup'>
          New User! Sign up <NavLink to='/sign-up'>here</NavLink>
        </p>
        {this.props.loading ? <Spinner /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    idToken: state.auth.idToken,
    refrestToken: state.auth.refrestToken,
    userId: state.auth.userId,
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (email, password) => dispatch(signin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
