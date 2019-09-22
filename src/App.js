import React, { Component } from 'react';
import './App.css';




class TOC extends Component {
	render() {	
  		return (
  			<nav>
				<ul>
				<li><a href="1.html">html</a></li>
				<li><a href="2.html">css</a></li>
				<li><a href="3.html">javascript</a></li>

				</ul>		
			</nav>
  		);
  	}
}

class Contents extends Component {
	render() {	
  		return (
  			<article>
				<h2>{this.props.title}</h2>
				{this.props.sub}
			</article>
  		);
  	}
}

class Subject extends Component {
	render () {
		return (
			<header>
				<h1>{this.props.title}</h1>
				{this.props.sub}	
			</header>
		);
	}
}

class App extends Component {
	render() {	
  		return (
  			<div className="App">
  				<Subject title="WEB" sub="world wide web!"></Subject>
  				<Subject title="React" sub="For UI"></Subject>
  				<TOC></TOC>
  				<Contents title="HTML" sub="HTML is HyperText Markup Language."></Contents>
  			</div>
  		);
  	}
}

export default App;
