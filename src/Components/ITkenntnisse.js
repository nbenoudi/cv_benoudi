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
 
class ITKenntnisse extends Component {
    

    constructor(props){
        super(props);
        this.state = {
          foo: 'bar',
          results: [],
          
        };

    } ;


    getKenntnisseData(){
        $.ajax({
          url:'https://api.jsonbin.io/b/5f98089d076e516c36fc029c/1',
          dataType:'json',
               
      headers: {
        "secret-key":"$2b$10$c9FZxS9pZ7Yncn0dvWanZurpEICtjlvhzMQ22V0zzn4Ig3rwi1CNC"
    },
        
          cache: false,
          success: function(data){
             
         //   const arr = [];
          //  Object.keys(data.Berufstaetigkeit).forEach(key => arr.push({name: key, value: data.Berufstaetigkeit[key]}))
            this.setState({results: data.Kenntnisse});
          

          }.bind(this),
    
          error: function(xhr, status, err){
            console.log(err);
            alert(err);
          }
        });
      }

      componentDidMount(){
        this.getKenntnisseData();

      }
    
     /* render(){

    return(
      <section id="kenntnisse">
    <div className="row education" style={styleberufs}>
      {this.state.results.map((array)=>(array.toString()))}
    
      </div>
      </section>
      )} }*/
    
    
      render() {
        return (
          <section id="kenntnisse">
          <div className="IT_Kenntnisse">
          <h1><span style={title} > IT-Kenntnisse :</span></h1>

          


            {
              this.state.results.map((i) => (
                <div key={i}  style={styleberufs} >
                 
                {i.Frontend}
                {i.Backend}
                {i.Testing}
                {i.Datenbank}
                {i.Bigdata}
                {i.Andere}
              
                {i.AnalyseundKonzeptionsmethoden}
             
                {i.Betriebssystem}
                {i.Netzwerk}
               
                {i.Entwicklungswerkzeug}


                </div>
              ))
            }


            
          </div>
          </section>
        );
      }
    }
    
       
      










export default ITKenntnisse;
