import React, { Component } from 'react';
import pic from './../images/photo.jpg';


class Header extends Component {
   
  render() {

    if(this.props.data){
      var name = this.props.data.Ism.Name;
      var vorname= this.props.data.Ism.Vorname;
       var geburtsot = this.props.data.Ism.Geburtsort;
       var geburtsdatum = this.props.data.Ism.Geburtsdatum;  
       
      var date = new Date().toLocaleString() ;
      /* var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }*/

    return (
      <header id="home">

      <nav id="nav-wrap">

   

         <ul id="nav" className="nav"  text-align='Left' style={{backgroundColor:"#607d8b" , color: "#ff5722"} }>
            <li><a className="smoothscroll" href="#home" style={{color:"#FFF"}}>Home</a></li>
            <li><a className="smoothscroll" href="#about" style={{color:"#FFF"}} >About</a></li>
	         <li><a className="smoothscroll" href="#resume" style={{color:"#FFF"}}>Berufstätigkeit</a></li>
            <li><a className="smoothscroll" href="#ausbildung" style={{color:"#FFF"}}>Ausbildung</a></li>
            <li><a className="smoothscroll" href="#praktikum" style={{color:"#FFF"}}>Praktika</a></li>
            <li><a className="smoothscroll" href="#kenntnisse" style={{color:"#FFF"}}>IT Kenntnisse</a></li>
            <li><a className="smoothscroll" href="#sprachen" style={{color:"#FFF"}}>Sprachen</a></li>
            <li><a className="smoothscroll" href="#contact" style={{color:"#FFF"}} >Kontakt Daten</a></li>

         </ul>

      </nav>

     
    <div className="banner-text" ><h2> Lebenslauf von {name} {vorname} erstellt am : { date}  </h2>
                
            <hr />
            
         </div>
         <div className="three columns">
         <img className="profile-pic"  width={170} height={200} src={pic} alt="Nasser Benoudi Profile Pic" />
        <br /> Name: {name} <br />
         Vorname: {vorname} <br />
        Geburtsdatum: {geburtsdatum} in {geburtsot} <br />

       

      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
  if(!this.props.data){
  return(
 
  <div >
    <h1 color='red'>Error</h1>
  
</div>)}
}
}

export default Header;
