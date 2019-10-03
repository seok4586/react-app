import React, { Component } from 'react';
import TOC from "./components/TOC.js";
import Subject from "./components/Subject.js";
import Contents from "./components/Contents.js";
import './App.css';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			subject:{title:"web", sub:"world wide web!!"},
			mode:"welcome",
			select_contented_id:2,
			welcome:{title:'welcome',desc:'Hello, react!!'},
			contents:[
				{id:1, title:'HTML', desc:'HTML is HyperText'},
				{id:2, title:'CSS', desc:'CSS is for design'},
				{id:3, title:'JavaScript', desc:'JavaScript is Hfor interactive'},
			]
		}
	}
	render() {	
		var _title,_desc = null;
		if(this.state.mode === 'welcome'){
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
		}else if(this.state.mode === 'read'){
			var i = 0;
			while(i < this.state.contents.length){
				var data = this.state.contents[i];
				if(data.id === this.state.select_contented_id){
					_title = data.title;
					_desc = data.desc;	
					break;
				}
				i = i + 1; 
			}
			
		}
  		 return ( 
  			<div className="App">
  				<Subject 
  					title={this.state.subject.title} 
  					sub={this.state.subject.sub}
  					onChangPage={function(){
  						this.setState({mode:'welcome'})
  					}.bind(this)}
  				>
  				</Subject>
  				<TOC onChangPage={function(id){
					this.setState({
						mode : 'read',
						select_contented_id : Number(id)
					});
  				}.bind(this)} data={this.state.contents}></TOC>
  				<Contents title={_title} sub={_desc}></Contents>
  			</div>
  		);
  	}
}

export default App;
