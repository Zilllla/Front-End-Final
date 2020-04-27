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
    if (this.props.view.page === 'newItem') {
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editItem') {
      this.props.handleUpdate(this.state)
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.formInputs.title,
      description: this.props.formInputs.description,
      completed: this.props.formInputs.completed,
      id: this.props.formInputs.id
    })
  }

  render() {
    return(
      <article>
      <div className="form-outer-container">
      <br/>
      <div className="form-inner-container">
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" id="title" value={this.state.title} onChange={this.handleChange} /><br/>
        <textarea placeholder="Description" id="description" value={this.state.description} onChange={this.handleChange} > </textarea><br/>
        Completed:
        <input type="checkbox" id="completed" onChange={this.handleChange} />
        <br/>
        <input type="submit" value="Submit" />
      </form>
      </div>
      </div>
      </article>
    )
  }
}

export default Form;
