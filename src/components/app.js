import _ from 'lodash';
import React from 'react';
import BucketList from './bucket-list';
import CreateEntry from './create-entry';

const bucketList = [
  {
    task: 'Go to Japan',
    cost: 3000,
    done: false
  },
  {
    task: 'Go to Hawaii',
    cost: 800,
    done: false
  },
  {
    task: 'Go to New York',
    cost: 2000,
    done: false
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bucketList
    }
  }

  deleteEntry(entryToDelete) {
    _.remove(this.state.bucketList, entry => entry.task === entryToDelete);
    this.setState({bucketList: this.state.bucketList});
  }

  createEntry(entry) {
    console.log(entry)
    const newList = this.state.bucketList;
    newList.push(entry);
    this.setState({bucketList: newList});

  }

  render() {
    return (
      <div>
        <h1>My Bucket List </h1>
        <CreateEntry 
        create={this.createEntry.bind(this)}/>
        <BucketList 
        bucketList={this.state.bucketList} 
        delete={this.deleteEntry.bind(this)} 
         />
      </div>
    )
  }
}


export default App;