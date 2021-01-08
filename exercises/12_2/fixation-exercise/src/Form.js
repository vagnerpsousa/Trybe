import React, { Component } from 'react'
import './Form.css'
import FileInput from './FileInput.js'
import EstadoFavorito from './EstadoFavorito.js'
import Idade from './Idade.js'

class Form extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			estadoFavorito: '',
			idade: 0,
			vaiComparecer: false,
			frutaFavorita: ''
		};
	}


	handleChange({ target }) {
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value
		this.setState({
			[name]: value

		});
	}

	render() {
		return (
			<div>
				<h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
				<form className="form">
					<fieldset>
						<EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>
						<br></br>
						<Idade value={this.state.idade} handleChange={this.handleChange} />
					</fieldset>
					<fieldset>
						<label>
							Vai comparecer:
						<input
								type="checkbox"
								name="vaiComparecer"
								value={this.state.vaiComparecer}
								onChange={this.handleChange}
							/>
						</label>
						<label>
							Fruta Favorita:
					<select
								name="frutaFavorita"
								value={this.state.frutaFavorita}
								onChange={this.handleChange}
							>
								<option value="laranja">Laranja</option>
								<option value="limao">Limão</option>
								<option value="coco">Coco</option>
								<option value="manga">Manga</option>
							</select>
						</label>
					</fieldset>
					<fieldset>
						<label>
							Arquivo:
							<FileInput />
						</label>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default Form;