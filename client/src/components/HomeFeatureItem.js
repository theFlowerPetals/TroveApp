import React, { Component } from 'react';
import Loading from './Loading';

class HomeFeatureItem extends Component {
  render() {
    if(this.props.featureItem&& this.props.featureItem.id < 7) {
      return (
        <div className='col-md-4 feature-section-picture'>
          <img src={this.props.featureItem.image}></img>
          <div className='feature-info'>
            <div>
              {this.props.featureItem.brand}
            </div>
            <div>
              {this.props.featureItem.itemname}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        null
      )
    }
  }
}

export default HomeFeatureItem;