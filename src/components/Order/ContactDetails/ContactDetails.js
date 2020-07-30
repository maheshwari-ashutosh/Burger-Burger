import React from 'react';
import './ContactDetails.scss';
import Input from '../../UI/Input/Input';

class ContactDetails extends React.Component {
  state = {
    inputs: {
      name: {
        type: 'input',
        config: {
          type: 'text',
          id: 'name',
          placeholder: 'Name',
          autoComplete: 'off',
        },
        classes: 'ContactDetails__input',
        value: '',
        validation: {
          required: true,
          minLength: 1,
          isValid: false,
        },
      },
      phone: {
        type: 'input',
        config: {
          type: 'number',
          id: 'phone',
          placeholder: 'Phone',
          autoComplete: 'off',
        },
        classes: 'ContactDetails__input',
        value: '',
        validation: {
          required: true,
          minLength: 10,
          isValid: false,
        },
      },
      email: {
        type: 'input',
        config: {
          type: 'email',
          id: 'email',
          placeholder: 'E-mail',
          autoComplete: 'off',
        },
        classes: 'ContactDetails__input',
        value: '',
        validation: {
          required: true,
          rule: new RegExp('^[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]+$'),
          isValid: false,
        },
      },
      address: {
        type: 'textarea',
        config: {
          type: 'text',
          id: 'address',
          placeholder: 'Address',
          autoComplete: 'off',
        },
        classes: 'ContactDetails__input',
        value: '',
        validation: {
          required: true,
          minLength: 1,
          isValid: false,
        },
      },
      delivery: {
        type: 'select',
        config: {},
        options: [
          {value: 'fastest', displayValue: 'Fastest'},
          {value: 'cheapest', displayValue: 'Cheapest'},
        ],
        classes: 'ContactDetails__input',
        value: 'fastest',
        validation: {
          isValid: true,
        },
      },
    },
    isReady: false,
  };

  inputChangedHandler(event, key) {
    const val = event.target.value;
    let isValid = true;
    if (isValid && this.state.inputs[key].validation.required) {
      isValid = val.length !== 0;
    }

    if (isValid && this.state.inputs[key].validation.minLength) {
      isValid = val.length >= this.state.inputs[key].validation.minLength;
    }

    if(isValid && this.state.inputs[key].validation.rule) {
      isValid = this.state.inputs[key].validation.rule.test(val);
    }

    this.setState((state) => {
      // console.log(state.inputs[key].value);
      state.inputs[key].value = val;
      state.inputs[key].validation.isValid = isValid;
      // console.log(state.inputs[key].validation.isValid);
      let isReady = true;
      for (let key in state.inputs) {
        if (!isReady) {
          break;
        }
        isReady = state.inputs[key].validation.isValid;
      }
      state.isReady = isReady;
      return state;
    });
  }

  render() {
    const input = Object.keys(this.state.inputs).map((name) => (
      <Input
        id={name}
        changed={this.inputChangedHandler.bind(this)}
        key={name}
        {...this.state.inputs[name]}
        valid={this.state.inputs[name].validation.isValid}
      />
    ));
    const confirmButton = this.state.isReady ? (
      <button
        onClick={() =>
          this.props.confirm(
            this.state.inputs.name.value,
            this.state.inputs.phone.value,
            this.state.inputs.email.value,
            this.state.inputs.address.value,
          )
        }
        className='ContactDetails__confirm btn btn--green'
      >
        Continue
      </button>
    ) : (
      <button
        disabled
        onClick={() =>
          this.props.confirm(
            this.state.inputs.name.value,
            this.state.inputs.phone.value,
            this.state.inputs.email.value,
            this.state.inputs.address.value,
          )
        }
        className='ContactDetails__confirm btn btn--green'
      >
        Continue
      </button>
    );
    return (
      <div className='ContactDetails'>
        {input}
        <button
          onClick={this.props.cancel}
          className='ContactDetails__cancel btn btn--red'
        >
          Cancel
        </button>
        {confirmButton}
      </div>
    );
  }
}

export default ContactDetails;
