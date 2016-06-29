import React from 'react';

export default class Card extends React.Component {
    render() {
        return(
          <div className="box--x2 box--light">
            <h2>
              {this.props.title}
            </h2>
            <br/>

              {this.props.children}
          </div>
        );
    }
}
