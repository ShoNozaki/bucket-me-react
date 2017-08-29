import _ from 'lodash';
import React from 'react';
import BucketListEntry from './bucket-list-entry';


class BucketList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'bucketList')
    return _.map(this.props.bucketList, (bucketEntry, idx) => <BucketListEntry key={idx} {...bucketEntry} {...props}/>) 
  }

  render() {
    return (
      <div>
           {this.renderItems()}   
      </div>

    )
  }
}

export default BucketList