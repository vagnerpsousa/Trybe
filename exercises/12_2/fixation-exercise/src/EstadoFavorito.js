import React, { Component } from 'react'


class EstadoFavorito extends Component {
	validateText = (value) => {
		let error = undefined;
		if (value.length > 120) error = "Texto muito grande!"
		return error;
	}
	render() {
		const { value, handleChange } = this.props
		return (
			<label>
			Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea
				name="estadoFavorito"
				value={value}
				onChange={handleChange}
			/>
			<span>{this.validateText(value)}</span>
		</label>
		)
	}
}

export default EstadoFavorito