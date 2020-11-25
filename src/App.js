import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Contact from './Components/Contact';
import About from './Components/About';
import Resume from './Components/Resume';
import Ausbildung from './Components/Ausbildungs';
import Praktikum from './Components/Praktikums';
import ITKenntnisse from './Components/ITkenntnisse';
import Sprachen from './Components/Sprache';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ighfData: {},
      aaboudeData:{},
      
    };

    

  }

  getIghfData(){
    $.ajax({
      url:'https://api.jsonbin.io/b/5f7efefb302a837e9576e10c/4',
      dataType:'json',
      
      headers: {
        "secret-key":"$2b$10$c9FZxS9pZ7Yncn0dvWanZurpEICtjlvhzMQ22V0zzn4Ig3rwi1CNC"
    },
      cache: false,
      success: function(data){
        this.setState({ighfData: data});
      }.bind(this),

      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }
// Get Aaboude 
getAaboudeData(){
  $.ajax({
    url:'https://api.jsonbin.io/b/5f7f2a1c302a837e9576f464',
    dataType:'json',
    
    headers: {
      "secret-key":"$2b$10$c9FZxS9pZ7Yncn0dvWanZurpEICtjlvhzMQ22V0zzn4Ig3rwi1CNC"
  },
    cache: false,
    success: function(data){
      this.setState({aaboudeData: data});
    }.bind(this),

    error: function(xhr, status, err){
      console.log(err);
      alert(err);
    }
  });
}

  componentDidMount(){
    this.getAaboudeData();
    this.getIghfData();

   
  }

  render() {
    return (
      
      <div className="App" style={{backgroundColor:'#00BCD4'}}>
        <Header data={this.state.ighfData.Ighf}/>
        <Resume />
        <Ausbildung />
        <Praktikum></Praktikum>
<ITKenntnisse></ITKenntnisse>
<Sprachen></Sprachen>
       
        <Contact data={this.state.ighfData.Ighf}/>
        <About data={this.state.ighfData.Ighf}/>
      </div>
    );
  }

  componentUnmount(){
    this.props.unmountMe();

     }

}

export default App;
