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
      },
      delivery: {
        type: 'select',
        config: {},
        options: [
          {value: 'fastest', displayValue: 'Fastest'},
          {value: 'cheapest', displayValue: 'Cheapest'},
        ],
        classes: 'ContactDetails__input',
        value: '',
      },
    },
  };

  inputChangedHandler(event, key) {
    const val = event.target.value;
    this.setState((state) => {
      console.log(state.inputs[key].value);
      state.inputs[key].value = val;
      return state;
    });
  }

  render() {
    const input = Object.keys(this.state.inputs).map((name) => <Input id={name} changed={this.inputChangedHandler.bind(this)} key={name} {...this.state.inputs[name]} />);
    return (
      <div className='ContactDetails'>
        {input}
        <button
          onClick={this.props.cancel}
          className='ContactDetails__cancel btn btn--red'
        >
          Cancel
        </button>
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
      </div>
    );
  }
}

export default ContactDetails;
