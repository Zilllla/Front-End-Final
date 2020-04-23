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
  }

  render() {
    return(
      <form>
      </form>
    )
  }
}

export default Form;
