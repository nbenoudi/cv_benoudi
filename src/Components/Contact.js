import React, { Component } from 'react';
const styleberufs ={
   
  borderWidth: 2,
  borderColor: "#20232a",
  borderRadius: 50,
  backgroundColor: "#61dafb",
  color: "#20232a",
  textAlign: "left",
  paddingLeft:100,
    fontSize: 15,
  fontWeight: "bold"
};


class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.Ism.Name + " "+ this.props.data.Ism.Vorname;
      var street = this.props.data.Contact.Strasse;
      var hausnummer = this.props.data.Contact.Hausnummer;
      var zip = this.props.data.Contact.PLZ;
      var ort = this.props.data.Contact.Ort;
         
      var phone= this.props.data.Contact.Tel;
      var email = this.props.data.Contact.Email;
    }

    return (
      <section id="contact">
         <div className="widget widget_contact" style={styleberufs}>
<h4>Kontakt Daten:</h4>
<p className="address">
   {name},<br />
   {street} 
   {hausnummer},<br /> {zip},{ort}<br />
   <br />
   Tel.:<span>{phone}</span>
   <br />
   Email.:<span>{email}</span>
</p>
</div>
        
   </section>
    );
  }
}

export default Contact;
