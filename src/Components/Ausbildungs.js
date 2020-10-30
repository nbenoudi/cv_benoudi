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






class Ausbildung extends Component {
    

    constructor(props){
        super(props);
        this.state = {
          foo: 'bar',
          ausbildung: []
        };

    } ;


    getAusbildungsData(){
        $.ajax({
          url:'https://api.jsonbin.io/b/5f9698e5076e516c36fb8149',
          dataType:'json',
               
      headers: {
        "secret-key":"$2b$10$c9FZxS9pZ7Yncn0dvWanZurpEICtjlvhzMQ22V0zzn4Ig3rwi1CNC"
    },
        
          cache: false,
          success: function(data){
             
         //   const arr = [];
          //  Object.keys(data.Berufstaetigkeit).forEach(key => arr.push({name: key, value: data.Berufstaetigkeit[key]}))
            this.setState({ausbildung: data.Ausbildung});
          // alert(arr[1]);
          }.bind(this),
    
          error: function(xhr, status, err){
            console.log(err);
            alert(err);
          }
        });
      }

      componentDidMount(){
        this.getAusbildungsData();
      }
      render() {
        
        var ausbildungs = this.state.ausbildung.map(ausbi=>{
            return <section id="ausbildung"> <div key={ausbi} style={styleberufitem} >
            <h3>   {ausbi.Datum_Von} -- {ausbi.Datum_Bis}</h3>
            <p><em className="als" style={{padding:150}} >{ausbi.Was}</em></p>
            <p> <em className="in" style={{padding:150}} > {ausbi.In} </em></p>
            <p> <em className="description" style={{padding:150}} >  {ausbi.Description}  </em></p>
            </div> </section>
          });

        if(this.state.ausbildung){
    return(
      <section id="ausbildung">
    <div className="row education">
         <div className="three columns header-col">
            <h1><span style={title} >Ausbildung:</span></h1> 
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns" style={styleberufs} >
                 {ausbildungs}
               </div>
            </div>
         </div>
      </div>
      </section>
      )}
    
    
    
    
        else {alert("Ich bekomme keine Daten From Server ")}
      }



}






export default Ausbildung;
