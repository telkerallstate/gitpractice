import React from 'react';
import Title from './title';
import Card from './card';




 import ControlBar from './controlBar';

//import AddressInsuredForm from './addressInsuredForm';
import PropertyDetails from './propertyDetails';

export default class AddressInsured extends React.Component {
    render() {
        return(
          <form ref='addressForm'>
            <br/>

            <Title value="What property  we be getting a quote for today?" />

            <br/>
            <Card title="Address to Insure" ><AddressInsuredForm ref='addressInsuredFormRef' addressObj={this.props.addressObj}/></Card>
            <br/>
            <ControlBar leftLink="" rightButton="Continue" rightFunction={this.props.getPropertyPage}/>
          </form>
        );
    }
}
