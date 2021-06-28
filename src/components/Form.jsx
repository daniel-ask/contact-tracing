import React, { Component } from 'react'

export default class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			streetNumber: '',
			streetAddress: '',
			suburb: ''
		}
	}

	submitForm(event){
		event.preventDefault();
		this.props.addLocation({
			date: new Date().toLocaleString(),
			...this.state
		})
	}

	changeInputField(event){
		console.log(this.state[event.target.name]);
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		const {streetNumber, streetAddress, suburb} = this.state;
		return (
			<div>
				<form onSubmit={(e) => this.submitForm(e)}>
					<label htmlFor="streetNumber">Street Number</label>
					<input type="text" name="streetNumber" id="streetNumber" value={streetNumber} onChange={(e) => this.changeInputField(e)}/>
					<label htmlFor="streetAddress">Street Address</label>
					<input type="text" name="streetAddress" id="streetAddress" value={streetAddress} onChange={(e) => this.changeInputField(e)} />
					<label htmlFor="suburb">Suburb</label>
					<input type="text" name="suburb" id="suburb" value={suburb} onChange={(e) => this.changeInputField(e)}/>
					<input type="submit" value="Add address" />
				</form>
			</div>
		)
	}
}
