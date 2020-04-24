import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      completed: null,
      id: null
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id] :
      event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreate(this.state)
  };

  componentDidMount(data) {
    console.log(data);
    // this.setState({
    //   title: this.props.inputs.title,
    //   description: this.props.inputs.description,
    //   completed: this.props.inputs.completed,
    //   id: this.props.inputs.id
    // })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" id="title" value={this.state.title} onChange={this.handleChange} />
        <textarea placeholder="Description" id="description" value={this.state.description} onChange={this.handleChange} > </textarea>
        Completed:
        <input type="checkbox" id="completed" value={this.state.completed} onChange={this.handleChange} />
        <input type="submit" value="Create" />
      </form>
    )
  }
}

export default Form;
