import _ from 'lodash';
import React from 'react';


class CreateEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        task: '',
        cost: '',
        done: false 
    }
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleClick(entry) {
    this.props.create(entry);
    this.setState({
      task: '',
      cost: ''
    })
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Event" name="task" value={this.state.task} onChange={this.handleChange.bind(this)}/>
        <input type="number" placeholder="Cost" name="cost" value={this.state.cost} onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleClick.bind(this, this.state)}>Submit</button>
      </div>

    )
  }
}

export default CreateEntry