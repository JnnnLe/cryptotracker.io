import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinName: '',
      quanity: '',
      formErrors: { coinName: '', quanity: '', priceBought: '' },
      coinNameValid: false,
      quanityValid: false,
      priceBoughtValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let coinNameValid = this.state.coinNameValid;
    let quanityValid = this.state.quanityValid;
    let priceBoughtValid = this.state.priceBoughtValid

    switch (fieldName) {
      case 'coinName':
        coinNameValid = value.match(/^\w+$/);
        fieldValidationErrors.coinName = coinNameValid ? '' : ' is invalid';
        break;
      case 'quanity':
        quanityValid = value > 0;
        fieldValidationErrors.quanity = quanityValid ? '' : ' is invalid';
        break;
      case 'priceBought':
        priceBoughtValid = value > 0;
        fieldValidationErrors.priceBought = priceBoughtValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      coinNameValid: coinNameValid,
      quanityValid: quanityValid,
      priceBoughtValid: priceBoughtValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.coinNameValid && this.state.quanityValid && this.state.priceBoughtValid});
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  render() {
    return (

    <div style= {{marginTop:50}}>
      <form className="form">
        <h2>Convert</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.coinName)}`}>
          <label htmlFor="coinName">Coin Name</label>
          <input type="coinName" required className="form-control" name="coinName"
            placeholder="Coin Name"
            value={this.state.coinName}
            onChange={this.handleUserInput} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.quanity)}`}>
          <label htmlFor="quanity">Quanity</label>
          <input type="quanity" className="form-control" name="quanity"
            placeholder="Quanity"
            value={this.state.quanity}
            onChange={this.handleUserInput} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.priceBought)}`}>
          <label htmlFor="priceBought">Price Bought</label>
          <input type="priceBought" className="form-control" name="priceBought"
            placeholder="Purchased Price"
            value={this.state.priceBought}
            onChange={this.handleUserInput} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Convert</button>
      </form>
    </div>
    )
  }
}

export default Form;