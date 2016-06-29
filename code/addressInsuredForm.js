import React from 'react';

export default class AddressInsuredForm extends React.Component {
    componentDidMount(){
        this.refs.addressLine1.value = this.props.addressObj.addressLine1,
        this.refs.spaceOrLotNo.value = this.props.addressObj.spaceOrLotNo,
        this.refs.city.value = this.props.addressObj.city,
        this.refs.state.value = this.props.addressObj.state,
        this.refs.zip.value = this.props.addressObj.zip
    }

    zipValidation(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      }
    }
    mapFormToObject(){
      return({
        addressLine1: this.refs.addressLine1.value,
        spaceOrLotNo: this.refs.spaceOrLotNo.value,
        city: this.refs.city.value,
        state: this.refs.state.value,
        zip: this.refs.zip.value
      });
    }
    render() {
        return(
          <div >
              <div className="grid vr">
                <div className="grid__col">
                    <label htmlFor="addressLine1" className="label" id='addressLine1Label' >Address Line 1<span>*</span></label>
                    <input id="addressLine1" className="input" name="addressLine1" type="text" maxLength="30" placeholder='House number & Street' ref='addressLine1' required/>
                    <div className="isVisuallyHidden" ref="addressLine1Error">
                        <span>Required.</span>
                    </div>
                </div>
                <div className="grid__col">
                    <label htmlFor="spaceOrLotNo" className="label" id='spaceOrLotNoLabel' >Space or Lot #</label>
                    <input id="spaceOrLotNo" className="input" name="spaceOrLotNo" type="text" maxLength="10" ref='spaceOrLotNo'/>
                </div>

                <div className="grid__col grid__col--6of12--medium">
                    <label htmlFor="city" className="label" id='cityLabel' >City<span>*</span></label>
                    <input id="city" className="input" name="city" type="text" maxLength="20" ref='city' required/>
                    <div className="isVisuallyHidden" ref="cityError">
                        <span>Required.</span>
                    </div>
                </div>

                <div className="grid__col grid__col--6of12--medium">
                    <label htmlFor="state" className="label" id='stateLabel' >State<span>*</span></label>
                    <div className="select">
                      <select className="select__menu" defaultValue="" id='state' ref='state' required>
                          <option value=''>Select</option>
                          <option value='FL'>Florida</option>
                      </select>
                      <div className="select__icon">
                          <svg>
                              <use xlinkHref="#down-arrow"/>
                          </svg>
                      </div>
                    </div>
                    <div className="isVisuallyHidden" ref="stateError">
                        <span>Required.</span>
                    </div>
                </div>

                <div className="grid__col grid__col--6of12--medium">
                    <label htmlFor="zip" className="label" id='zipLabel' >Zip Code<span>*</span></label>
                    <input id="zip" onKeyPress={this.zipValidation} className="input" name="zip" type="text" maxLength="5" ref='zip'  required/>
                    <div className="isVisuallyHidden" ref="zipError">
                        <span>Required.</span>
                    </div>
                </div>
              </div>
          </div>
        );
    }
}
