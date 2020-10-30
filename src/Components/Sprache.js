import  React,{Component } from 'react';
import $ from 'jquery';

// Styles 
const title ={
   
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 50,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  };
  const styleberufs ={
   
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 100,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "left",
    paddingLeft:100,
      fontSize: 15,
    fontWeight: "bold"
  };
 
class Sprachen extends Component {
    

    constructor(props){
        super(props);
        this.state = {
          foo: 'bar',
          results: {},
          
        };

    } ;


    getSprachenData(){
        $.ajax({
          url:'https://api.jsonbin.io/b/5f99459330aaa01ce619fa72/1',
          dataType:'json',
               
      headers: {
        "secret-key":"$2b$10$c9FZxS9pZ7Yncn0dvWanZurpEICtjlvhzMQ22V0zzn4Ig3rwi1CNC"
    },
        
          cache: false,
          success: function(data){
             
         //   const arr = [];
          //  Object.keys(data.Berufstaetigkeit).forEach(key => arr.push({name: key, value: data.Berufstaetigkeit[key]}))
            this.setState({results: data.Sprachen});
          

          }.bind(this),
    
          error: function(xhr, status, err){
            console.log(err);
            alert(err);
          }
        });
      }

      componentDidMount(){
        this.getSprachenData();

      }
    
      
    
      render() {
        return (
          <section id="sprachen">
          <div className="Sprachen">
          <h1><span style={title} > Sprachkenntnisse :</span></h1>
        <p style={styleberufs}>{
  JSON.stringify(this.state.results["Sprache"])
              }</p> 
          </div>
          <div className="Sprachen">
          <h1><span style={title} > Sonstiges :</span></h1>
        <p style={styleberufs}>{
  JSON.stringify(this.state.results["Sonstiges"])
              }</p> 
          </div>

          </section>
        );
      }
    }
    
       
      










export default Sprachen;
