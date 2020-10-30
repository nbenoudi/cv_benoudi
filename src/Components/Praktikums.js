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
const styleberufitem={};






class Praktikum extends Component {
    

    constructor(props){
        super(props);
        this.state = {
          foo: 'bar',
          praktikum: []
        };

    } ;


    getPraktikumsData(){
        $.ajax({
          url:'https://api.jsonbin.io/b/5f96a9de076e516c36fb8b5e',
          dataType:'json',
               
      headers: {
        "secret-key":"$2b$10$c9FZxS9pZ7Yncn0dvWanZurpEICtjlvhzMQ22V0zzn4Ig3rwi1CNC"
    },
        
          cache: false,
          success: function(data){
             
         //   const arr = [];
          //  Object.keys(data.Berufstaetigkeit).forEach(key => arr.push({name: key, value: data.Berufstaetigkeit[key]}))
            this.setState({praktikum: data.Praktikum});
          // alert(arr[1]);
          }.bind(this),
    
          error: function(xhr, status, err){
            console.log(err);
            alert(err);
          }
        });
      }

      componentDidMount(){
        this.getPraktikumsData();
      }
      render() {
        
        var praktikums = this.state.praktikum.map(prakti=>{
            return <section id="praktikum"> <div key={prakti} style={styleberufitem} >
            <h3>   {prakti.Datum_Von} -- {prakti.Datum_Bis}</h3>
            <p><em className="als" style={{padding:150}} >{prakti.Als}</em></p>
            <p><em className="als" style={{padding:150}} >{prakti.Was}</em></p>
            <p> <em className="in" style={{padding:150}} > {prakti.In} </em></p>
            
            </div> </section>
          });

        if(this.state.praktikum){
    return(
      <section id="praktikum">
    <div className="row education">
         <div className="three columns header-col">
            <h1><span style={title} > IT-Training/-Praktika </span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns" style={styleberufs} >
                 {praktikums}
               </div>
            </div>
         </div>
      </div>
      </section>
      )}
    
    
    
    
        else {alert("Ich bekomme keine Daten From Server ")}
      }



}






export default Praktikum;
