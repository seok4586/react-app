import React, { Component } from 'react';
import TOC from "./components/TOC.js";
import Subject from "./components/Subject.js";
import Contents from "./components/Contents.js";
import './App.css';


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
