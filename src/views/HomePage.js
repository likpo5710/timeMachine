import React from 'react'

//Need to get the current year
var d = new Date()
var year = d.getFullYear()

var homePage = React.createClass({

	//initial state will be the current year displayed
	getInitialState: function() {
		return {
			date: year,
			position: 'pause'
		}
	},

	//pause the year
	pause: function() {
		this.setState({
			date: this.state.date
		})
		clearInterval(this.past)
		clearInterval(this.future)
	},

	//increase the year in increments by +1
	forward: function() {
		this.state.date += 1
		this.setState({
			date: this.state.date
		})
	},

	//increase year every .5 seconds
	increase: function() {
		this.future = setInterval(this.forward, 500)
	},

	//decrease the year by -1
	backward: function() {
		this.state.date -= 1
		this.setState({
			date: this.state.date
		})
	},

	//decrease year every .5 seconds
	decrease: function() {
		this.past = setInterval(this.backward, 500)
	},

	render: function() {
		return (

			<div className='HomePage'>
				<h2>Not A Time Machine</h2>
				<h1>{this.state.date}</h1>
				<div className="navBar">
						<div>
							<button className='past' onClick={this.decrease}>REWIND</button>
						</div>
						<div>
							<button className='stop' onClick={this.pause}>PAUSE</button>
						</div>
						<div>
							<button className='future' onClick={this.increase}>FAST FORWARD</button>
						</div>
				</div>
			</div>
		)
	}


})

export default homePage