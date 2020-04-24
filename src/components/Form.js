import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      completed: false,
      id: null
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // if (this.props.view.page === 'newItem') {
      this.props.handleCreate(this.state)
    // } else if(this.props.view.page === 'editItem') {
    //   this.props.handleUpdate(this.state)
    // }
  }

  componentDidMount() {
    this.setState({
      title: this.props.inputs.title,
      description: this.props.inputs.description,
      completed: this.props.inputs.completed,
      id: this.props.inputs.id
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" id="title" value={this.state.title} onChange={this.handleChange} />
        <textarea placeholder="Description" id="description" value={this.state.description} onChange={this.handleChange} > </textarea>
        Completed:
        <input type="checkbox" id="completed" onChange={this.handleChange} />
        <input type="submit" value="Create" />
      </form>
    )
  }
}

export default Form;
