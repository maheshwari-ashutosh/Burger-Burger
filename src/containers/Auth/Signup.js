import React, {Component} from 'react';
import './Auth.scss';
import Input from '../../components/UI/Input/Input';

class Auth extends Component {
  state = {
    controls: {
      name: {
        type: 'input',
        config: {
          type: 'text',
          id: 'Auth__name',
          placeholder: 'Name',
          autoComplete: 'off',
        },
        classes: 'Auth__input',
        value: '',
        validation: {
          required: true,
          minLength: 1,
          isValid: false,
        },
      },
      email: {
        type: 'input',
        config: {
          type: 'email',
          id: 'Auth__email',
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
          id: 'Auth__password',
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
        <h1 className='Auth__title'>Sign Up!</h1>
        {input}
        <button className='btn btn--green'> Sign up</button>
      </div>
    );
  }
}

export default Auth;
