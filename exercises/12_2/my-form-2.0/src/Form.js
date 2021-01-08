import React, { Component } from 'react'
import './form.css'
import states from './brazilianStates';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      hasEntered: false,
    };

    console.log('O construtor está sendo chamado pelo objeto:', this);
    this.changeName = this.changeName.bind(this);
  }

  changeName(event) {
    const input = event.target
    this.setState({
      name: input.value.toUpperCase(),
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  changeAddress = (event) => {
    const { value } = event.target;
    this.setState({
      address: value.replace(/[^\w\s]/gi, ''),
    });
  }

  handleCityName = (event) => {
    let { value } = event.target;

    if(value.match(/^\d/)) value = '';

    this.setState({
      city: value,
    });
  }

  alertRoleFillingOnce = () => {
    if(this.state.hasEntered) return;

    alert('Preencha com cuidado esta informação.');
    this.setState({ hasEntered: true });
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados pessoais</legend>
            <div>
              Nome:
              <input
                type="text"
                name="name"
                maxLength="40"
                required
                value={this.state.name}
                onChange={this.changeName}
              />
            </div>
            <div>
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                required
                value={this.state.cpf}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                required
                value={this.state.address}
                onChange={this.changeAddress}
              />
            </div>
            <div>
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                required
                value={this.state.city}
                onChange={this.handleChange}
                onBlur={this.handleCityName}
              />
            </div>
            <div>
              Estado:
              <select
                name="countryState"
                required
                value={this.state.countryState}
                onChange={this.handleChange}
              >
                {states.map((state) => <option key={state}>{state}</option>)}
              </select>
            </div>
            <div>
              Tipo de endereço:
              <input
                type="radio"
                name="addressType"
                value="Casa"
                checked={this.state.addressType === 'Casa'}
                onChange={this.handleChange}
              /> Casa
              <input
                type="radio"
                name="addressType"
                value="Apartamento"
                checked={this.state.addressType === 'Apartamento'}
                onChange={this.handleChange}
              /> Apartamento
            </div>
          </fieldset>
          <fieldset>
            <legend>Dados profissionais:</legend>
            <div>
              Resumo do currículo:
              <textarea
                name="resume"
                maxLength="1000"
                required
                value={this.state.resume}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Cargo:
              <textarea
                name="role"
                type="text"
                maxLength="40"
                required
                value={this.state.role}
                onChange={this.handleChange}
                onMouseEnter={this.alertRoleFillingOnce}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;