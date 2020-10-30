import React, { Component } from 'react';
class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.Ism.Name;
      var vorname=this.props.data.Ism.Vorname;
      //var profilepic= "./../images/"+this.props.data.photo;
      //var photo = this.props.data.photo;
      var street = this.props.data.Contact.Strasse;
      var city = this.props.data.Contact.Hausnummer;
      var state = this.props.data.Contact.Ort;
      var zip = this.props.data.Contact.PLZ;
      var phone= this.props.data.Contact.Tel;
      var email = this.props.data.Contact.Email;
      var resumeDownload = "./../images/"+this.props.data.photo;
    }

    return (
      <section id="about">
      <div className="row">
         
                     
                  <p className="address">
						   <span />{name} <span /> {vorname}<span /> ,
						  <span></span> {street}<span />,
						   {city} {state}, {zip} <br />
                Tel:{phone}<span /> <span /> E-Mail: {email}
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Mein Lebeslauf hierunterlanden</a>
                  </p>
               </div>
            
        
     

   </section>
    );
  }
}

export default About;
