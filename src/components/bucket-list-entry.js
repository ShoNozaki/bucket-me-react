import React from 'react';

class BucketListEntry extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <span>
          {this.props.task}
        </span>
        <button onClick={this.props.delete.bind(this, this.props.task)}>
          delete
        </button>
      </div>

    )
  }
}

export default BucketListEntry