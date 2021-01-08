import React, { Component } from 'react'


class Idade extends Component {
	render() {
		const { value, handleChange} = this.props
		let error = undefined;
		if (value > 100) error = "Cê é veio ehm!"
		if (value < 0) error = "número inválido!"
		return (
			<label>
				Idade:
				<input
					type="number"
					name="idade"
					value={value}
					onChange={handleChange}
				/>
				<span>{error ? error : ''}</span>
			</label>
		)
	}
}

export default Idade;