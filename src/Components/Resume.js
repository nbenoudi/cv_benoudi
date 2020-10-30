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






class Resume extends Component {
    

    constructor(props){
        super(props);
        this.state = {
          foo: 'bar',
          berufstaetigkeit: []
        };

    } ;


    getBerufstaetigkeitData(){
        $.ajax({
          url:'https://api.jsonbin.io/b/5f96951fbd69750f00c3b098/1',
          dataType:'json',
               
      headers: {
        "secret-key":"$2b$10$c9FZxS9pZ7Yncn0dvWanZurpEICtjlvhzMQ22V0zzn4Ig3rwi1CNC"
    },
        
          cache: false,
          success: function(data){
             
         //   const arr = [];
          //  Object.keys(data.Berufstaetigkeit).forEach(key => arr.push({name: key, value: data.Berufstaetigkeit[key]}))
            this.setState({berufstaetigkeit: data.Berufstaetigkeit});
          // alert(arr[1]);
          }.bind(this),
    
          error: function(xhr, status, err){
            console.log(err);
            alert(err);
          }
        });
      }

      componentDidMount(){
        this.getBerufstaetigkeitData();
      }
      render() {
        
        var berufs = this.state.berufstaetigkeit.map(beruf=>{
            return <div key={beruf} style={styleberufitem} >
            <h3>   {beruf.Datum_Von} -- {beruf.Datum_Bis}</h3>
            <p><em className="als" style={{padding:150}} > &bull;{beruf.Als}</em></p>
            <p><em className="als" style={{padding:150}} >{beruf.Was}</em></p>
            <p> <em className="in" style={{padding:150}} > {beruf.In} </em></p>
            <p> <em className="descri" style={{padding:150}} >  {beruf.Description}  </em></p>
            </div>
          });

        if(this.state.berufstaetigkeit){
    return(
      <section id="resume">
    <div className="row education">
         <div className="three columns header-col">
            <h1><span style={title} >Berufstätigkeit</span></h1> 
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns" style={styleberufs} >
                 {berufs}
               </div>
            </div>
         </div>
      </div>
      </section>
      )}
    
    
    
    
        else {alert("Ich bekomme keine Daten From Server ")}
      }



}






export default Resume;
